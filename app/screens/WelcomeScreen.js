import React from 'react';
import { 
    Button, 
    StyleSheet, 
    Text, 
    View, 
    ImageBackground,
    Image,
    TouchableHighlight
  } from 'react-native';
  import Ionicons from '@expo/vector-icons/Ionicons';

const image = require('../../assets/images/welcome_screen.jpeg');
const logo = require('../../assets/images/logo.jpeg')

const WelcomeScreen = ({props}) => {
    return (
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Ionicons style={styles.first} name="md-book" size={32} color="#ff5733" />
        <Ionicons style={styles.second} name="md-language" size={32} color="#ff5733" />
        <Ionicons style={styles.third} name="md-text" size={32} color="#ff5733" />
        <View style={styles.logo_container}>
        <Image source={logo} style={styles.logo}></Image>
        </View>
        <View style={styles.d_flex}>
          <TouchableHighlight style={styles.m_top}>
            <View style={styles.button}>
              <Text style={[styles.color_white, styles.font_16]}>
                Sign Up
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.m_top}>
            <View style={styles.button}>
              <Text style={[styles.color_white, styles.font_16]}>
                Login
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    margin: '2%',
  },    
  image: {
    flex: 1,
    justifyContent: "center"
  },
  d_flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  logo_container: {
    width: '100%'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ffc30f",
    padding: 10,
    borderRadius: 20,
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  m_top: {
    marginTop: 20
  },
  first: {
    position: 'relative',
    left: 30,
    top: 170
  },
  second: {
    position: 'relative',
    left: 156,
  },
  third: {
    position: 'relative',
    left: 300,
    top: 100
  }

});

export default WelcomeScreen;