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
  Image
} from "react-native";
import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

const {width: screenWidth} = Dimensions.get('window');
const image_not_available = require("../../assets/image_not_available.png");

const renderItem = ({item, index}, parallaxProps) => {
  return (
    <View style={styles.item}>
      <Text style={{fontSize: 22, marginLeft: -20, textAlign: 'center', color: 'grey'}} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={{fontSize: 17, marginLeft: -20, textAlign: 'center', color: '#82A4B7'}} numberOfLines={2}>
      {item.subtitle}
      </Text>

        <View style={{ flex: 1, justifyContent: 'center'}}>
            {item.illustration ? 
                <Image
                    source={{uri: item.illustration}}
                    style={styles.image}
                /> : 
                <Image
                    source={image_not_available}
                    style={styles.image}
                />
            }
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
    marginTop: 20,
    // marginBottom: Platform.select({ios: 0, android: 2}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    marginTop: 70,
    resizeMode: 'contain',
    height: 300,
    width: 300,
    marginLeft: 20,
  },
  image_conatin: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
    
  },
});
export default memo(renderItem);
