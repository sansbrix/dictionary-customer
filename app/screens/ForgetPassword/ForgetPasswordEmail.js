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
import { Root } from 'react-native-popup-confirm-toast';
import { changeForgetPassword, matchForgetPasswordOTP, sendForgetPasswordOTP } from '../../api';
import { showPopUp } from '../../helper';
import Spinner from 'react-native-loading-spinner-overlay';

const ForgetPasswordEmail = (props) => { 
    const [loader, setLoader] = React.useState(false);

    const [email, setEmail] = React.useState('');
    const [otp, setOtp] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const [emailError, setEmailError] = React.useState('');

    const [emailBox, setEmailBox] = React.useState(true);
    const [otpBox, setOtpBox] = React.useState(false);
    const [changePasswordBox, setChangePasswordBox] = React.useState(false);

    const onEnterEmailClickHandler = () => {
        setLoader(true);
        sendForgetPasswordOTP({
            email: email
        }).then((res) => {
            if(res.data.status) {
                setEmailBox(false);
                setOtpBox(true);
            } else {
                if(res.data.error && res.data.error.email) {
                    showPopUp(res.data.error.email[0], true);
                } 
            }
        }).catch((err) => {
            showPopUp("Something went wrong. Try again later.", true);
        }).finally(() => setLoader(false));
    }

    const onOTPSendClickHandler = () => {
        setLoader(true);
        matchForgetPasswordOTP({
            email: email,
            otp: otp,
        }).then((res) => {
            if(res.data.status) {
                setChangePasswordBox(true);
                setOtpBox(false);
            } else {
                showPopUp(res.data.message, true);
            }
        }).catch((err) => {
            console.log(err);
        }).finally(() => setLoader(false));
    }

    const onChangePasswordClickHandler = () => {
        changeForgetPassword({
            email:  email,
            password: password,
            confirm_password: confirmPassword,
            otp: otp,
        }).then((res) => {
            if(res.data.status){
                showPopUp(res.data.message);
                setTimeout(() => {
                    props.navigation.navigate("Login");
                }, 3000);
                
            } else {
                showPopUp(res.data.message, false);
            }
        }).catch((err) => {
            console.log(err);
        })
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
              <Text style={styles.heading}>Forget Password</Text>
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
                    {emailBox && <>
                    <View>
                        <Text style={styles.label}>Enter E-Mail</Text>
                        <TextInput
                            onChangeText={(value) => setEmail(value)}
                            style={[styles.input]}
                            placeholder="Email"
                            value={email}
                        />
                        {emailError ? <Text style={{color: 'red'}}>{emailError}</Text> : null}
                    </View>
                    <View>
                        <TouchableOpacity 
                            style={{...styles.mt_25, ...styles.mb_25, ...styles.button}} 
                            onPress={() =>  onEnterEmailClickHandler() }>
                            <Text style={[styles.color_white, styles.font_16]}>Send Code</Text>
                        </TouchableOpacity>
                    </View></>}

                    {otpBox && <>
                    <View>
                        <Text style={styles.label}>Enter OTP</Text>
                        <TextInput
                            onChangeText={(value) => setOtp(value)}
                            style={[styles.input]}
                            placeholder="OTP"
                            value={otp}
                        />
                        {emailError ? <Text style={{color: 'red'}}>{emailError}</Text> : null}
                    </View>
                    <View>
                        <TouchableOpacity 
                            style={{...styles.mt_25, ...styles.mb_25, ...styles.button}} 
                            onPress={() =>  onOTPSendClickHandler() }>
                            <Text style={[styles.color_white, styles.font_16]}>Confirm OTP</Text>
                        </TouchableOpacity>
                    </View></>}

                    {changePasswordBox && <>
                    <View>
                        <Text style={styles.label}>Enter Password</Text>
                        <TextInput
                            onChangeText={(value) => setPassword(value)}
                            style={[styles.input]}
                            placeholder="New Password"
                            value={password}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Enter Confirm Password</Text>
                        <TextInput
                            onChangeText={(value) => setConfirmPassword(value)}
                            style={[styles.input]}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                        />
                    </View>
                    <View>
                        <TouchableOpacity 
                            style={{...styles.mt_25, ...styles.mb_25, ...styles.button}} 
                            onPress={() =>  onChangePasswordClickHandler() }>
                            <Text style={[styles.color_white, styles.font_16]}>Change Password</Text>
                        </TouchableOpacity>
                    </View></>}
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </Root>
      </SafeAreaView>
    )
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


export default ForgetPasswordEmail;