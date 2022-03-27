import React from 'react';
import { 
    Button, 
    StyleSheet, 
    Text, 
    TextInput, 
    View, 
    SafeAreaView,
    ImageBackground,
    TouchableOpacity
  } from 'react-native';

const image = require('../../assets/images/welcome_screen.jpeg');

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Happy Learning!</Text>
        <View style={styles.view}>
          <Button title="Signup" onPress={() =>
          navigation.navigate('Signup')
          }>
          </Button>
        </View>
        <View style={styles.view}>
          <Button title="Login Up"></Button>
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
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },

});

export default WelcomeScreen;