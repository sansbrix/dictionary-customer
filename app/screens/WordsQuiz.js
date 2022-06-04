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
import { showMatchWordsPuzzle, wordsWithPictures } from '../api';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BASE_URI } from '../api/api';
import { Audio } from 'expo-av';
import Feather from 'react-native-vector-icons/Feather';
import { consoleErrors } from '../helper';
Feather.loadFont();

const {width: screenWidth} = Dimensions.get('window');

const WordQuiz = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [playing, setPlaying] = React.useState("false");
  const [timer, setTimer] = React.useState(null);
  const [results, setResults] =  React.useState([]);
  const [answers, setAnswers] = React.useState([]);
  const [isQuestion, setIsQuestion] = React.useState(false);

  var interval = null;

  const TIME_ELLAPSED = 3;

  const goForward = () => {
    carouselRef.current.snapToNext();
    setTimer(TIME_ELLAPSED);
  };

  useEffect(() => {
    showMatchWordsPuzzle({
      category_id: 1,
    }).then((res) => {    
      if(res.data.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
        const ENTRIES = res.data.data.map((r) => {
        return {
          id: r.id,
          title: r.word,
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
    }).catch((err) => consoleErrors(err));
  }, []);

  useEffect(() => {
    if(timer===0){
      console.log("Tiner",timer);
      if(isQuestion) {
        setIsQuestion(false);
        if(selectedIndex == 3) {
          console.log(results, "results");
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
     if(isQuestion) {
        submitBlankAnswer(selectedIndex);
     }
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
    const temp = {
      word_id: data.id, 
      options: data.options,
      user_answer: data.options[index],
      correct_answer: data.answer
    };
    setAnswers([...answers, data.options[index]]);
    setResults([
      ...results, temp,
    ]);
    if(selectedIndex  == 3) {
      
    } else {
      goForward();
    }
  }

  const submitResult = () => {
    const data = {
      category_id: 1,
      user_answers: answers,
      question_ids: entries.map((m) => m.id),
      question_options: entries.map((m) => m.options),
      correct_answers:  entries.map((m) => m.answer),
    };
  }

  const submitBlankAnswer = (index) => {
    const data = entries[index];
    if( data ) {
      const temp = {
        word_id: data.id, 
        options: data.options,
        user_answer: null,
        correct_answer: data.answer
      };
      setResults([
        ...results, temp,
      ]);
      setAnswers([...answers, null]);
    }
  }

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <Text>{index}</Text>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        {isQuestion ? 
        <>
            <View style={styles.flex_container}>
            <View style={styles.plans_div}>
                <TouchableOpacity onPress={() => { submitAnswer(item, 0) }}>
                <View>
                    <Text style={styles.plan_label}>{item?.options[0]}</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.plans_div}>
                <TouchableOpacity onPress={() => { submitAnswer(item, 1) }}>
                <View>
                    <Text style={styles.plan_label}>{item?.options[1]}</Text>
                </View>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.flex_container}>
            <View style={styles.plans_div}>
                <TouchableOpacity onPress={() => { submitAnswer(item, 2) }}>
                <View>
                    <Text style={styles.plan_label}>{item?.options[2]}</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.plans_div}>
                <TouchableOpacity onPress={() => { submitAnswer(item, 3) }}>
                <View>
                    <Text style={styles.plan_label}>{item?.options[3]}</Text>
                </View>
                </TouchableOpacity>
            </View>
            </View> 
        </> : <Text>Audio</Text>}
      </View>
    );
  };

  return (
    <View style={[styles.container, { flexDirection: "column",  backgroundColor: '#fff' }]}>
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
              width: 35,
              height: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => props.navigation.navigate("LearningMenu", {cat_id: props.route.params.cat_id})}
          >
            <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
              <Text style={styles.back}>
                <Ionicons name="md-arrow-back" size={24} color="#756765" />
              </Text>
            </Text>
          </TouchableOpacity>
          <Text style={styles.heading}>Words Puzzle</Text>
        </View>
        <View style={{ flex: 0.7, backgroundColor: "#82A4B7" }}>
          <View
            style={{
              backgroundColor: "#fff",
              height: "100%",
              borderTopLeftRadius: 50,
              paddingTop: 40,
              flex: 1,
            }}
          >
            <Text>{`00:${timer}`}</Text>
            <Carousel
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
    fontSize: 20,
    color: "#82A4B7",
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 6,
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
    height: screenWidth - 60,
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
});
export default WordQuiz;