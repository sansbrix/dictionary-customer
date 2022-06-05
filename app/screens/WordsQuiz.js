import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import { addWordsQuizResult, showMatchWordsPuzzle, wordsWithPictures } from '../api';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BASE_URI } from '../api/api';
import { Audio } from 'expo-av';
import Feather from 'react-native-vector-icons/Feather';
import { consoleErrors, showPopUp } from '../helper';
Feather.loadFont();

const {width: screenWidth} = Dimensions.get('window');
import { Root } from 'react-native-popup-confirm-toast';
import Spinner from 'react-native-loading-spinner-overlay';

var OUTPUT = [null, null, null, null];

const WordQuiz = (props) => {
  const [sound, setSound] = React.useState(null);
  const [loader, setLoader] = React.useState(false);
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [playing, setPlaying] = React.useState("false");
  const [timer, setTimer] = React.useState(null);
  const [results, setResults] =  React.useState([
    null, null, null, null
  ]);
  const [answers, setAnswers] = React.useState([]);
  const [isQuestion, setIsQuestion] = React.useState(false);

  var interval = null;

  const TIME_ELLAPSED = 10;

  const goForward = () => {
    carouselRef.current.snapToNext();
    setTimer(TIME_ELLAPSED);
  };

  useEffect(() => {
    setLoader(true);
    showMatchWordsPuzzle({
      category_id: 1,
    }).then((res) => {    
      if(res.data.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
        const ENTRIES = res.data.data.map((r) => {
        return {
          id: r.id,
          title: r.word,
          subtitle: r.arabic_word,
          options: r.options,
          illustration: BASE_URI + '/word-images/' + r.image,
          audio: r.audio ? BASE_URI + '/word-audios/' + r.audio : null,
          word_id: r.id,
          answer: r.answer
        }});
        setSelectedIndex(0);
        setEntries(ENTRIES);
        setSelectedItem(ENTRIES[0]);
        setTimer(TIME_ELLAPSED);
      }
    }).catch((err) => consoleErrors(err))
    .finally(() => setLoader(false));
  }, []);

  useEffect(() => {
    if(timer===0){
      if(isQuestion) {
        setIsQuestion(false);
        submitBlankAnswer(selectedIndex);
        if(selectedIndex == 3) {
          submitResult();
        } else {
          goForward();
        }
      } else {
        setIsQuestion(true);
        setTimer(TIME_ELLAPSED);
      }
      
    }

   // exit early when we reach 0
   if (!timer) return;

   // save intervalId to clear the interval when the
   // component re-renders
   const intervalId = setInterval(() => {
     setTimer(timer - 1);
   }, 1000);

   // clear interval on re-render to avoid memory leaks
    return () => {
     clearInterval(intervalId);
    }
   // add timeLeft as a dependency to re-rerun the effect
   // when we update it
  },[timer]);

  useEffect(() => {
    if(isQuestion) {
      setSelectedItem(entries[selectedIndex]);
    } else {
      // setIsQuestion(true);
      setSelectedItem(entries[selectedIndex-1]);
    }
    
    setTimer(TIME_ELLAPSED);
  }, [selectedIndex]);

  const submitAnswer = (data, index) => {
    setIsQuestion(false);
    OUTPUT[data] = index;
    if(selectedIndex  == 3) {
      submitResult();
    } else {
      goForward();
    }
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({uri: selectedItem.audio});
    setSound(sound);
    await sound.playAsync(); 
    setPlaying("true");
  }

  async function stopSound() {
    await sound.stopAsync();
    setPlaying("false");
  }

  const submitResult = () => {
    setTimer(null);
    const data = {
      category_id: 1,
      user_answers: OUTPUT,
      question_ids: entries.map((m) => m.id),
      question_options: entries.map((m) => m.options),
      correct_answers: entries.map((m) => m.answer),
    };

    const correct_answer = 0;
    answers.map((ans, ind) => {
      if(ans == data["question_options"][ind][OUTPUT[ind]]) {
        correct_answer += 1;
      }
    });

    setLoader(true);
    addWordsQuizResult(data).then((res) => {
      
      showPopUp(
        `You've scored ${correct_answer} from ${data["question_ids"].length}`, 
        false, 
        function () {
          props.navigation.replace("LearningMenu", {cat_id: 1})
        }
      );
    }).catch((err) => consoleErrors(err))
    .finally(() => setLoader(false));
        
  }

  const submitBlankAnswer = (index) => {
    const data = entries[index];
    if( data ) {
      var temp = [
        ...results
      ];
      temp[data] = null;
      setResults(temp);
    }
  }

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <Text style={{fontSize: 15, marginLeft: -20, textAlign: 'center', position:'relative', top: -5, color: 'grey'}} numberOfLines={2}>
          [{item.title}]
        </Text>
        <Text style={{fontSize: 20, marginLeft: -20, textAlign: 'center', position:'relative', top: -5, color: '#82A4B7'}} numberOfLines={2}>
          {item.subtitle}
        </Text>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        {isQuestion ? 
        <>
            <View style={[styles.flex_container, {position: 'relative', top: 20}]}>
              <View style={styles.plans_div}>
                  <TouchableOpacity onPress={() => { submitAnswer(index, 0) }}>
                  <View>
                      <Text style={styles.plan_label}>{item?.options[0]}</Text>
                  </View>
                  </TouchableOpacity>
              </View>
              <View style={styles.plans_div}>
                  <TouchableOpacity onPress={() => { submitAnswer(index, 1) }}>
                  <View>
                      <Text style={styles.plan_label}>{item?.options[1]}</Text>
                  </View>
                  </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.flex_container, {position: 'relative', top: 20}]}>
              <View style={styles.plans_div}>
                  <TouchableOpacity onPress={() => { submitAnswer(index, 2) }}>
                  <View>
                      <Text style={styles.plan_label}>{item?.options[2]}</Text>
                  </View>
                  </TouchableOpacity>
              </View>
              <View style={styles.plans_div}>
                  <TouchableOpacity onPress={() => { submitAnswer(index, 3) }}>
                  <View>
                      <Text style={styles.plan_label}>{item?.options[3]}</Text>
                  </View>
                  </TouchableOpacity>
              </View>
            </View> 
        </> : <>
          <View style={[styles.row, {backgroundColor: '#FFF', position: 'relative', top: 20}]}>
            <TouchableOpacity onPress={() => selectedItem?.audio && playing == "false" ? playSound() : playing == "true" ? stopSound() : null}>
              <Text style={styles.plan_label}>
              {selectedItem?.audio ? <Feather style={{marginRight:'10'}} name={playing == "false" ? "play" : 'pause'} size={20} color="#82A4B7" /> : null}{!selectedItem?.audio? "Audio Not Available" : "Play" }
              </Text>
            </TouchableOpacity>
          </View>
        </>}
      </View>
    );
  };

  return (
    <View style={[styles.container, { flexDirection: "column",  backgroundColor: '#fff' }]}>
      <Root>
        {loader ? <Spinner
          visible={loader}
          textStyle={styles.spinnerTextStyle}
        /> : null}
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
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
              width: 25,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => props.navigation.replace("LearningMenu", {cat_id: 1})}
          >
            <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
              <Text style={styles.back}>
                <Ionicons name="md-arrow-back" size={24} color="#756765" />
              </Text>
            </Text>
          </TouchableOpacity>
          <Text style={styles.heading}>Words Puzzle</Text>
        </View>
        <View style={{ flex: 0.8, backgroundColor: "#82A4B7" }}>
          <View
            style={{
              backgroundColor: "#fff",
              height: "100%",
              borderTopLeftRadius: 50,
              paddingTop: 20,
              flex: 1,
            }}
          >
            <View style={{display: 'flex'}}>
              <Text style={styles.timerStyle}>{timer}</Text>
            </View>
            
            <Carousel
              sliderHeight={Dimensions.get('screen').height}
              ref={carouselRef}
              sliderWidth={screenWidth}
              itemWidth={screenWidth - 60}
              data={entries}
              renderItem={renderItem}
              hasParallaxImages={true}
              onSnapToItem={(info) => {
                setSelectedIndex(info);
              }}
              scrollEnabled={false}
            />
          </View>
        </View>
      </Root>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  plan_label: {
    fontSize: 12,
    color: "grey",
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 6,
    marginBottom: 6,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    marginTop: "12%",
    fontSize: 30,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 15
  },
  input: {
    width: "100%",
    margin: 5,
    padding: 10,
    color: "#82A4B7",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    backgroundColor: "#fff",
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
    backgroundColor: "#fff",
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
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: Dimensions.get('screen').height - (Dimensions.get('screen').height * 40) / 100,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    top: 0,
  },
  flex_container: {
    display: "flex",
    flexDirection: "row",
  },
  plans_div: {
    width: "49%",
    padding: 5,
    backgroundColor: "#F4F9EB",
    marginTop: "auto",
    marginBottom: 5,
    marginRight: 4,
    borderRadius: 10,
  },
  timerStyle: {
    marginBottom: 10,
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20,
    color: 'grey'
  }
});
export default WordQuiz;