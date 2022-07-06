import React from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { listData } from "../api";
import { consoleErrors } from "../helper";
import { Audio } from 'expo-av';
import Spinner from 'react-native-loading-spinner-overlay';

const image = require("../../assets/image_not_available.png");

import Feather from 'react-native-vector-icons/Feather';
import api, { BASE_URI } from "../api/api";
Feather.loadFont()

const SingleAlphabet = (props) => {
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = React.useState({});
  const [sound, setSound] = React.useState();
  const [playing, setPlaying] = React.useState("false");
  const alpha_id = props.route.params.alpha_id;
  
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({uri: 'https://dns4.vippendu.com/download/128k-dmmuv/Scapegoat.mp3'});
    setSound(sound);
    await sound.playAsync(); 
    setPlaying("true");
  }

  async function stopSound() {
    await sound.stopAsync();
    setPlaying("false");
  }

  React.useEffect(() => {
    setLoader(true);
    listData({alpha_id: alpha_id})
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => consoleErrors(error, props)).finally(() => setLoader(false));
  }, []);
  
  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      {loader ? <Spinner
        visible={loader}
        textStyle={styles.spinnerTextStyle}
      /> : null} 
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
                onPress={() => props.navigation.navigate('Alphabets', {lang_id: props.route.params.lang_id})}>
                <Text style={{color: "#D3CFD6", fontWeight:"700"}}>
                  <Text style={styles.back}>
                      <Ionicons name="md-arrow-back" size={24} color="#756765" />
                  </Text>
                </Text>
              </TouchableOpacity>
              <Text style={styles.heading}>Learn {data?.alphabet}</Text>
            </View>
          </View>
          <View style={styles.darkContainer}>
            <View style={styles.innerContainer}>
              <View style={[styles.p_20, styles.outer_container]}>
             <View style={[styles.row, styles.mt_10]}>
                    <Text style={[styles.plan_label, styles.mt_25]}>{data.alphabet}</Text> 
             </View>
             <View style={[styles.row, styles.mt_25]}>
                {!data.image ? <Image source={image} resizeMode="contain" style={styles.image}></Image> :
                <Image source={{ uri: BASE_URI + '/alphabet-images/' + data.image }} resizeMode="contain" style={styles.image}></Image>}
                {!data.image_2 ? <Image source={image} resizeMode="contain" style={styles.image}></Image> :
                <Image source={{ uri: BASE_URI + '/alphabet-images/' + data.image_2 }} resizeMode="contain" style={styles.image}></Image>}
             </View>
             <View style={[styles.row, styles.mt_25]}>
                <TouchableOpacity onPress={() => data.audio && playing == "false" ? playSound() : playing == "true" ? stopSound() : null}>
                  <Text style={styles.plan_label}>
                  {data?.audio ? <Feather style={{marginRight:'10'}} name={playing == "false" ? "play" : 'pause'} size={20} color="#82A4B7" /> : null}{!data?.audio? "Audio Not Available" : "Play" }
                  </Text>
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
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  heading: {
    marginTop: "-11%",
    fontSize: 30,
    marginLeft: 70,
    fontWeight: "bold",
    color: "#ffffff",
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
    height: "19%",
    width: "100%",
  },
  innerContainer: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 50,
    height: "100%",
    width: "100%",
    marginBottom: 125
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
  outer_container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  plans_div: {
    width: "100%",
    padding: 15,
    backgroundColor: "#F4F9EB",
    display: "flex",
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 4,
    borderRadius: 10,
  },
  dot: {
    height: 20,
    width: 20,
    backgroundColor: "#756765",
    borderRadius: 50,
    marginTop: 11,
  },
  plan_label: {
    fontSize: 20,
    color: "#82A4B7",
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 6,
  },
  plan_sub_label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
    marginLeft: 10,
  },
  plan_sub_label_paid: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#756765",
    marginLeft: 10,
  },
  image: {
    width: 170,
    height: 170,
    margin: 20
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
  mt_10: {
      marginTop: 10
  }
});

export default SingleAlphabet;
