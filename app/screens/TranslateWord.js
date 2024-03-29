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
import {listData, translateWordApi} from "../api";
import Ionicons from "@expo/vector-icons/Ionicons";
import { consoleErrors } from "../helper";
import {Picker} from '@react-native-picker/picker';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { Audio } from 'expo-av';
import Feather from 'react-native-vector-icons/Feather';
import { BASE_URI } from "../api/api";

Feather.loadFont()

const TranslateWord = (props) => {
  const [sound, setSound] = React.useState();
  const [selectedWord, setSelectedWord] = React.useState(null);
  const [arabicLangId, setArabicLangId] = React.useState(null);
  const [wordNotFound, setWordNotFound] = React.useState(null);
  const [languages, setLanguages] = React.useState([]);
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
  });

  const [playing, setPlaying] = React.useState("false");
  async function playSound() {
    const AUDIO_URL = BASE_URI + '/word-audios/' + selectedWord.audio;
    const { sound } = await Audio.Sound.createAsync({uri: AUDIO_URL});
    setSound(sound);
    await sound.playAsync(); 
    setPlaying("true");
  }

  async function stopSound() {
    await sound.stopAsync();
    setPlaying("false");
  }

  const onTranslateClickHandler = () => {
    console.log("MyDataaa", data);
    translateWordApi(data).then(res => {
      console.log(res.data);
      if(res.data.data) {
        setSelectedWord(res.data.data);
        setWordNotFound(null);
      } else {
        setSelectedWord(null);
        setWordNotFound("true");
      }
    }).catch(err => consoleErrors(err, props)); 
  }


  React.useEffect(() => {
    listData({param: 'l'}).then((response) => {
      setLanguages(response.data.data);
      if(response.data.arabic && response.data.arabic.id) {
        setArabicLangId(response.data.arabic.id);
      }
      setData({...data, from: response.data.data[0].id, to: response.data.data[1].id})
    }).catch((err) => consoleErrors(err,  props));
  }, []);
 
  const onFromChangeHandler = (itemValue) => {
    const {to} = data;
    if(itemValue != arabicLangId && (to != arabicLangId || to == arabicLangId)) {
      setData({...data, to: arabicLangId, from: itemValue  });
    } else if(itemValue == arabicLangId && to == arabicLangId) {
      const data = languages.filter((lang) => lang.id != arabicLangId);
      setData({...data, from: arabicLangId, to: data[0].id  });
    } 
  }

  const onToChangeHandler = (itemValue) => {
    const {from} = data;
    if(itemValue != arabicLangId && (from != arabicLangId || from == arabicLangId)) {
      setData({...data, from: arabicLangId, to: itemValue  });
    } else if(itemValue == arabicLangId && from == arabicLangId) {
      const data = languages.filter((lang) => lang.id != arabicLangId);
      setData({...data, to: arabicLangId, from: data[0].id  });
    }
  }

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
          <Text style={styles.heading}>Translate Word</Text>
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
            <View style={{flex: 0.2}}>
                    <Text style={styles.label}>From</Text>
                    <Picker
                      style={styles.input}
                      selectedValue={data.from}
                      onValueChange={(itemValue, itemIndex) =>{
                        onFromChangeHandler(itemValue);
                      }}>
                      {languages && languages.map((lang) => <Picker.Item key={"lang" + lang.id} label={lang.language} value={lang.id} />)}
                    </Picker>
                    {errors.from ? <Text style={{color: 'red'}}>{errors.from}</Text> : null}
                </View>
                <View View style={{flex: 0.2}}>
                    {errors.status != undefined ? <Text style={{color: errors.status ? 'green' : 'red' }}>{errors.message}</Text> : null}
                    <Text style={styles.label}>To</Text>
                    <Picker
                      style={styles.input}
                      selectedValue={data.to}
                      onValueChange={(itemValue, itemIndex) => {
                        onToChangeHandler(itemValue);
                      }}>
                        {languages && languages.map((lang) => <Picker.Item key={"lang" + lang.id} label={lang.language} value={lang.id} />)}
                    </Picker>
                    {errors.to ? <Text style={{color: 'red'}}>{errors.to}</Text> : null}
                </View>
                <View View style={{flex: 0.2}}>
                    <Text style={styles.label}>Word</Text>
                    <TextInput 
                      placeholder="Enter Word"
                      style={styles.input} 
                      onChangeText={(text) => {setData({...data, word: text})}}
                      value={data.word}/>
                    {errors.word ? <Text style={{color: 'red'}}>{errors.word}</Text> : null}
                </View>
                <View style={{flex: 0.1}}> 
                      <TouchableOpacity onPress={() => onTranslateClickHandler()} style={styles.button}><Text style={{color: '#fff'}}>Translate</Text></TouchableOpacity>
                </View>
                {wordNotFound && <View style={styles.innerContainer}> 
                  <Text style={styles.bottom_heading}> Word Not Found </Text>  
                </View>}
                {selectedWord ? 
                  <View style={styles.innerContainer}> 
                        <Text style={data.from == arabicLangId ? styles.bottom_heading : [styles.bottom_heading, styles.font_22]}>{data.from == arabicLangId ? selectedWord.word : selectedWord.arabic_word}</Text>  
                    {data.from != arabicLangId ?
                    <>
                        <Text style={[styles.bottom_heading]}>{selectedWord.latin_formal}</Text>
                        <Text style={[styles.bottom_heading, styles.font_22]}>Slang: {selectedWord.slanged_arabic}</Text>     
                        <Text style={[styles.bottom_heading]}>{selectedWord.latin_slanged}</Text>
                    </> : null}
                  </View>: null}
                {selectedWord && (<View style={[styles.row, {backgroundColor: '#FFF'}]}>
                  <TouchableOpacity onPress={() => playSound()}>
                    <Text style={{fontSize : 20,  textAlign: 'center', paddingTop: 15}}>
                      {selectedWord?.audio ? <Feather style={{marginRight:'10', fontSize: 20}} name={"play"} size={20} color="#82A4B7" /> : null}{!selectedWord?.audio ? "Audio Not Available" : "Play" }
                    </Text>
                  </TouchableOpacity>
                </View>)}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
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
    marginTop: "-11%",
    marginLeft: 80,
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
    color: '#fff',
    padding: 10,
    borderRadius: 20,
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 5,
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
  font_22: {
    fontSize: 22,
  }
});
export default TranslateWord;
