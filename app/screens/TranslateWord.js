import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  TextInput
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function TranslateWord(props) {
    return (
        <SafeAreaView style={[styles.container,
            {flexDirection: "column"}
            ]}>
            <ScrollView>
            <View styles={styles.container1}>
                <View style={styles.bg_white}>
                  <View style={styles.view}>
                    <Text style={styles.back}>
                    <Ionicons name="md-arrow-back" size={24} color="#ff5733" />
                    </Text>
                    <Text style={styles.heading}>Translate A Word</Text>
                    <View style={[styles.p_20, styles.outer_container]}>
                    <ScrollView>
                    <View style={styles.p_20}>
                        <View>
                        <Text style={styles.label}>From</Text>
                        <TextInput
                            style={[styles.input, styles.color_white]}
                            placeholder="Arabic / Other"
                        />
                        </View>
                        <View>
                        <Text style={styles.label}>To</Text>
                        <TextInput
                            style={[styles.input, styles.color_white]}
                            placeholder="Other / Arabic"
                        />
                        </View>
                        <View>
                        <Text style={styles.label}>Word to translate</Text>
                        <TextInput
                            style={[styles.input, styles.color_white]}
                            placeholder="Word"
                        />
                        </View>
                        <View>
                        <TouchableHighlight style={styles.mt_25}>
                            <View style={styles.button}>
                            <Text style={[styles.color_white, styles.font_16]}>
                                Update
                            </Text>
                            </View>
                        </TouchableHighlight>
                        </View>
                    </View>
                    </ScrollView>
                  </View>
                  </View>
                </View>
                <View style={styles.darkContainer}>
                  <View style={styles.innerContainer}> 
                    <Text style={styles.bottom_heading}>Translated word (Arabic)</Text>  
                    <Text style={styles.bottom_heading}>Translated word (Slanged)</Text>  
                    <Text style={styles.bottom_heading}>Translated word (Latin)</Text>  
                    <Text style={styles.bottom_heading}>Translated word (Formal latin)</Text>  
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
      backgroundColor: '#900C3F',
    },
    container1: {
      flex: 1,
      backgroundColor: '#ccc',
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
      color: '#301934',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 10,
      backgroundColor: '#f6edfa',
    },
    view: {
      backgroundColor: '#301934',
      height: '100%',
      width: '100%',
      borderBottomEndRadius: 50,
      paddingLeft: 20,
    },
    darkContainer: {
      backgroundColor: '#301934',
      height: '100%',
      width: '100%',
    },
    bg_white: {
      backgroundColor: '#900C3F',
      height: '51.5%',
      width: '100%',
    },
    innerContainer: {
      backgroundColor: '#900C3F',
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
      backgroundColor: "#ffc30f",
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
      color: '#301934'
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
      color: '#301934',
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
        backgroundColor: '#ff5733',
        borderRadius: 50,
        marginTop: 5
    },
    plan_label: {
        fontSize: 17,
        color: '#301934',
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
        color: '#ffc30f',
        marginLeft: 10
    },
    bottom_heading: {
        fontSize: 17,
        color: '#ffc30f',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 12
    },
  });

export default TranslateWord;