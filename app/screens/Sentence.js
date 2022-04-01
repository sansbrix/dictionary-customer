import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  TouchableHighlight
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function Sentence(props) {
    return (
        <SafeAreaView style={[styles.container,
            {flexDirection: "column"}
            ]}>
            <View styles={styles.container}>
              <View style={styles.bg_white}>
                <View style={styles.view}>
                  <Text style={styles.back}>
                  <Ionicons name="md-arrow-back" size={24} color="#ff5733" />
                  </Text>
                  <Text style={styles.heading}>Sentences</Text>
                  <Text style={styles.register}>#lesson name</Text>
                  <View style={[styles.p_20, styles.outer_container]}>
                    <View style={styles.plans_div}> 
                      <View style={styles.dot}></View>
                      <View>
                          <Text style={styles.plan_label}>English sentence</Text>
                      </View>
                    </View>
                    <View style={styles.plans_div}> 
                      <View style={styles.dot}></View>
                      <View>
                          <Text style={styles.plan_label}>Arabic sentence</Text>
                      </View>
                    </View>
                    <View style={styles.plans_div}> 
                      <View style={styles.dot}></View>
                      <View>
                          <Text style={styles.plan_label}>Latin</Text>
                      </View>
                    </View>
                    <View style={styles.plans_div}> 
                      <View style={styles.dot}></View>
                      <View>
                          <Text style={styles.plan_label}>Formal Latin</Text>
                      </View>
                    </View>
                    <View style={styles.plans_div}> 
                      <View style={styles.dot}></View>
                      <View>
                          <Text style={styles.plan_label}>Other (if any)</Text>
                      </View>
                    </View>
                </View>
                </View>
              </View>
              <View style={styles.darkContainer}>
                  <View style={styles.innerContainer}>
                  <TouchableHighlight style={styles.mt_10}>
                      <View style={styles.button}>
                        <Text style={[styles.color_white, styles.font_16]}>Next</Text>
                      </View>
                  </TouchableHighlight>
                  </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
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
      borderWidth: 1,
      padding: 10,
      borderColor: '#301934',
      color: '#301934',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 10,
      backgroundColor: '#301934'
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
      height: '55%',
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
      marginTop: 25
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
        fontSize: 16,
        color: '#ffc30f',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15
    },
    mt_10: {
        marginTop: 17
    }
  });

export default Sentence;