import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { listData , fetchLessonNameById} from "../api";
import { consoleErrors } from "../helper";
import Ionicons from '@expo/vector-icons/Ionicons';

const Sentence = (props) =>{
  const [data, setData] = React.useState({});
  const cat_id = props.route.params.cat_id;
  console.log(cat_id, "idddd")
  React.useEffect(() => {
    // fetchLessonNameById(cat_id)
    // .then((res)=> {
    //   console.log(res, "response---")
    // })
    // .catch((error) => consoleErrors(error));
    listData({cat_id: cat_id, param: 's'})
      .then((response) => { 
        setData(response.data.data);
        console.log(response.data.data, "------")
      })
      .catch((error) => consoleErrors(error));
  });
    return (
        <SafeAreaView style={[styles.container,
            {flexDirection: "column"}
            ]}>
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
                    onPress={() => props.navigation.navigate('LearningMenu', {cat_id: cat_id})}>
                    <Text style={{color: "#D3CFD6", fontWeight:"700"}}>
                      <Text style={styles.back}>
                          <Ionicons name="md-arrow-back" size={24} color="#756765" />
                      </Text>
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.heading}>Sentences</Text>
                  <Text style={styles.register}>Lesson: {data[0]?.category?.category}</Text>
                  <View style={[styles.p_20, styles.outer_container]}>
                    <View style={styles.plans_div}> 
                      <View style={styles.dot}></View>
                      <View>
                          <Text style={styles.plan_label}>Sentence: {data[0]?.sentence_in_english}</Text>
                      </View>
                    </View>
                    <View style={styles.plans_div}> 
                      <View style={styles.dot}></View>
                      <View>
                          <Text style={styles.plan_label}>Arabic sentence: {data[0]?.sentence_in_arabic}</Text>
                      </View>
                    </View>
                    <View style={styles.plans_div}> 
                      <View style={styles.dot}></View>
                      <View>
                      <Text style={styles.plan_label}>Audio</Text>
                      </View>
                    </View>
                    {/* <View style={styles.plans_div}> 
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
                    </View> */}
                </View>
                </View>
              </View>
              <View style={styles.darkContainer}>
                  <View style={styles.innerContainer}>
                  <TouchableOpacity style={styles.mt_10}>
                      <View style={styles.button}>
                        <Text style={[styles.color_white, styles.font_16]}>Next</Text>
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
      marginTop: 25
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
    mt_10: {
        marginTop: 17
    }
  });

export default Sentence;