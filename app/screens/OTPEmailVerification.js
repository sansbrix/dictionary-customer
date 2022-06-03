import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { confirmOtp, sendOtp, UserLogin } from "../api";
import { consoleErrors, showPopUp, showToast } from "../helper";
import { Root } from 'react-native-popup-confirm-toast';
import * as SecureStore from 'expo-secure-store';
import Spinner from 'react-native-loading-spinner-overlay';

function OTPEmailVerification(props) {
  const [firstInput, setFirstInput] = React.useState('');
  const [secondInput,setSecondInput] = React.useState('');
  const [thirdInput, setThirdInput] = React.useState('');
  const [fourthInput, setFourthInput] = React.useState('');
  const [loader, setLoader] = React.useState(false);
  const [otp, setOtp] = React.useState("XXXX");

  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  
  const [errors, setErrors] = React.useState({
    message: "",
    status: undefined,
  });

  React.useEffect(() => {
    console.log(props.route.params)
    if(!props.route.params.email) {
      props.navigation.navigate("Login");
    }
    resendOtpHandler();
  }, []);

 const resendOtpHandler = () => {
    sendOtp({
      email: props.route.params.email,
    }).then((res) => {
      const response = res.data;
      console.log("response", response);
      setErrors({ ...defaultErrors, message: response.message, status: response.status });
      setTimeout(() => {
        // props.navigation.navigate("Email Verification", {email: data.email});
      }, 3000);
    }).catch((err) => consoleErrors(err));
  }

  const changeTempValue = (temp, index, value) => {
    
    let str = temp.split('');
    str[index] = value ? value : 'X';
    // console.log(str);
    return str.join('');
  }

  const setOtpField = (index, value) => {
    try{
      if(value.length > 1) {
        value = value[1];
      }
      let temp = `${otp}`;
      if (index == 0) {
        temp = changeTempValue(temp, index, value);
        if(value != "") {
          ref_input2.current.focus();
        }
        setFirstInput(value);
      } else if (index == 1) {
        temp = changeTempValue(temp, index, value);
        if(value != "") {
          ref_input3.current.focus();
        }
        setSecondInput(value);
      } else if (index == 2) {
        temp = changeTempValue(temp, index, value);
        if(value != "") {
          ref_input4.current.focus();
        }
        setThirdInput(value);
      } else if (index == 3) {
        temp = changeTempValue(temp, index, value);
        setFourthInput(value);
      }
      setOtp(temp);

      if(!temp.includes('X')) {
        onSubmitOtpHandler(temp);
      }
   
    } catch(e) {
      console.log(e);
    }
  }

  const defaultErrors = {
    message: "",
    status: undefined,
  }
  const onSubmitOtpHandler = (otp) => {
    setLoader(true);
    confirmOtp({
      email: props.route.params.email,
      otp: otp,
    }).then(async (resp) => {
      const response = resp.data;
      if(!response.status) {
        showPopUp(response.message, true);
        setFirstInput("");
        setSecondInput("");
        setThirdInput("");
        setFourthInput("");
        setOtp("XXXX");
        ref_input1.current.focus();
      } else {
        await UserLogin({
          email: props.route.params.email,
          password: props.route.params.password,
        }).then(async (response_) => {
          const response = response_.data;
          await SecureStore.setItemAsync('access_token', response.token);
          props.navigation.navigate("ProfileMenu");
        });
      }
      
    })
    .catch((err) =>{console.log(err); consoleErrors(err)}).finally(() => setLoader(false));
  }

  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <Root>
         {loader ? <Spinner
           visible={loader}
           textContent={'Loading...'}
           textStyle={styles.spinnerTextStyle}
         /> : null}
        <ScrollView>
          <View styles={styles.container}>
            <View style={styles.bg_white}>
              <View style={styles.view}>
                <TouchableOpacity
                  style={{
                    borderRadius: 100,
                    backgroundColor: "#9D908D",
                    marginTop: 50,
                    marginLeft: 1,
                    width: 35,
                    height: 35,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => props.navigation.navigate("Login")}
                >
                  <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
                    <Text style={styles.back}>
                      <Ionicons name="md-arrow-back" size={24} color="#756765" />
                    </Text>
                  </Text>
                </TouchableOpacity>
                <Text style={styles.register}>
                  Please check your email and enter received OTP
                </Text>
                <Text style={styles.heading}>Email Verification</Text>
              </View>
            </View>
            <View style={styles.darkContainer}>
              <View style={styles.innerContainer}>
                <View style={styles.p_20}>
                  <View>
                    <Text style={styles.label}>Enter OTP</Text>
                    <View style={styles.d_flex}>
                      <TextInput 
                        ref={ref_input1}
                        style={styles.input} 
                        autoFocus={true} 
                        returnKeyType="next"
                        onChangeText={(value) => { setOtpField(0, value);}}
                        value={firstInput}
                        />
                      <TextInput 
                        style={styles.input} 
                        returnKeyType="next"
                        onChangeText={(value) => { setOtpField(1, value);}}
                        ref={ref_input2}
                        value={secondInput}
                        />
                      <TextInput 
                        style={styles.input} 
                        returnKeyType="next"
                        onChangeText={(value) => { setOtpField(2, value);}}
                        ref={ref_input3}
                        value={thirdInput}
                        />
                      <TextInput 
                        style={styles.input} 
                        returnKeyType="next"
                        onChangeText={(value) => { setOtpField(3, value);}}
                        ref={ref_input4}
                        value={fourthInput}
                        />
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      resendOtpHandler()
                    }
                  >
                    <View style={styles.mt_25}>
                      <Text style={styles.another_link}>Resend OTP.</Text>
                    </View>
                  </TouchableOpacity>
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
    width: "15%",
    margin: 5,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
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
    height: "40%",
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
    marginTop: "12%",
    fontSize: 15,
    color: "#ffffff",
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
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 5,
  },
  mt_25: {
    marginTop: 25,
  },
  p_20: {
    padding: 20,
  },
  another_link: {
    marginTop: 2,
    fontSize: 15,
    color: "#82A4B7",
    marginLeft: "auto",
    marginRight: "auto",
  },
  d_flex: {
    display: "flex",
    flexDirection: "row",
  },
});

export default OTPEmailVerification;
