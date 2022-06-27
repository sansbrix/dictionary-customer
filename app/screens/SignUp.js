import React, {useLayoutEffect} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Checkbox from 'expo-checkbox';
import {sendOtp, UserSignup} from "../api";
import Ionicons from "@expo/vector-icons/Ionicons";
import { consoleErrors, showToast } from "../helper";
import { Root } from 'react-native-popup-confirm-toast';
import Spinner from 'react-native-loading-spinner-overlay';
import CountryPicker from "react-native-country-codes-picker";

const SignUp = (props) => {
  const [show, setShow] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState('');
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = React.useState({
    email: "",
    password: "",
    mobile_number: "", 
    invite_by_code: "",
    extension: "+91",
    termsAndConditionSelected: false,
  });

  const defaultErrors = {
    email: "",
    password: "",
    mobile_number: "",
    message: "",
    status: undefined,
    extension: "",
  }

  const [errors, setErrors] = React.useState({
    ...defaultErrors
  })
  
  const onSignUpClickHandler = () => {
    setLoader(true);
    // Change the state
    setErrors({ ...defaultErrors });
    UserSignup(data).then((response_) => {
      const response = response_.data;
      console.log(response_)
      if(!response.status) {
        if(response.error) {
          const errors_ = response.error;
          console.log(errors_, "errorss----")
          let errorsResponse = {};
          Object.keys(errors_).forEach((er) => {
            if(Array.isArray(errors_[er])) {
              errorsResponse[er] = errors_[er][0];
            }
          });
          // Set the state
          setErrors({...defaultErrors, ...errorsResponse});
        } else {
          setErrors({...defaultErrors});
        }
        showToast(response.message);
      } else {
        setData({
          email: "",
          password: "",
          mobile_number: "",
        })
        setErrors({ ...defaultErrors });
        props.navigation.navigate("Login" , {signup_successful: true});
      }

    }).catch((err) => {
      consoleErrors(err);
    }).finally(() => setLoader(false));
  }

  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <Root>
         {loader ? <Spinner
           visible={loader}
           textStyle={styles.spinnerTextStyle}
         /> : null}
        <ScrollView>
          <View
            style={{
              flex: 0.3,
              backgroundColor: "#82A4B7",
              borderBottomRightRadius: 45,
            }}
          >
            <Text style={styles.heading}>Signup</Text>
          </View>
          <View style={{ flex: 0.7, backgroundColor: "#82A4B7" }}>
            <View
              style={{
                backgroundColor: "#fff",
                height: "100%",
                borderTopLeftRadius: 50,
                paddingLeft: 50,
                paddingRight: 50,
                paddingTop: 5,
              }}
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                <View>
                  {errors.status != undefined ? <Text style={{color: errors.status ? 'green' : 'red' }}>{errors.message}</Text> : null}
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    onChangeText={(value) => setData({...data, email: value})}
                    style={[styles.input]}
                    value={data.email}
                    placeholder="Email"
                  />
                  {errors.email ? <Text style={{color: 'red'}}>{errors.email}</Text> : null}
                </View>
                <View>
                  <Text style={styles.label}>Mobile</Text>
                  <View style={{flex: 1, display: 'flex',flexDirection: 'row'}}>
                    <View style={{flex: 0.2, display: 'flex'}}>
                      <TextInput
                        onChangeText={(value) => setData({...data, extension: value})}
                        style={[styles.input, {width: "100%", display: 'flex'}]}
                        value={data.extension}
                        placeholder=""
                      />
                    </View>
                    <View style={{flex: 0.8, display: 'flex'}}>
                      <TextInput
                        onChangeText={(value) => setData({...data, mobile_number: value})}
                        style={[styles.input, {width: "100%", display: 'flex', marginLeft: 10}]}
                        value={data.mobile_number} 
                        placeholder="Mobile Number"
                      />
                    </View>
                  
                  </View>
                  {errors.mobile_number ? <Text style={{color: 'red'}}>{errors.mobile_number}</Text> : null}
                  {!errors.mobile_number && errors.extension ? <Text style={{color: 'red'}}>{errors.extension}</Text> : null}
                </View>
                <View>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    secureTextEntry={true}
                    onChangeText={(value) => setData({...data, password: value})}
                    style={[styles.input]}
                    placeholder="Password"
                    value={data.password}
                  />
                  {errors.password ? <Text style={{color: 'red'}}>{errors.password}</Text> : null}
                </View>
                <View>
                  <Text style={styles.label}>Invitation Code</Text>
                  <TextInput
                    onChangeText={(value) => setData({...data, invite_by_code: value})}
                    style={[styles.input]}
                    placeholder="Invitation Code"
                    value={data.invite_by_code}
                  />
                  {errors.invite_by_code ? <Text style={{color: 'red'}}>{errors.invite_by_code}</Text> : null}
                </View>
                <View style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
                  <View style={{display: 'flex', flex: 0.2 }}>
                    <Checkbox 
                      style={{display: 'flex', flex: 0.01, marginTop: 5 }}
                      value={data.termsAndConditionSelected} 
                      onValueChange={() => setData({...data, termsAndConditionSelected: !data.termsAndConditionSelected})}
                      color={data.termsAndConditionSelected ? '#4630EB' : undefined}
                    />
                  </View>
                  <View style={{display: 'flex', flex: 0.99 }}>
                    <Text style={[styles.label, {display: 'flex'}]}>I accept terms and conditions.</Text>
                  </View>           
                  <View>
                    {errors.tandc ? <Text style={{color: 'red'}}>{errors.tandc}</Text> : null}
                  </View>         
                </View>
                <View>
                  <TouchableOpacity
                    style={{ ...styles.mt_25, ...styles.mb_25, ...styles.button }}
                    onPress={() =>
                      onSignUpClickHandler()
                    }
                  >
                    <Text style={[styles.color_white, styles.font_16]}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text
                    style={styles.another_link}
                    onPress={() => props.navigation.navigate("Login")}
                  >
                    Already have a account? Login here...
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </Root>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    marginTop: "19%",
    marginLeft: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 15,
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
    backgroundColor: "#FFFFFF",
    height: "22%",
    width: "100%",
    // flex: 0.4,
  },
  innerContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    height: "100%",
    width: "100%",
    flex: 0.4,
  },
  back: {
    marginTop: "10%",
    fontSize: 15,
    color: "#FFFFFF",
  },
  register: {
    marginTop: "12%",
    fontSize: 15,
    color: "#FFFFFF",
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
    color: "#FFFFFF",
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
  mb_25: {
    marginBottom: 25,
  },
  p_20: {
    padding: 20,
  },
  another_link: {
    marginTop: -7,
    marginBottom: 10,
    fontSize: 15,
    color: "#82A4B7",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
export default SignUp;
