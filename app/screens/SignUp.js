import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {sendOtp, UserSignup} from "../api";
import Ionicons from "@expo/vector-icons/Ionicons";
import { consoleErrors } from "../helper";


const SignUp = (props) => {
  const [disable, disableButton] = React.useState(false);
  const [data, setData] = React.useState({
    email: "",
    password: "",
    mobile_number: "",
  });

  const defaultErrors = {
    email: "",
    password: "",
    mobile_number: "",
    message: "",
    status: undefined,
  }

  const [errors, setErrors] = React.useState({
    ...defaultErrors
  })
  onSignUpClickHandler = () => {
    disableButton(true);
    // Change the state
    setErrors({ ...defaultErrors });
    UserSignup(data).then((response_) => {
      const response = response_.data;
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
          setErrors({...defaultErrors, ...errorsResponse, message: response.message, status: response.status});
        } else {
          setErrors({...defaultErrors, message: response.message, status: response.status});
        }
      } else {
        setErrors({ ...defaultErrors, message: response.message, status: response.status });
        setTimeout(() => {
          props.navigation.navigate("Login");
        }, 3000);
      }

    }).catch((err) => {
      consoleErrors(err);
      console.log("err1", err.status)
      console.log("err", JSON.stringify(err));
    }).finally(() => disableButton(false));
    
  }
  // console.log(props);
  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
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
                  placeholder="Email"
                />
                {errors.email ? <Text style={{color: 'red'}}>{errors.email}</Text> : null}
              </View>
              <View>
                <Text style={styles.label}>Mobile</Text>
                <TextInput
                  onChangeText={(value) => setData({...data, mobile_number: value})}
                  style={[styles.input]}
                  placeholder="Mobile Number"
                />
                {errors.mobile_number ? <Text style={{color: 'red'}}>{errors.mobile_number}</Text> : null}
              </View>
              <View>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  onChangeText={(value) => setData({...data, password: value})}
                  style={[styles.input]}
                  placeholder="Password"
                />
                {errors.password ? <Text style={{color: 'red'}}>{errors.password}</Text> : null}
              </View>
              <View>
                <TouchableOpacity
                  disabled={disable}
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
    marginLeft: 17,
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
    marginTop: 5,
    fontSize: 15,
    color: "#82A4B7",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
export default SignUp;
