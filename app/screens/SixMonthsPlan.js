import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function SixMonthsPlan(props) {
    return (
        <SafeAreaView style={[styles.container,
            {flexDirection: "column"}
            ]}>
            
              <View styles={styles.container1}>
                <View style={styles.bg_white}>
                  <View style={styles.view}>
                    <Text style={styles.back}>
                    <Ionicons name="md-arrow-back" size={24} color="#756765" />
                    </Text>
                    <Text style={styles.heading}>6 Months Plan Details</Text>
                    <Text style={styles.register}>After completion of this subscription you will be good to communicate in respective languages!</Text>
                    <View style={[styles.p_20, styles.outer_container]}>
                    <ScrollView>
                    <View style={styles.plans_div}> 
                        <View style={styles.dot}></View>
                        <View>
                            <Text style={styles.plan_label}>Access letters of respective lenguages.</Text>
                        </View>
                      </View>
                      <View style={styles.plans_div}> 
                        <View style={styles.dot}></View>
                        <View>
                            <Text style={styles.plan_label}>Access words for 6 month!</Text>
                        </View>
                      </View>
                      <View style={styles.plans_div}> 
                        <View style={styles.dot}></View>
                        <View>
                            <Text style={styles.plan_label}>Access Sentences for 6 month!</Text>
                        </View>
                      </View>
                      <View style={styles.plans_div}> 
                        <View style={styles.dot}></View>
                        <View>
                            <Text style={styles.plan_label}>Access dictionary for 6 month!</Text>
                        </View>
                      </View>
                      <View style={styles.plans_div}> 
                        <View style={styles.dot}></View>
                        <View>
                            <Text style={styles.plan_label}>Add on up to 30 user-defined words!</Text>
                        </View>
                      </View>
                      <View style={styles.plans_div}> 
                        <View style={styles.dot}></View>
                        <View>
                            <Text style={styles.plan_label}>Boost your learning with interactive quizes.</Text>
                        </View>
                      </View>
                      <View style={styles.plans_div}> 
                        <View style={styles.dot}></View>
                        <View>
                            <Text style={styles.plan_label}>Measure your progress by learning track.</Text>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                  </View>
                </View>
                <View style={styles.darkContainer}>
                  <View style={styles.innerContainer}>
                  <TouchableOpacity style={styles.mt_25}>
                      <View style={styles.button}>
                        <Text style={[styles.color_white, styles.font_16]}>Buy Now</Text>
                      </View>
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    container1: {
      flex: 1,
      backgroundColor: '#ffffff',
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
      borderWidth: 1,
      padding: 10,
      borderColor: '#82A4B7',
      color: '#82A4B7',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 10,
      backgroundColor: '#82A4B7'
    },
    view: {
      backgroundColor: '#82A4B7',
      height: '100%',
      width: '100%',
      borderBottomEndRadius: 50,
      paddingLeft: 20,
    },
    darkContainer: {
      backgroundColor: '#82A4B7',
      height: '100%',
      width: '100%',
    },
    bg_white: {
      backgroundColor: '#9D908D',
      height: '55%',
      width: '100%',
    },
    innerContainer: {
      backgroundColor: '#9D908D',
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
      backgroundColor: "#756765",
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
      color: '#82A4B7'
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
      color: '#82A4B7',
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
        backgroundColor: '#756765',
        borderRadius: 50,
        marginTop: 5
    },
    plan_label: {
        fontSize: 17,
        color: '#82A4B7',
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
        color: '#756765',
        marginLeft: 10
    },
    bottom_heading: {
        fontSize: 16,
        color: '#756765',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15
    },
  });

export default SixMonthsPlan;