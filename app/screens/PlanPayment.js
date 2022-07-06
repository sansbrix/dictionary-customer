import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { confirmPaymentAgent, createPaymentIntent } from "../api";
import { consoleErrors, showPopUp } from "../helper";
import { CardField, useStripe } from '@stripe/stripe-react-native';
import {StripeProvider,  useConfirmPayment } from '@stripe/stripe-react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Root } from 'react-native-popup-confirm-toast';

const cardImage = require('../../assets/cards.png');

const PlanPayment = (props) => {
  const {confirmPayment, loading} = useConfirmPayment();

  const handlePayPress = async () => { 
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
      console.log('Payment confirmation error', error);
    } else if (paymentIntent) {
      console.log("PaymnetIntent", paymentIntent);
      const paymentConfirmDB = await confirmPaymentAgent(props.route.params.plan);
      if(paymentConfirmDB) {
        showPopUp("Subscription has been activated");
      } else {
        showPopUp("Something went wrong. Try again later.", true);
      }
    }
  };

  const fetchPaymentIntentClientSecret = async () => {
    const response = await createPaymentIntent({
      ...props.route.params.plan
    });
    return response.data.client_secret;
  };

  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <Root>
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
                  
                    <CardField
                      postalCodeEnabled={true}
                      placeholder={{
                        number: '4242 4242 4242 4242',
                      }}
                      cardStyle={{
                        backgroundColor: '#FFFFFF',
                        textColor: '#000000',
                      }}
                      style={{
                        width: '100%',
                        height: 50,
                        marginVertical: 30,
                      }}
                      onCardChange={(cardDetails) => {
                        console.log('cardDetails', cardDetails);
                      }}
                      onFocus={(focusedField) => {
                        console.log('focusField', focusedField);
                      }}
                    />
                    <Button onPress={handlePayPress} title="Pay" disabled={loading} />
                  
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
