import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const UpdateProfile = (props) => {
  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <ScrollView>
        <View styles={styles.container}>
          <View style={styles.bg_white}>
            <View style={styles.view}>
            <TouchableOpacity style={{ ...styles.back,
                borderRadius: 100, 
                backgroundColor: "#9D908D", 
                marginTop: 50, 
                marginLeft: 1, 
                width: 35,height: 35, 
                justifyContent: "center", 
                alignItems: "center" 
                }}
                onPress={() => props.navigation.navigate('ProfileMenu')}>
                <Text style={{color: "#D3CFD6", fontWeight:"700"}}>
                  <Text style={styles.back}>
                      <Ionicons name="md-arrow-back" size={24} color="#756765" />
                  </Text>
                </Text>
              </TouchableOpacity>
              <Text style={styles.heading}>Update Profile</Text>
            </View>
          </View>
          <View style={styles.darkContainer}>
            <View style={styles.innerContainer}>
              <View style={styles.p_20}>
                <View>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="First Name"
                  />
                </View>
                <View>
                  <Text style={styles.label}>Last Name</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="Last Name"
                  />
                </View>
                <View>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="Email"
                  />
                </View>
                <View>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="Password"
                  />
                </View>
                <View>
                  <Text style={styles.label}>Country</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="Country"
                  />
                </View>
                <View>
                  <Text style={styles.label}>City</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="City"
                  />
                </View>
                <View>
                  <Text style={styles.label}>Nationality</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="Nationality"
                  />
                </View>
                <View>
                  <Text style={styles.label}>Native Langugae</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="Native Language"
                  />
                </View>
                <View>
                  <Text style={styles.label}>Mobile Number</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="Mobile Number"
                  />
                </View>
                <View>
                  <Text style={styles.label}>DOB</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="DOB"
                  />
                </View>
                <View>
                {/* show popup profile has been updated */}
                  <TouchableOpacity style={styles.mt_25}
                    onPress={()=>props.navigation.navigate('ProfileMenu')}>
                    <View style={styles.button}>
                      <Text style={[styles.color_white, styles.font_16]}>
                        Update
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  heading: {
    marginTop: "2%",
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
