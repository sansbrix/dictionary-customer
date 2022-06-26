import React, {useRef, useState, useEffect, memo} from 'react';
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
import { wordsWithPictures } from '../api';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BASE_URI } from '../api/api';
import { Audio } from 'expo-av';
import Feather from 'react-native-vector-icons/Feather';
import SingleWordItem from './SingleWordItem';
import Spinner from 'react-native-loading-spinner-overlay';

Feather.loadFont();

const {width: screenWidth} = Dimensions.get('window');

const Words = (props) => {
  const [loader, setLoader] = React.useState(false);
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [sound, setSound] = React.useState();
  const [playing, setPlaying] = React.useState("false");

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({uri: selectedItem.audio});
    setSound(sound);
    await sound.playAsync(); 
    setPlaying("true");
  }

  async function stopSound() {
    if(sound) {
      await sound.stopAsync();
      setPlaying("false");
    }
  }

  const goForward = () => {
    carouselRef.current.snapToNext();
  };
  useEffect(() => {
    setLoader(true);
    wordsWithPictures({
      cat_id: props.route.params.cat_id,
    }).then((res) => {
      console.log(res.data.data);
      if(res.data.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
        const ENTRIES = res.data.data.map((r) => {
        return {
          title: r.word,
          subtitle: r.arabic_word,
          illustration: r.image ? BASE_URI + '/word-images/' + r.image : null,
          audio: r.audio ? BASE_URI + '/word-audios/' + r.audio : null,
        }});
        setSelectedIndex(0);
        setEntries(ENTRIES);
        setSelectedItem(ENTRIES[0]);
      }
    }).finally(() => setLoader(false));
  }, []);

  useEffect(() => {
    setSelectedItem(entries[selectedIndex]);
  }, [selectedIndex]);

 

  return (
    <View style={[styles.container, { flexDirection: "column",  backgroundColor: '#fff' }]}>
       {loader ? <Spinner
          visible={loader}
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
          <Text style={styles.heading}>Words with pictures</Text>
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
            <Carousel
              ref={carouselRef}
              sliderWidth={screenWidth}
              itemWidth={screenWidth - 60}
              data={entries}
              renderItem={({item, index}) => <SingleWordItem item={item} index={index}/>}
              hasParallaxImages={true}
              onSnapToItem={async (info) => {
                setSelectedIndex(info);
                if(playing) {
                  setPlaying("false");
                  if(playing && selectedItem?.audio) {
                    stopSound();
                  }
                }
              }}
            />
          </View>
          <View style={[styles.row, {backgroundColor: '#FFF'}]}>
            <TouchableOpacity onPress={() => selectedItem?.audio && playing == "false" ? playSound() : playing == "true" ? stopSound() : null}>
              <Text style={styles.plan_label}>
              {selectedItem?.audio ? <Feather style={{marginRight:'10'}} name={playing == "false" ? "play" : 'pause'} size={20} color="#82A4B7" /> : null}{!selectedItem?.audio ? "Audio Not Available" : "Play" }
              </Text>
            </TouchableOpacity>
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
  image_conatin: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
    
  },
});
export default Words;
