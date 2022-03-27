import React from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Image,
    ScrollView,
    TouchableHighlight
} from "react-native";

const cat_image = require("../../assets/images/cat.png");

function WordsQuiz(props) {
  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <ScrollView>
        <View styles={styles.container}>
          <View style={styles.bg_white}>
            <View style={styles.view}>
              <Text style={styles.back}>Back</Text>
              <Text style={styles.register}>#lesson name</Text>
              <Text style={styles.heading}>Choose Correct Word</Text>
            </View>
          </View>
          <View style={styles.darkContainer}>
            <View style={styles.innerContainer}>
              <View style={[styles.p_20, styles.pb_5, styles.outer_container]}>
                <View style={styles.plans_div}>
                  <View style={styles.cat_image_container}>
                    <Image
                      source={cat_image}
                      resizeMode="cover"
                      style={styles.image}
                    ></Image>
                  </View>
                  <View>
                    <Text style={styles.plan_label}>#place word</Text>
                  </View>
                </View>
                <View style={styles.plans_div}>
                  <View style={styles.cat_image_container}>
                  <Image
                      source={cat_image}
                      resizeMode="cover"
                      style={styles.image}
                    ></Image>
                  </View>
                  <View>
                    <Text style={styles.plan_label}>#place word</Text>
                  </View>
                </View>
                <View style={styles.plans_div}>
                  <View style={styles.cat_image_container}>
                  <Image
                      source={cat_image}
                      resizeMode="cover"
                      style={styles.image}
                    ></Image>
                  </View>
                  <View>
                    <Text style={styles.plan_label}>#place word</Text>
                  </View>
                </View>
                <View style={styles.plans_div}>
                  <View style={styles.cat_image_container}>
                  <Image
                      source={cat_image}
                      resizeMode="cover"
                      style={styles.image}
                    ></Image>
                  </View>
                  <View>
                    <Text style={styles.plan_label}>#place word</Text>
                  </View>
                </View>
                <View>
                  <TouchableHighlight style={styles.mt_25}>
                    <View style={styles.button}>
                      <Text style={[styles.color_white, styles.font_16]}>
                        Submit
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
              <View style={styles.bottom_div}>
                  <Text style={styles.bottom_heading}>#random word</Text>  
                  <Text style={styles.bottom_heading}>#random word</Text>  
                  <Text style={styles.bottom_heading}>#random word</Text>  
                  <Text style={styles.bottom_heading}>#random word</Text>  
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

  heading: {
    marginTop: "1%",
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: "#301934",
    color: "#301934",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    backgroundColor: "#301934",
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
  pb_5: {
    paddingBottom: 5
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
    backgroundColor: "#ffc30f",
    borderRadius: 50,
    marginTop: 11,
  },
  plan_label: {
    fontSize: 17,
    color: "#301934",
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
    color: "#ffc30f",
    marginLeft: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  cat_image_container: {
    marginLeft: 0,
    marginRight: 2,
    padding: 0,
    height: 40,
    width: 40,
  },
  bottom_div: {
      height: 100,
      width: '100%',
      backgroundColor: '#900C3F',
      position: 'relative',
      bottom: -10,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 10
  },
  bot_leraning: {
    backgroundColor: '#a2476a'
  },
  bottom_heading: {
    fontSize: 17,
    color: '#ffc30f',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 12
},
});

export default WordsQuiz;
