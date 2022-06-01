import React, {useState, useRef, useCallback} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  FlatList
} from "react-native";
import {listData} from "../api";
import Ionicons from "@expo/vector-icons/Ionicons";
import { consoleErrors } from "../helper";
import {Picker} from '@react-native-picker/picker';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont()

const TranslateWord = (props) => {
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
    console.log("from", data.from);
    const suggestions = items
      .map(item => ({
        id: item.id,
        title: data.from == "other" ? item.word: item.arabic_word,
    }));
    setSuggestionsList(suggestions);
    setAllWords(items);
    setLoading(false)
  }, [])

  const onClearPress = useCallback(() => {
    setSuggestionsList(null)
  }, [])

  const onOpenSuggestionsList = useCallback(isOpened => {}, [])
  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <>
        <ScrollView style={{height: '100%', flex: 1, flexDirection: 'column'}}>
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
              onPress={() => props.navigation.navigate("MainMenu")}
            >
              <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
                <Text style={styles.back}>
                  <Ionicons name="md-arrow-back" size={24} color="#756765" />
                </Text>
              </Text>
            </TouchableOpacity>
            <Text style={styles.heading}>Translate</Text>
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
                flex: 1,
                flexDirection: 'column'
              }}
            >
                <View style={{flex: 0.2}}>
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
                <View View style={{flex: 0.2}}>
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
                <View View style={{flex: 0.2}}>
                    <Text style={styles.label}>Word</Text>
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
                        width: '100%',
                        zIndex: 1000000
                      }}
                      suggestionsListContainerStyle={{
                        backgroundColor: '#F4F9EB',
                        width: '100%',
                        zIndex: 100000
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
                {selectedWord() ? 
                  <View style={styles.innerContainer}> 
                  {console.log("SelectWord()", selectedWord())}
                    <Text style={styles.bottom_heading}>{data.from == "arabic" ? selectedWord().word : selectedWord().arabic_word} (Arabic)</Text>  
                    {data.from == "other" ?
                    <>
                        <Text style={styles.bottom_heading}>{selectedWord().slanged_arabic} (Slanged)</Text>  
                        <Text style={styles.bottom_heading}>{selectedWord().latin_slanged} (Latin)</Text>  
                        <Text style={styles.bottom_heading}>{selectedWord().latin_formal} (Formal latin)</Text>
                    </> : null}
                  </View>: null}
            </View>
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  h_100: {

  },
  container: {
    height: '100%',
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
    height: 40,
    width: "100%",
    flex: 1,
    flexDirection:'row',
    marginTop: 7,
    
  },
  bg_white: {
    backgroundColor: "#FFFFFF",
    height: "22%",
    width: "100%",
    // flex: 0.4,
  },
  innerContainer: {
    backgroundColor: '#9D908D',
    height: '100%',
    width: '100%',
    borderRadius: 20,
    flex: 0.4,
    marginTop: 10,
    paddingBottom: 20,
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
  bottom_heading: {
    fontSize: 17,
    color: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 12
},
});
export default TranslateWord;
