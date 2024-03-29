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
import {addUserDefinedWords, listData} from "../api";
import { consoleErrors, showPopUp } from "../helper";
import DropDownPicker from "react-native-dropdown-picker";
import { Root } from 'react-native-popup-confirm-toast';
import Spinner from 'react-native-loading-spinner-overlay';

function UserDefinedWord(props) {
  const [loader, setLoader] = React.useState(false);
  const [cat, setCat] = React.useState([]);
  const [cntry, setCntry] = React.useState([]);
  const [lng, setLngs] = React.useState([]);
  const [data, setData] = React.useState({
    language_id: "",
    category_id: "",
    country_id: "",
    arabic_word: "",
    slanged_arabic: "",
    status: 'pending'
  });

  const defaultErrors = {
    language_id: "",
    category_id: "",
    country_id: "",
    arabic_word: "",
    slanged_arabic: "",
    message: "",
  }

  const [errors, setErrors] = React.useState({
    ...defaultErrors
  })

  React.useEffect(() => {
    setLoader(true);
    listData({param: 'cat'})
      .then((response) => {
        const categories = response.data.data.map((cat) => {
          return {
            label: cat["category"],
            value: cat["id"]
          };
        });
        setCat(categories)

        listData({param: 'l'})
        .then((response) => {
          const languages = response.data.data.map((lng) => {
            return {
              label: lng["language"],
              value: lng["id"]
            };
          });
          setLngs(languages)
          listData({param: 'c'})
          .then((response) => {
            const countries = response.data.data.map((cntry) => {
              return {
                label: cntry["country"],
                value: cntry["id"]
              };
            });
            setCntry(countries)
          })
          .catch((error) => {consoleErrors(error, props)})
          .finally(() => setLoader(false));

        }).catch((error) => {consoleErrors(error, props); setLoader(false)})
      })
      .catch((error) => {consoleErrors(error, props); setLoader(false)})
  }, []);

  const onAddUserDefinedClickHandler = () => {
    setLoader(true);
    // Change the state
    setErrors({ ...defaultErrors });
    addUserDefinedWords(data).then((response_) => {
      try {
        const response = response_.data;
        if(response.status) {
          showPopUp("Word added!");
          setErrors({ ...defaultErrors, status: response.status });
          setTimeout(() => {
            props.navigation.navigate('MainMenu')
          }, 3000);
        }
      } catch(e) {
        consoleErrors(e);
      }
      
    }).catch((error) => {
      consoleErrors(error);
      if(error.response.status == 422) {
        console.log(error.response.data);
        if(error.response.data && error.response.data.errors) {
          const errors_ = error.response.data.errors;
          let errorsResponse = {};
          Object.keys(errors_).forEach((er) => {
            if(Array.isArray(errors_[er])) {
              errorsResponse[er] = errors_[er][0];
            }
          });
          // Set the state
          setErrors({...defaultErrors, ...errorsResponse, message: "Enter Valid Data", status: false});
        } else {
          setErrors({...defaultErrors, message: "Enter Valid Data", status: false});
        }
      }
    }).finally(() => setLoader(false))
    
  }
  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
    <Root>
         {loader ? <Spinner
           visible={loader}
           textStyle={styles.spinnerTextStyle}
         /> : null}
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
                onPress={() => props.navigation.navigate("MainMenu")}
              >
                <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
                  <Text style={styles.back}>
                    <Ionicons name="md-arrow-back" size={24} color="#756765" />
                  </Text>
                </Text>
              </TouchableOpacity>
          <Text style={styles.heading}>Add Arabic Word</Text>
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
            {errors.status != undefined ? <Text style={{color: errors.status ? 'green' : 'red' }}>{errors.message}</Text> : null}
                <View>
                  <Text style={styles.label}>Select Country</Text>
                  <DropDownPicker
                    items={cntry}
                    defaultIndex={0}
                    containerStyle={{height: 40}}
                    onChangeItem={(item) => setData({...data, country_id: item.value})}
                />
                  {errors.country_id ? <Text style={{color: 'red'}}>{errors.country_id}</Text> : null}
                </View>
                <View>
                  <Text style={styles.label}>Select Category</Text>
                  <DropDownPicker
                    items={cat}
                    defaultIndex={0}
                    containerStyle={{height: 40}}
                    onChangeItem={(item) => setData({...data, category_id: item.value})}
                />
                  {errors.category_id ? <Text style={{color: 'red'}}>{errors.category_id}</Text> : null}
                </View>
                <View>
                  <Text style={styles.label}>Arabic Word</Text>
                  <TextInput
                    onChangeText={(value) => setData({...data, arabic_word: value})}
                    style={[styles.input]}
                    placeholder="Arabic Word"
                  />
                  {errors.arabic_word ? <Text style={{color: 'red'}}>{errors.arabic_word}</Text> : null}
                </View>
                <View>
                  <Text style={styles.label}>Slanged Arabic Word</Text>
                  <TextInput
                    onChangeText={(value) => setData({...data, slanged_arabic: value})}
                    style={[styles.input]}
                    placeholder="Slanged Arabic Word"
                  />
                  {errors.slanged_arabic ? <Text style={{color: 'red'}}>{errors.slanged_arabic}</Text> : null}
                </View>
                <View>
                  <TouchableOpacity style={styles.mt_25}
                  onPress={() => onAddUserDefinedClickHandler()}>
                    <View style={styles.button}>
                      <Text style={[styles.color_white, styles.font_16]}>
                        Add
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      </Root>
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
    marginLeft: 70,
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

export default UserDefinedWord;
