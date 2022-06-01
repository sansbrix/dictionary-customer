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
import {listData} from "../api";
import Ionicons from "@expo/vector-icons/Ionicons";
import { consoleErrors } from "../helper";
import {Picker} from '@react-native-picker/picker';

const Alphabets = (props) => {
  const [disable, disableButton] = React.useState(false);
  const [lang, setlang] = React.useState([]);
  const [selectedLang, setSelectedLang] = React.useState("");
  const [data, setData] = React.useState([]);

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
    setSelectedLang(lang_id);
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
          <Text style={styles.heading}>Alphabets</Text>
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
                <Picker
                  style={styles.input}
                  selectedValue={selectedLang}
                  onValueChange={(itemValue, itemIndex) =>
                    onChangeLanguageHandler(itemValue)
                  }>
                    <Picker.Item label="Please Select Language" value={""}/>
                    {lang.map((lan, index) => <Picker.Item key={`lan-${index}`} label={lan.label} value={lan.value} />)}
                </Picker>
              </View>
              <View>
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
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  row: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  plan_label: {
    fontSize: 20,
    color: "#82A4B7",
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 6,
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
export default Alphabets;
