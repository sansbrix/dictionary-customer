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

const SignUp = (props) => {
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
          <TouchableOpacity
            style={{
              borderRadius: 100,
              backgroundColor: "#9D908D",
              marginTop: 50,
              marginLeft: 17,
              width: 35,
              height: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => props.navigation.navigate("Welcome")}
          >
            <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
              <Text style={styles.back}>
                <Ionicons name="md-arrow-back" size={24} color="#756765" />
              </Text>
            </Text>
          </TouchableOpacity>
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
                <TouchableOpacity
                  style={{ ...styles.mt_25, ...styles.mb_25, ...styles.button }}
                  onPress={() =>
                    props.navigation.navigate("Email Verification")
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
    marginTop: "11%",
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
