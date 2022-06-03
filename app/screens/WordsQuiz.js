import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const cat_image = require("../../assets/images/cat.png");

const WordsQuiz = (props) => {
  // console.log(props.route.params.cat_id, "params")
  const cat_id = 1
  return (
    // <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
    //   <ScrollView>
    //     <View styles={styles.container}>
    //       <View style={styles.bg_white}>
    //         <View style={styles.view}>
    //           <TouchableOpacity
    //             style={{
    //               ...styles.back,
    //               borderRadius: 100,
    //               backgroundColor: "#9D908D",
    //               marginTop: 50,
    //               marginLeft: 1,
    //               width: 35,
    //               height: 35,
    //               justifyContent: "center",
    //               alignItems: "center",
    //             }}
    //             onPress={() => props.navigation.navigate("LearningMenu", {cat_id: cat_id})}
    //           >
    //             <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
    //               <Text style={styles.back}>
    //                 <Ionicons name="md-arrow-back" size={24} color="#756765" />
    //               </Text>
    //             </Text>
    //           </TouchableOpacity>
    //           <Text style={styles.heading}>Choose Correct Word</Text>
    //         </View>
    //       </View>
    //       <View style={styles.darkContainer}>
    //         <View style={styles.innerContainer}>
    //           <View style={[styles.p_20, styles.pb_5, styles.outer_container]}>
    //             <View stye={styles.image_container}>
    //               <Image
    //                 source={cat_image}
    //                 resizeMode="cover"
    //                 style={styles.image}
    //               ></Image>
    //             </View>
    //             <View style={styles.plans_div}>
    //               <View style={styles.cat_image_container}>
    //               </View>
    //               <View>
    //                 <Text style={styles.plan_label}>#place word</Text>
    //               </View>
    //             </View>
    //             <View style={styles.plans_div}>
    //               <View style={styles.cat_image_container}>
    //               </View>
    //               <View>
    //                 <Text style={styles.plan_label}>#place word</Text>
    //               </View>
    //             </View>
    //             <View style={styles.plans_div}>
    //               <View style={styles.cat_image_container}>
    //               </View>
    //               <View>
    //                 <Text style={styles.plan_label}>#place word</Text>
    //               </View>
    //             </View>
    //             <View style={styles.plans_div}>
    //               <View style={styles.cat_image_container}>
    //               </View>
    //               <View>
    //                 <Text style={styles.plan_label}>#place word</Text>
    //               </View>
    //             </View>
    //             <View>
    //               <TouchableOpacity style={styles.mt_25} onPress={() => props.navigation.navigate('LearningMenu')}>
    //                 <View style={styles.button}>
    //                   <Text style={[styles.color_white, styles.font_16]}>
    //                     Submit
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             </View>
    //           </View>
    //         </View>
    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>


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
          <Text style={styles.heading}>Choose Correct Word</Text>
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
            <View style={styles.image_container}>
                  <Image
                    source={cat_image}
                    resizeMode="cover"
                    style={styles.image}
                  ></Image>
                </View>
                <View style={styles.plans_div}>
                  <View>
                    <Text style={styles.plan_label}>#place word</Text>
                  </View>
                </View>
                <View style={styles.plans_div}>
                  <View>
                    <Text style={styles.plan_label}>#place word</Text>
                  </View>
                </View>
                <View style={styles.plans_div}>
                  <View>
                    <Text style={styles.plan_label}>#place word</Text>
                  </View>
                </View>
                <View style={styles.plans_div}>
                  <View>
                    <Text style={styles.plan_label}>#place word</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity style={styles.mt_25} onPress={() => props.navigation.navigate('LearningMenu')}>
                    <View style={styles.button}>
                      <Text style={[styles.color_white, styles.font_16]}>
                        Submit
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
            </ScrollView>
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
    marginTop: "-11%",
    marginLeft: 80,
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
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
    height: "23%",
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
    marginTop: "9%",
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
  pb_5: {
    paddingBottom: 5,
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
    width: "50%",
    padding: 7,
    backgroundColor: "#F4F9EB",
    // display: "flex",
    // flexDirection: "row",
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
  image: {
    width: 200,
    height:200,
    display:'flex',
    margin: 'auto'
  },
  cat_image_container: {
    marginLeft: 0,
    marginRight: 2,
    padding: 0,
    height: 25,
    width: 40,
  },
  bottom_div: {
    height: 100,
    width: "100%",
    backgroundColor: "#9D908D",
    position: "relative",
    bottom: -10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
  },
  bot_leraning: {
    backgroundColor: "#a2476a",
  },
  bottom_heading: {
    fontSize: 17,
    color: "#756765",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 12,
  },
  image_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
});

export default WordsQuiz;
