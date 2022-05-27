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
import { listData } from "../api";
import { consoleErrors } from "../helper";
import DropDownPicker from "react-native-dropdown-picker";

const Alphabets = (props) => {
  const [data, setData] = React.useState([]);
  const [lang, setlang] = React.useState([]);

  React.useEffect(() => {
    listData({param: 'l'})
      .then((response) => {
        const languages = response.data.data.map((lan) => {
          return {
            label: lan["country"]["country"]+"-"+lan["language"],
            value: lan["id"]
          };
        });
        setlang(languages)
        console.log(languages)
      })
      .catch((error) => consoleErrors(error));
  }, []);

  const onChangeLanguageHandler = (lang_id) => {
    listData({lang_id: lang_id})
      .then((response) => {
        var output = [];
        for (let i = 0; i < response.data.data.length; i += 4) {
          output.push([...response.data.data.slice(i, i + 4)]);
        }
        console.log(output);
        setData(output);
      })
      .catch((error) => consoleErrors(error));
    };

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
                  <DropDownPicker
                    items={lang}
                    defaultIndex={0}
                    containerStyle={{height: 40}}
                    onChangeItem={(item) => onChangeLanguageHandler(item.value)}
                />
                </View>

                {data.slice(0,4).map((arr, index) => {
                  return (
                    <View style={styles.row} key={`alph_row${index}`}>
                      {(() => {
                        if (Array.isArray(arr)) {
                          return arr.map((item, ind) => {
                            return (
                              <TouchableOpacity
                                key={`alpha_col-${ind}`}
                                onPress={() =>
                                  props.navigation.navigate("Signle Alphabet",{alpha_id: item.id})
                                }
                              >
                                <View style={styles.cat_image_container}>
                                  <Text style={styles.plan_label}>
                                    {item.alphabet}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            );
                          });
                        } else {
                          return null;
                        }
                        
                      })()}
                    </View>
                  );
                })}
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
