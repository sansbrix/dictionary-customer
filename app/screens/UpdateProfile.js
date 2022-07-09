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
import Ionicons from "@expo/vector-icons/Ionicons";
import {getUserProfile, UpdateUserProfile} from "../api";
import { consoleErrors, showToast } from "../helper";
import Spinner from 'react-native-loading-spinner-overlay';
import { Root } from 'react-native-popup-confirm-toast';

const UpdateProfile = (props) => {
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = React.useState({
    param: "",
    first_name: "",
    last_name: "",
    country: "",
    state: "",
    city: "",
    nationality: "",
    native_language: "",
    date_of_birth: "",

  });

  const defaultErrors = {
    param: "",
    status: undefined,
  }

  const [errors, setErrors] = React.useState({
    ...defaultErrors
  });

  React.useEffect(() => {
    setLoader(true);
    getUserProfile().then((response) => {
      console.log("Response", response.data);
      setData({
        ...response.data.user,
      })
    }).catch((error) => consoleErrors(error, props))
    .finally(() => setLoader(false));
  }, []);   

  const onProfileUpdateClickHandler = () => {
    setLoader(true);
    // Change the state
    setErrors({ ...defaultErrors });
    UpdateUserProfile(data).then((response_) => {
      try {
        const response = response_.data;
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
          } else {
            setErrors({...defaultErrors, message: response.message, status: response.status});
          }
        } else {
          showToast(response.message);
          setErrors({ ...defaultErrors });
          setTimeout(() => {
            props.navigation.replace('ProfileMenu')
          }, 2000);
        }
      } catch(e) {
        console.log("Error", e);
      }
      
    }).catch((error) => {
      consoleErrors(error, props);
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
            <Text style={styles.heading}>Update Profile</Text>
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
                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                      onChangeText={(value) => setData({...data, first_name: value})}
                      style={[styles.input]}
                      placeholder="First Name"
                      value={data.first_name}
                      
                    />
                    {errors.first_name ? <Text style={{color: 'red'}}>{errors.first_name}</Text> : null}
                  </View>
                  <View>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                      onChangeText={(value) => setData({...data, last_name: value})}
                      style={[styles.input]}
                      placeholder="Last Name"
                      value={data.last_name}
                    />
                    {errors.last_name ? <Text style={{color: 'red'}}>{errors.last_name}</Text> : null}
                  </View>
                  <View>
                    <Text style={styles.label}>Country</Text>
                    <TextInput
                      onChangeText={(value) => setData({...data, country: value})}
                      style={[styles.input]}
                      placeholder="Country"
                      value={data.country}
                    />
                    {errors.country ? <Text style={{color: 'red'}}>{errors.country}</Text> : null}
                  </View>
                  <View>
                    <Text style={styles.label}>State</Text>
                    <TextInput
                      onChangeText={(value) => setData({...data, state: value})}
                      style={[styles.input]}
                      placeholder="State"
                      value={data.state}
                    />
                    {errors.state ? <Text style={{color: 'red'}}>{errors.state}</Text> : null}
                  </View>
                  <View>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                      onChangeText={(value) => setData({...data, city: value})}
                      style={[styles.input]}
                      placeholder="City"
                      value={data.city}
                    />
                    {errors.city ? <Text style={{color: 'red'}}>{errors.city}</Text> : null}
                  </View>
                  <View>
                    <Text style={styles.label}>Nationality</Text>
                    <TextInput
                      onChangeText={(value) => setData({...data, nationality: value})}
                      style={[styles.input]}
                      placeholder="Nationality"
                      value={data.nationality}
                    />
                    {errors.nationality ? <Text style={{color: 'red'}}>{errors.nationality}</Text> : null}
                  </View>
                  <View>
                    <Text style={styles.label}>Native Langugae</Text>
                    <TextInput
                      onChangeText={(value) => setData({...data, native_language: value})}
                      style={[styles.input]}
                      placeholder="Native Language"
                      value={data.native_language}
                    />
                    {errors.native_language ? <Text style={{color: 'red'}}>{errors.native_language}</Text> : null}
                  </View>
                  <View>
                    <Text style={styles.label}>DOB</Text>
                    <TextInput
                      onChangeText={(value) => setData({...data, date_of_birth: value})}
                      style={[styles.input]}
                      placeholder="DOB"
                      value={data.date_of_birth}
                    />
                    {errors.date_of_birth ? <Text style={{color: 'red'}}>{errors.date_of_birth}</Text> : null}
                  </View>
                  <View>
                    {/* show popup profile has been updated */}
                    <TouchableOpacity
                      style={styles.mt_25}
                      onPress={() => onProfileUpdateClickHandler()
                        // props.navigation.navigate("ProfileMenu")
                      }
                    >
                      <View style={styles.button}>
                        <Text style={[styles.color_white, styles.font_16]}>
                          Update
                        </Text>
                      </View>
                    </TouchableOpacity>
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
    backgroundColor: "#ffffff",
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
    height: "12%",
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
  },
  mt_25: {
    marginTop: 25,
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

export default UpdateProfile;
