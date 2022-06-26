import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { showUsersSubscriptions } from "../api";
import Spinner from 'react-native-loading-spinner-overlay';

function PlansScreen(props) {
  const [loader, setLoader] = React.useState(false);
  const [subs, setSubs] = React.useState([]);
  
  React.useEffect(() => {
    setLoader(true);
    showUsersSubscriptions().then((res) => {
      console.log(res.data.data);
      setSubs(res.data.data);
      setLoader(false);
    });
  },[]);
   
  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      {loader ? <Spinner
           visible={loader}
           textStyle={styles.spinnerTextStyle}
         /> : null}
      <View styles={styles.container}>
        <View style={styles.bg_white}>
          <View style={styles.view}>
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
            <Text style={styles.heading}>More Subscriptions</Text>
            {/* <Text style={styles.register}>
              Congratulations! Enjoy your free trial for 1 day!!!
            </Text> */}
           
          </View>
        </View>
        <View style={styles.darkContainer}>
          <View style={styles.innerContainer}>
            <View style={[styles.p_20, styles.outer_container]}>
              {subs.map((subs_) => 
                <TouchableOpacity
                  key={'subs' + subs_.id}
                  onPress={() => props.navigation.navigate("Plan Payment")}
                  >
                  <View style={styles.plans_div}>
                    <View style={styles.dot}></View>
                    <View>
                      <Text style={styles.plan_label}>{subs_.name}</Text>
                      <Text style={styles.plan_sub_label_paid}>{subs_.price} €</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  heading: {
    marginTop: "-11%",
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    marginLeft: 80,
    marginBottom: 1
  },
  input: {
    width: "100%",
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: "#82A4B7",
    color: "#82A4B7",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    backgroundColor: "#82A4B7",
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
    height: "20%",
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
    marginTop: 5,
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
    padding: 10,
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
    marginTop: 13,
  },
  plan_label: {
    fontSize: 17,
    color: "#82A4B7",
    fontWeight: "bold",
    marginLeft: 10,
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
});

export default PlansScreen;
