import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {translateWordApi, listData} from "../api";
import {consoleErrors} from "../helper";
import DropDownPicker from "react-native-dropdown-picker";
import Autocomplete from 'react-native-autocomplete-input';
const TranslateWord=(props)=> {

  const [words, setwords] = React.useState([]);
  const [from, setFrom] = React.useState([]);
  const [data, setData] = React.useState({
    from : "arabic",
    to : "other",
    word : ""
  });

  const [word, setWord] = React.useState("");

  const defaultErrors = {
    from : "",
    word : "",
    to : "",
    message: "",
    status: undefined,
  }

  const [errors, setErrors] = React.useState({
    ...defaultErrors
  })

  const onToHandler = (value) => {
    const to = value;
    if(to == 'arabic') {
      setData({...data, from: 'other', to: value})
    } else {
      setData({...data, from: 'arabic' ,to: value})
    }
  }

  

  const fetchWords = () => {
    listData({
      "param" : "w",
      "u_defined" : false,
      ...data,
      "word": word
    }).then((response) => {
      console.log("Respons---", response)
      setwords([
        ...response?.data?.data
      ])
      
    }).catch((error) => {
      console.log(error);consoleErrors(error)});
  }

  React.useState(() => {
    fetchWords();
  }, [word]);

  const onTranslateWordClickHandler = () => {
    // Change the state
    setErrors({ ...defaultErrors });
    console.log("Data", data);
    translateWordApi(data).then((response_) => {
      try {
        response = response_.data;
        console.log("response", response)
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
          // setTimeout(() => {
          //   props.navigation.navigate('ProfileMenu')
          // }, 3000);
        }
      } catch(e) {
        console.log("Error", e);
      }
      
    }).catch((err) => {
      console.log("err1", err.status)
      console.log("err", JSON.stringify(err));
    })
    
  }
    return (
        <SafeAreaView style={[styles.container,
            {flexDirection: "column"}
            ]}>
            <ScrollView>
            <View styles={styles.container1}>
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
                    <Text style={styles.heading}>Translate A Word</Text>
                    <View style={[styles.p_20, styles.outer_container]}>
                    <ScrollView>
                    <View style={styles.p_20}>
                        <View>
                        {errors.status != undefined ? <Text style={{color: errors.status ? 'green' : 'red' }}>{errors.message}</Text> : null}
                        <Text style={styles.label}>To</Text>
                        {/* <TextInput
                            onChangeText={(value) => setData({...data, to: value})}
                            style={[styles.input]}
                            placeholder="Other / Arabic"
                        /> */}
                        <DropDownPicker
                            items={[
                              {label: 'Arabic', value: 'arabic'},
                              {label: 'Other', value: 'other'}
                            ]}
                            // defaultIndex={0}
                            value={data.to}
                            containerStyle={{height: 40}}
                            placeholder="Other / Arabic"
                            onChangeItem={(item) => onToHandler(item.value)}
                        />
                        {errors.to ? <Text style={{color: 'red'}}>{errors.to}</Text> : null}
                        </View>
                        <View>
                        <Text style={styles.label}>From</Text>
                        {/* <TextInput
                            onChangeText={(value) => setData({...data, from: value})}
                            style={[styles.input]}
                            placeholder="Arabic / Other"
                        /> */}
                        <DropDownPicker
                            items={[
                              {label: 'Other', value: 'other'},
                              {label: 'Arabic', value: 'arabic'},
                            ]}
                            value={data.from}
                            // defaultIndex={0}
                            containerStyle={{height: 40}}
                            placeholder="Other / Arabic"
                        />
                        {errors.from ? <Text style={{color: 'red'}}>{errors.from}</Text> : null}
                        </View>
                        <View>
                        {/* <Text style={styles.label}>Word to translate</Text>
                        <TextInput
                            onChangeText={(value) => setData({...data, word: value})}
                            style={[styles.input]}
                            placeholder="Word"
                        /> */}
                        {/* render() { */}
                              <Autocomplete
                                data={words}
                                value={word}
                                onChangeText={(text) => setData({word: text})}
                                flatListProps={{
                                  keyExtractor: (_, idx) => idx,
                                  renderItem: ({item}) => {
                                  console.log(item.id); return(<Text>{item.id}</Text>)},
                                }}
                              />
                            {/* ); */}
                          {/* } */}
                        {errors.word ? <Text style={{color: 'red'}}>{errors.word}</Text> : null}
                        </View>
                        <View>
                        <TouchableOpacity style={styles.mt_25}
                        onPress={() =>  onTranslateWordClickHandler() }
                        >
                            <View style={styles.button}>
                            <Text style={[styles.color_white, styles.font_16]}>
                                Translate
                            </Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                    </ScrollView>
                  </View>
                  </View>
                </View>
                <View style={styles.darkContainer}>
                  <View style={styles.innerContainer}> 
                    <Text style={styles.bottom_heading}>Translated word (Arabic)</Text>  
                    <Text style={styles.bottom_heading}>Translated word (Slanged)</Text>  
                    <Text style={styles.bottom_heading}>Translated word (Latin)</Text>  
                    <Text style={styles.bottom_heading}>Translated word (Formal latin)</Text>  
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
      backgroundColor: '#9D908D',
    },
    container1: {
      flex: 1,
      backgroundColor: '#ffffff',
      height: 1700
    },
    heading: {
      marginTop: '2%',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#ffffff'
    },
    input: {
      width: '100%',
      margin: 5,
      padding: 10,
      color: '#82A4B7',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 10,
      backgroundColor: '#F4F9EB',
    },
    view: {
      backgroundColor: '#82A4B7',
      height: '100%',
      width: '100%',
      borderBottomEndRadius: 50,
      paddingLeft: 20,
    },
    darkContainer: {
      backgroundColor: '#82A4B7',
      height: '100%',
      width: '100%',
    },
    bg_white: {
      backgroundColor: '#9D908D',
      height: '51.5%',
      width: '100%',
    },
    innerContainer: {
      backgroundColor: '#9D908D',
      borderTopLeftRadius: 50,
      height: '100%',
      width: '100%',
    },
    back: {
      marginTop: '10%',
      fontSize: 15,
      color: '#ffffff',
    },
    register: {
      marginTop: '1%',
      fontSize: 15,
      color: '#ffffff'
    },
    button: {
      alignItems: "center",
      backgroundColor: "#756765",
      padding: 10,
      borderRadius: 20,
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    color_white: {
      color: '#ffffff'
    },
    font_16: {
      fontSize: 16,
    },
    label: {
      marginTop: 5,
      fontSize: 15,
      color: '#82A4B7'
    },
    mt_25: {
      marginTop: 18
    },
    p_20: {
      padding: 20
    },
    another_link: {
      marginTop: 5,
      fontSize: 15,
      color: '#82A4B7',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    outer_container: {
        width: '90%',
        height: 290,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginTop: 15
    },
    plans_div: {
        width: '100%',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 'auto',
        marginBottom: 4,
    },
    dot: {
        height: 20,
        width: 20,
        backgroundColor: '#756765',
        borderRadius: 50,
        marginTop: 5
    },
    plan_label: {
        fontSize: 17,
        color: '#82A4B7',
        fontWeight: 'bold',
        marginLeft: 10
    },
    plan_sub_label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'green',
        marginLeft: 10
    },
    plan_sub_label_paid: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#756765',
        marginLeft: 10
    },
    bottom_heading: {
        fontSize: 17,
        color: '#ffffff',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 12
    },
  });

export default TranslateWord;