import React, {useState, useRef, useCallback} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions 
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {translateWordApi, listData} from "../api";
import {consoleErrors} from "../helper";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import {Picker} from '@react-native-picker/picker';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont()

const TranslateWord=(props)=> {

  const [allWords, setAllWords] = React.useState([]);

  const [data, setData] = React.useState({
    from : "arabic",
    to : "other",
    word : ""
  });

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

  const selectedWord = () => Array.isArray(allWords) ? allWords.find((val) => val.id == selectedItem) : null;

  const onTranslateWordClickHandler = () => {
    // Change the state
    setErrors({ ...defaultErrors });
    translateWordApi({
      ...data,
      word: selectedItem
    }).then((response_) => {
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

  // Dropdown search
  const [loading, setLoading] = useState(false)
  const [suggestionsList, setSuggestionsList] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const dropdownController = useRef(null)

  const searchRef = useRef(null)

  const getSuggestions = useCallback(async q => {
    if (typeof q !== 'string' || q.length < 2) {
      setSuggestionsList(null)
      return
    }
    setLoading(true)
    const response = await listData({
      "param" : "w",
      "u_defined" : false,
      ...data,
      "word": q
    });
    const items = response.data?.data;
    const suggestions = items
      .map(item => ({
        id: item.id,
        title: data.from == "other" ? item.word: item.arabic_word,
      }))
    setSuggestionsList(suggestions);
    setAllWords(items);
    setLoading(false)
  }, [])

  const onClearPress = useCallback(() => {
    setSuggestionsList(null)
  }, [])

  const onOpenSuggestionsList = useCallback(isOpened => {}, [])
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
                          <Text style={styles.label}>From</Text>
                          <Picker
                            style={styles.input}
                            selectedValue={data.from}
                            onValueChange={(itemValue, itemIndex) =>
                              setData({...data, from: itemValue, to: itemValue == "other" ? "arabic": "other"})
                            }>
                            <Picker.Item label="Other" value="other" />
                            <Picker.Item label="Arabic" value="arabic" />
                          </Picker>
                          {errors.from ? <Text style={{color: 'red'}}>{errors.from}</Text> : null}
                      </View>
                      <View>
                          {errors.status != undefined ? <Text style={{color: errors.status ? 'green' : 'red' }}>{errors.message}</Text> : null}
                          <Text style={styles.label}>To</Text>
                          <Picker
                            style={styles.input}
                            selectedValue={data.to}
                            onValueChange={(itemValue, itemIndex) =>
                              setData({...data, to: itemValue, from: itemValue == "other" ? "arabic": "other"})
                            }>
                            <Picker.Item label="Arabic" value="arabic" />
                            <Picker.Item label="Other" value="other" />
                          </Picker>
                          {errors.to ? <Text style={{color: 'red'}}>{errors.to}</Text> : null}
                      </View>
                      <View>
                          <AutocompleteDropdown
                            ref={searchRef}
                            controller={controller => {
                              dropdownController.current = controller
                            }}
                            direction={Platform.select({ ios: 'down', android: 'up', web: 'up' })}
                            dataSet={suggestionsList}
                            onChangeText={getSuggestions}
                            onSelectItem={item => {
                              item && setSelectedItem(item.id)
                            }}
                            debounce={600}
                            suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
                            onClear={onClearPress}
                            //  onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
                            onOpenSuggestionsList={onOpenSuggestionsList}
                            loading={loading}
                            useFilter={false} // set false to prevent rerender twice
                            textInputProps={{
                              placeholder: 'Type 3+ letters (dolo...)',
                              autoCorrect: false,
                              autoCapitalize: 'none',
                              style: {
                                borderRadius: 5,
                                backgroundColor: 'rgb(244, 249, 235)',
                                color: 'black',
                                paddingLeft: 18,
                                width: '100%',
                              },
                            }}
                            rightButtonsContainerStyle={{
                              top: 7,
                              right: 0,
                              height: 40,
                              alignSelf: 'center',
                            }}
                            inputContainerStyle={{
                              backgroundColor: '#fff',
                              width: '100%'
                            }}
                            suggestionsListContainerStyle={{
                              backgroundColor: '#F4F9EB',
                              width: '100%'
                            }}
                            containerStyle={{ flexGrow: 1, flexShrink: 1 }}
                            renderItem={(item, text) => <Text style={{ color: 'black', padding: 15 }}>{item.title}</Text>}
                            ChevronIconComponent={<Feather name="chevron-down" size={20} color="black" />}
                            ClearIconComponent={<Feather name="x-circle" size={18} color="black" />}
                            inputHeight={50}
                            showChevron={false}
                          />
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
              {selectedWord() ? 
              <View style={styles.darkContainer}>
                <View style={styles.innerContainer}> 
                  <Text style={styles.bottom_heading}>{data.from == "arabic" ? selectedWord().word : selectedWord.arabic_word} (Arabic)</Text>  
                  {data.from == "other" ?
                  <>
                      <Text style={styles.bottom_heading}>{selectedWord().slanged_arabic} (Slanged)</Text>  
                      <Text style={styles.bottom_heading}>{selectedWord().latin_slanged} (Latin)</Text>  
                      <Text style={styles.bottom_heading}>{selectedWord().latin_formal} (Formal latin)</Text>
                  </> : null}
                </View>
              </View> : null}
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
      borderRadius: 5,
      height: 40,
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