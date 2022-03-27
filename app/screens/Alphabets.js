import React from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Image,
    ScrollView,
    TextInput
} from "react-native";

const cat_image = require("../../assets/images/cat.png");

function Alphabets(props) {
  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <ScrollView>
        <View styles={styles.container}>
          <View style={styles.bg_white}>
            <View style={styles.view}>
              <Text style={styles.back}>Back</Text>
              <Text style={styles.heading}>Alphabets</Text>
            </View>
          </View>
          <View style={styles.darkContainer}>
            <View style={styles.innerContainer}>
              <View style={[styles.p_20, styles.outer_container]}>
              <View>
                <Text style={styles.label}>Select Category</Text>
                <TextInput
                style={[styles.input, styles.color_white]}
                placeholder="Select Category"
                />
             </View>
             <View style={styles.row}>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
             </View>
             <View style={styles.row}>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
             </View>
             <View style={styles.row}>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
             </View>
             <View style={styles.row}>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
             </View>
             <View style={styles.row}>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
             </View>
             <View style={styles.row}>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
             </View>
             <View style={styles.row}>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
                <View style={styles.cat_image_container}>
                <Text style={styles.plan_label}>A</Text> 
                </View>
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
    backgroundColor: "#ccc",
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
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
    color: "#301934",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    backgroundColor: "#f6edfa",
  },
  view: {
    backgroundColor: "#301934",
    height: "100%",
    width: "100%",
    borderBottomEndRadius: 50,
    paddingLeft: 20,
  },
  darkContainer: {
    backgroundColor: "#301934",
    height: "100%",
    width: "100%",
  },
  bg_white: {
    backgroundColor: "#ffffff",
    height: "15%",
    width: "100%",
  },
  innerContainer: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 50,
    height: "100%",
    width: "100%",
  },
  back: {
    marginTop: "2%",
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
    backgroundColor: "#ffc30f",
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
    color: "#301934",
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
    color: "#301934",
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
    backgroundColor: "#f6edfa",
    display: "flex",
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 4,
    borderRadius: 10,
  },
  dot: {
    height: 20,
    width: 20,
    backgroundColor: "#ff5733",
    borderRadius: 50,
    marginTop: 11,
  },
  plan_label: {
    fontSize: 20,
    color: "#301934",
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
    color: "#ffc30f",
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
    borderColor: "#900C3F",
    borderRightWidth: 4,
    borderLeftWidth: 4,
    borderRadius: 10,
  },
});

export default Alphabets;
