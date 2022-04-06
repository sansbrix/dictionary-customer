import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Alphabets = (props) => {
  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
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
                onPress={() => props.navigation.navigate("MainMenu")}
              >
                <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
                  <Text style={styles.back}>
                    <Ionicons name="md-arrow-back" size={24} color="#756765" />
                  </Text>
                </Text>
              </TouchableOpacity>
              <Text style={styles.heading}>Alphabets</Text>
            </View>
          </View>
          <View style={styles.darkContainer}>
            <View style={styles.innerContainer}>
              <View style={[styles.p_20, styles.outer_container]}>
                <View>
                  <Text style={styles.label}>Select Language</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="Select Language"
                  />
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signle Alphabet")}
                  >
                    <View style={styles.cat_image_container}>
                      <Text style={styles.plan_label}>A</Text>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
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
    height: "19%",
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
  outer_container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  plans_div: {
    width: "100%",
    padding: 15,
    backgroundColor: "#F4F9EB",
    display: "flex",
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 4,
    borderRadius: 10,
  },
  dot: {
    height: 20,
    width: 20,
    backgroundColor: "#756765",
    borderRadius: 50,
    marginTop: 11,
  },
  plan_label: {
    fontSize: 20,
    color: "#82A4B7",
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 6,
  },
  plan_sub_label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
    marginLeft: 10,
  },
  plan_sub_label_paid: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#756765",
    marginLeft: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  cat_image_container: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    padding: 0,
    height: 40,
    width: 45,
    borderColor: "#9D908D",
    borderRightWidth: 4,
    borderLeftWidth: 4,
    borderRadius: 10,
  },
});

export default Alphabets;
