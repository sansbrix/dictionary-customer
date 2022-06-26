import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const cardImage = require('../../assets/cards.png');

function PlanPayment(props) {
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
                onPress={() => props.navigation.navigate("Plans")}
              >
                <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
                  <Text style={styles.back}>
                    <Ionicons name="md-arrow-back" size={24} color="#756765" />
                  </Text>
                </Text>
              </TouchableOpacity>
              <Text style={styles.register}>
                Payment details for #subscription plan
              </Text>
              <Text style={styles.heading}>Payment Details</Text>
            </View>
          </View>
          <View style={styles.darkContainer}>
            <View style={styles.innerContainer}>
              <View style={styles.p_20}>
                <View>
                  <Text style={styles.label}>Card Number</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="424242 424242 424242"
                  />
                </View>
                <View>
                  <Text style={styles.label}>Name on card</Text>
                  <TextInput
                    style={[styles.input, styles.color_white]}
                    placeholder="Ex: Anonymous"
                  />
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 0.5}}>
                    <Text style={styles.label}>Expiry</Text>
                    <TextInput
                      style={[styles.input, styles.color_white]}
                      placeholder="Expiry"
                    />
                  </View>
                  <View style={{flex: 0.5}}>
                    <Text style={styles.label}>CVC</Text>
                    <TextInput
                      style={[styles.input, styles.color_white]}
                      placeholder="CVC"
                    />
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.mt_25}
                    onPress={() =>
                      props.navigation.navigate("Payment Verification")
                    }
                  >
                    <View style={styles.button}>
                      <Text style={[styles.color_white, styles.font_16]}>
                        Pay #amount
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{}}>
                  <Image 
                    source={cardImage} 
                    resizeMode="contain"
                    style={{height: 50, width: 'auto'}}
                  />
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
    height: "25%",
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
    marginTop: "5%",
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

export default PlanPayment;
