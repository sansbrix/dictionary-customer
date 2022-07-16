import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable 
} from "react-native";
import { confirmPaymentAgent, createPaymentIntent } from "../api";
import { consoleErrors, showPopUp } from "../helper";
import { CardField, useStripe } from '@stripe/stripe-react-native';
import {StripeProvider,  initStripe, useConfirmPayment } from '@stripe/stripe-react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Root } from 'react-native-popup-confirm-toast';
import Spinner from 'react-native-loading-spinner-overlay';

const cardImage = require('../../assets/cards.png');


import { Platform } from 'react-native';

const MethodSelector = ({ onPress, paymentMethod }) => {
// ...
return (
    <View style={{ marginVertical: 48, width: '75%'}}>
    <Text style={{
        fontSize: 14,
        letterSpacing: 1.5,
        color: 'black',
        textTransform: 'uppercase'
    }}>
        Press Pay to proceed
    </Text>
    {/* If there's no paymentMethod selected, show the options */}
    { !paymentMethod &&
        <Pressable
            onPress={onPress}
            style={{
                flexDirection: 'row',
                paddingVertical: 8,
                alignItems: 'center',
            }}>
            {/* {
                Platform.select({
                    ios: (<Text style={styles.boldText}>
                            Apple Pay
                        </Text>),
                    android: (<Text style={styles.boldText}>
                            Google Pay
                        </Text>)
                })
            } */}

            <View style={[styles.selectButton, {marginLeft: 16} ]}>
                <Text style={[styles.boldText, {color: '#007DFF'}]}>Press Here To Proceed</Text>
            </View>
        </Pressable>
    }
    {/* If there's a paymentMethod selected, show it */}
    { !!paymentMethod &&
        <Pressable
            onPress={onPress}
            style={{ 
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
            }}>
            {paymentMethod.label.toLowerCase().includes('apple') &&
                <Text style={styles.boldText}>
                    Apple Pay
                </Text>
            }
            {paymentMethod.label.toLowerCase().includes('google') &&
                <Text style={styles.boldText}>
                    Google Pay
                </Text>
            }
            {!paymentMethod.label.toLowerCase().includes('google') &&
            !paymentMethod.label.toLowerCase().includes('apple') &&
                <View style={[styles.selectButton, { marginRight: 16 }]}>
                    <Text style={[styles.boldText, { color: '#007DFF' }]}>
                        {paymentMethod.label}
                    </Text>
                </View>
            }
            <Text style={[styles.boldText, { color: '#007DFF', flex: 1 }]}>
                Change payment method
            </Text>
        </Pressable>
    }
    </View>
)}


const PlanPayment = (props) => {
  const [loader, setLoader] = React.useState(false);
  const [ paymentMethod, setPaymentMethod ] = React.useState();

  const {
      initPaymentSheet,
      presentPaymentSheet,
      confirmPaymentSheetPayment,
  } = useStripe();

  const {confirmPayment, loading} = useConfirmPayment();

  const handlePayPress = async () => { 
    setLoader(true);
    // Gather the customer's billing information (e.g., email)
    const billingDetails = {
      email: 'jenny.rosen@example.com',
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();
    console.log("clientSecret", clientSecret);
    // Confirm the payment with the card details
    const {paymentIntent, error} = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails,
    });

    if (error) {
      showPopUp(error.message, true);
    } else if (paymentIntent) {
      const paymentConfirmDB = await confirmPaymentAgent(props.route.params.plan);
      if(paymentConfirmDB) {
        showPopUp("Subscription has been activated");
      } else {
        showPopUp("Something went wrong. Try again later.", true);
      }
    }

    setLoader(false);
  };

  const fetchPaymentIntentClientSecret = async () => {
    createPaymentIntent({
      ...props.route.params.plan
    }).catch((error) => {
      consoleErrors(error);
    });
    const response = await createPaymentIntent({
      ...props.route.params.plan
    });
    return response.data.client_secret;
  };

  React.useEffect(() => {
    (async () => {
      await initStripe({
        publishableKey:
          "pk_test_51JsPtZSFIEz1CbIeM6ziAtoHu8tKLnxPdskn0pu36fWEHJXkGe0J9Wy480tcsaP1YRKut5wymnrz3xPlkNDVbRDO00udjZztjZ",
        merchantIdentifier: 'yourMerchantIdentifier'
      });

      // Initialize the PaymentSheet with the paymentIntent data,
      // we will later present and confirm this
      await initializePaymentSheet();
    })();   
  }, []);

  const initializePaymentSheet = async () => {
    setLoader(true);
    const clientSecret = await fetchPaymentIntentClientSecret();
    const { error, paymentOption  } = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        customFlow: true,
        merchantDisplayName: "Dictionary",
        style: 'alwaysLight', // If darkMode
        googlePay: false, // If implementing googlePay
        applePay: false, // If implementing applePay
        merchantCountryCode: 'ES', // Countrycode of the merchant
        // testEnv: __DEV__, // Set this flag if it's a test environment
    });
    if (error) {
        console.log(error)
    } else {
        setLoader(false);
        // Upon initializing if there's a paymentOption
        // of choice it will be filled by default
        setPaymentMethod(paymentOption);
    }
  };

  const handleSelectMethod = async () => {
    const { error, paymentOption } = await presentPaymentSheet({
        confirmPayment: false,
    });
    if (error) {
        alert(`Error code: ${error.code}`, error.message);
    }
    setPaymentMethod(paymentOption);
  }

  const handleBuyPress = async () => {
    setLoader(true);
    if (paymentMethod) {
        const response = await confirmPaymentSheetPayment();

        if (response.error) {
            showPopUp(response.error.message, true);
            console.error(response.error.message);
        } else {
          const paymentConfirmDB = await confirmPaymentAgent(props.route.params.plan);
          if(paymentConfirmDB) {
            showPopUp("Subscription has been activated");
              setTimeout(() => {
            props.navigation.navigate('MainMenu')
          }, 3000);
          } else {
            showPopUp("There was internal server error.Please contact Admin, your payment has been proceed.", true);
          }
          
        }

        setLoader(false);
    }
  }

  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <Root>
        {loader ? <Spinner
          visible={loader}
          textStyle={styles.spinnerTextStyle}
        /> : null}
        <ScrollView>
          <View styles={styles.container}>
            <View style={styles.bg_white}>
              <View style={styles.view}>
                <TouchableOpacity
                  style={{
                    ...styles.back,
                    borderRadius: 100,
                    backgroundColor: "#9D908D",
                    marginTop: 50,
                    marginLeft: 1,
                    width: 35,
                    height: 35,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => props.navigation.navigate("Plans")}
                >
                  <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
                    <Text style={styles.back}>
                      <Ionicons name="md-arrow-back" size={24} color="#756765" />
                    </Text>
                  </Text>
                </TouchableOpacity>
                <Text style={styles.register}>
                  Enter your details to proceed
                </Text>

              </View>
            </View>
            <View style={styles.darkContainer}>
              <View style={styles.innerContainer}>
                <View style={styles.p_20}>
                  <StripeProvider
                    publishableKey="pk_test_51JsPtZSFIEz1CbIeM6ziAtoHu8tKLnxPdskn0pu36fWEHJXkGe0J9Wy480tcsaP1YRKut5wymnrz3xPlkNDVbRDO00udjZztjZ"
                    urlScheme="your-url-scheme" 
                    // required for 3D Secure and bank redirects
                    merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" 
                    // required for Apple Pay
                  >
                    <MethodSelector onPress={handleSelectMethod} paymentMethod={paymentMethod} />
                    {/* <CardField
                      postalCodeEnabled={true}
                      placeholder={{
                        number: '4242 4242 4242 4242',
                      }}
                      style={{
                        height: 200,
                        // justifyContent: "center",
                        // alignItems: "center",
                        // textAlign: "center",
                        display: "flex",
                        flexDirection: "row",
                      }}
                      cardStyle={{
                        backgroundColor: "#efefefef",
                        textAlign: "center",
                        textColor: "pink",
                      }}
                      onCardChange={(cardDetails) => {
                        console.log('cardDetails', cardDetails);
                      }}
                      onFocus={(focusedField) => {
                        console.log('focusField', focusedField);
                      }}
                    /> */}
                    {paymentMethod && <Button onPress={() => handleBuyPress()} title="Pay" disabled={loading} />}
                  
                  </StripeProvider>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Root>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  heading: {
    marginTop: "1%",
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    margin: 5,
    padding: 10,
    color: "#82A4B7",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    backgroundColor: "#F4F9EB",
  },
  view: {
    backgroundColor: "#82A4B7",
    height: "100%",
    width: "100%",
    borderBottomEndRadius: 50,
    paddingLeft: 20,
  },
  darkContainer: {
    backgroundColor: "#82A4B7",
    height: "100%",
    width: "100%",
  },
  bg_white: {
    backgroundColor: "#ffffff",
    height: "25%",
    width: "100%",
  },
  innerContainer: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 50,
    height: "100%",
    width: "100%",
  },
  back: {
    marginTop: "10%",
    fontSize: 15,
    color: "#ffffff",
  },
  register: {
    marginTop: "5%",
    fontSize: 15,
    color: "#ffffff",
    marginBottom: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#756765",
    padding: 10,
    borderRadius: 20,
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  color_white: {
    color: "#ffffff",
  },
  font_16: {
    fontSize: 16,
  },
  label: {
    marginTop: 5,
    fontSize: 15,
    color: "#82A4B7",
  },
  mt_25: {
    marginTop: 25,
  },
  p_20: {
    padding: 20,
    marginTop: 100
  },
  another_link: {
    marginTop: 5,
    fontSize: 15,
    color: "#82A4B7",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default PlanPayment;
