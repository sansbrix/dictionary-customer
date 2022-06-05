import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {sendInvite} from "../api"
import { showPopUp } from '../helper';
import { Root } from 'react-native-popup-confirm-toast';
import Spinner from 'react-native-loading-spinner-overlay';

function InviteFriend(props) {
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = React.useState({
    email: ""
  });

  const defaultErrors = {
    email: "",
    message: "",
    status: undefined,
  }

  const [errors, setErrors] = React.useState({
    ...defaultErrors
  })

  onInviteFriendClickHandler = () => {
    setLoader(true);
    // Change the state
    setErrors({ ...defaultErrors });
    sendInvite({
      email: data.email
    }).then((response_) => {
      try {
        const response = response_.data;
        console.log("response", response);
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
            setErrors({...defaultErrors, ...errorsResponse, message: response.message, status: response.status});
            showPopUp(response.message, true);
          } else {
            setErrors({...defaultErrors, message: response.message, status: response.status});
            showPopUp(response.message, true);
          }
        } else {
          setData({...data, email: ''});
          showPopUp(response.message, false);
          setErrors({ ...defaultErrors, message: response.message, status: response.status });
          setTimeout(() => {
            props.navigation.navigate('ProfileMenu')
          }, 3000);
        }
        
      } catch(e) {
        console.log("Error", e);
      }
      
    }).catch((err) => {
      console.log("err1", err.status)
      console.log("err", JSON.stringify(err));
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
          <TouchableOpacity
                  style={{
                    ...styles.back,
                    borderRadius: 100,
                    backgroundColor: "#9D908D",
                    marginTop: 50,
                    marginLeft: 20,
                    width: 35,
                    height: 35,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => props.navigation.navigate("ProfileMenu")}
                >
                  <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
                    <Text style={styles.back}>
                      <Ionicons name="md-arrow-back" size={24} color="#756765" />
                    </Text>
                  </Text>
                </TouchableOpacity>
            <Text style={styles.heading}>Invite a Friend</Text>
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
              <View style={styles.m_top_50}> 
              <Text style={styles.label}>Enter Email</Text>
              <View style={styles.d_flex}>
                <TextInput
                  onChangeText={(value) => setData({...data, email: value})}
                  style={[styles.input]}
                  placeholder="Email"
                />
                
              </View>
              <View>
                {errors.email ? <Text style={{color: 'red'}}>{errors.email}</Text> : null}
              </View>
            </View>
            <TouchableOpacity style={styles.mt_25}
              onPress={() =>  onInviteFriendClickHandler() }>
              <View style={styles.button}>
                <Text style={[styles.color_white, styles.font_16]}>Send Invite</Text>
              </View>
            </TouchableOpacity>
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
      marginTop: "-11%",
      marginLeft: 80,
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
      color: '#82A4B7',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 5,
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
    },
    d_flex: {
        display: 'flex',
        flexDirection: 'row'
    },
    m_top_50: {
      marginTop: 50
    }
  });

export default InviteFriend;