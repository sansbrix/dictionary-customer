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
import { consoleErrors } from "../helper";
import DropDownPicker from "react-native-dropdown-picker";

function UserDefinedWord(props) {
  const [cat, setCat] = React.useState([]);
  const [cntry, setCntry] = React.useState([]);
  const [data, setData] = React.useState({
    category_id: "",
    country_id: "",
    arabic_word: "",
    slanged_arabic: "",
    status: 'pending'
  });

  const defaultErrors = {
    category_id: "",
    country_id: "",
    arabic_word: "",
    slanged_arabic: "",
    message: "",
    status: undefined,
  }

  const [errors, setErrors] = React.useState({
    ...defaultErrors
  })

  React.useEffect(() => {
    listData({param: 'cat'})
      .then((response) => {
        const categories = response.data.data.map((cat) => {
          return {
            label: cat["category"],
            value: cat["id"]
          };
        });
        setCat(categories)
        console.log(categories)
      })
      .catch((error) => consoleErrors(error));

      listData({param: 'c'})
      .then((response) => {
        const countries = response.data.data.map((cntry) => {
          return {
            label: cntry["country"],
            value: cntry["id"]
          };
        });
        setCntry(countries)
        console.log(countries)
      })
      .catch((error) => consoleErrors(error));
  }, []);

  const onAddUserDefinedClickHandler = () => {
    // Change the state
    setErrors({ ...defaultErrors });
    console.log('-------', data, '******')
    addUserDefinedWords(data).then((response_) => {
      return;
      try {
        response = response_.data;
        console.log("response", response_);
        if(!response.status) {
          if(response.error) {
            const errors_ = response.error;
            let errorsResponse = {};
            Object.keys(errors_).forEach((er) => {
              if(Array.isArray(errors_[er])) {
                errorsResponse[er] = errors_[er][0];
              }
            });
            // Set the state
            setErrors({...defaultErrors, ...errorsResponse, message: response.message, status: response.status});
          } else {
            setErrors({...defaultErrors, message: response.message, status: response.status});
          }
        } else {
          setErrors({ ...defaultErrors, message: response.message, status: response.status });
          setTimeout(() => {
            props.navigation.navigate('MainMenu')
          }, 3000);
        }
      } catch(e) {
        console.log(e.line);
        console.log("Error", e);
      }
      
    }).catch((error) => {
      console.log("Rspon", error)
      consoleErrors(error);
      // setErrors({ ...error.response.data.errors });
      // console.log("errors",errors)
    })
    
  }
  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <ScrollView>
        <View styles={styles.container}>
          <View style={styles.bg_white}>
            <View style={styles.view}>
            <TouchableOpacity style={{ ...styles.back,
                borderRadius: 100, 
                backgroundColor: "#9D908D", 
                marginTop: 50, 
                marginLeft: 1, 
                width: 35,height: 35, 
                justifyContent: "center", 
                alignItems: "center" 
                }}
                onPress={() => props.navigation.navigate('MainMenu')}>
                <Text style={{color: "#D3CFD6", fontWeight:"700"}}>
                  <Text style={styles.back}>
                      <Ionicons name="md-arrow-back" size={24} color="#756765" />
                  </Text>
                </Text>
              </TouchableOpacity>
              <Text style={styles.heading}>User Defined Word</Text>
            </View>
          </View>
          <View style={styles.darkContainer}>
            <View style={styles.innerContainer}>
              <View style={styles.p_20}>
                <View>
                {errors.status != undefined ? <Text style={{color: errors.status ? 'green' : 'red' }}>{errors.message}</Text> : null}
                  <Text style={styles.label}>Select Category</Text>
                  {/* <TextInput
                    onChangeText={(value) => setData({...data, category_id: value})}
                    style={[styles.input]}
                    placeholder="Select Category"
                  /> */}
                  <DropDownPicker
                    items={cat}
                    defaultIndex={0}
                    containerStyle={{height: 40}}
                    onChangeItem={(item) => setData({...data, category_id: item.value})}
                />
                  {errors.category_id ? <Text style={{color: 'red'}}>{errors.category_id}</Text> : null}
                </View>
                <View>
                  <Text style={styles.label}>Select Country</Text>
                  {/* <TextInput
                    onChangeText={(value) => setData({...data, country_id: value})}
                    style={[styles.input]}
                    placeholder="Select Country"
                  /> */}
                  <DropDownPicker
                    items={cntry}
                    defaultIndex={0}
                    containerStyle={{height: 40}}
                    onChangeItem={(item) => setData({...data, country_id: item.value})}
                />
                  {errors.country_id ? <Text style={{color: 'red'}}>{errors.country_id}</Text> : null}
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
    marginTop: "5%",
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 60,
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
