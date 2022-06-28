import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {UserLogin} from "../api";
import { consoleErrors, showToast } from '../helper';
import { Root } from 'react-native-popup-confirm-toast'
import Spinner from 'react-native-loading-spinner-overlay';
import * as SecureStore from 'expo-secure-store';

const Login = (props) => {
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = React.useState({
    email: "",
    password: ""
  });
  const defaultErrors = {
    email: "",
    password: "",
    message: "",
    status: undefined,
  }

  const [errors, setErrors] = React.useState({
    ...defaultErrors
  })

  const onLoginClickHandler = () => {
    // Change the state
    setLoader(true);
    setErrors({ ...defaultErrors });
    UserLogin(data).then(async (response_) => {
      const response = response_.data;
      try {
        if(!response.status) {
          if(response.error) {
            const errors_ = response.error;
            let errorsResponse = {};
            Object.keys(errors_).forEach((er) => {
              if(Array.isArray(errors_[er])) {
                errorsResponse[er] = errors_[er][0];
              }
            });
            // Set the state
            setErrors({...defaultErrors, ...errorsResponse });
          } else if(response.email_not_verified){
            props.navigation.navigate("Email Verification", {email: data.email, password: data.password});
          } else {
            setErrors({...defaultErrors });
          }
          showToast(response.message);
        } else {
          setErrors({ ...defaultErrors  });
          await SecureStore.setItemAsync('access_token', response.token);
          props.navigation.replace('ProfileMenu')
        }
      } catch(e) {
        console.log("Error", e);
      }
      
    }).catch((err) => {
      consoleErrors(err);
      showToast("Something went wrong. Try again later.");
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
            <Text style={styles.heading}>Login</Text>
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
                        <Text style={styles.label}>Your Email</Text>
                        <TextInput
                        onChangeText={(value) => setData({...data, email: value})}
                        style={[styles.input]}
                        placeholder="Email"
                        />
                        {errors.email ? <Text style={{color: 'red'}}>{errors.email}</Text> : null}
                      </View>
                      <View>
                        <Text style={styles.label}>Your Password</Text>
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
                          style={{...styles.mt_25, ...styles.mb_25, ...styles.button}} 
                          onPress={() =>  onLoginClickHandler() }>
                            <Text style={[styles.color_white, styles.font_16]}>Login</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.mt_25}>
                        <Text 
                          style={styles.another_link}
                          onPress={() => props.navigation.navigate('Signup')}
                          >New to dictionary app? Register here...</Text>
                      </View>
                      <View>
                        <Text 
                          style={styles.another_link}
                          onPress={() => props.navigation.navigate('ForgetPasswordEmail')}
                          >Forget Your Password? Click Here !</Text>
                      </View>
              </ScrollView>
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
      backgroundColor: '#ffffff',
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
      width: '100%',
      margin: 5,
      padding: 10,
      color: '#82A4B7',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 10,
      backgroundColor: '#F4F9EB'
    },
    view: {
      backgroundColor: '#82A4B7',
      height: '100%',
      width: '100%',
      borderBottomEndRadius: 50,
      paddingLeft: 20,
    },
    new_class: {
      marginTop: 60
    },
    darkContainer: {
      backgroundColor: '#82A4B7',
      height: '100%',
      width: '100%',
    },
    bg_white: {
      backgroundColor: '#ffffff',
      height: '27%',
      width: '100%',
    },
    innerContainer: {
      backgroundColor: '#ffffff',
      borderTopLeftRadius: 50,
      height: '100%',
      width: '100%',
    },
    back: {
      marginTop: '10%',
      fontSize: 15,
      color: '#ffffff',
    },
    register: {
      marginTop: '12%',
      fontSize: 15,
      color: '#ffffff'
    },
    button: {
      alignItems: "center",
      backgroundColor: "#756765",
      padding: 10,
      borderRadius: 20,
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    color_white: {
      color: '#ffffff'
    },
    font_16: {
      fontSize: 16,
    },
    label: {
      marginTop: 5,
      fontSize: 15,
      color: '#82A4B7'
    },
    mt_25: {
      marginTop: 25
    },
    p_20: {
      padding: 20
    },
    another_link: {
      marginTop: 5,
      fontSize: 15,
      color: '#82A4B7',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
});

export default Login;