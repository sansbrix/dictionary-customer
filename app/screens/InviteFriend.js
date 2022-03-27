import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  SafeAreaView,
  TouchableHighlight 
} from 'react-native';

function InviteFriend(props) {
    return (
        <SafeAreaView style={[styles.container,
            {flexDirection: "column"}
            ]}>
            <View styles={styles.container}>
              <View style={styles.bg_white}>
                <View style={styles.view}>
                  <Text style={styles.back}>Back</Text>
                  <Text style={styles.register}>Send an invitation to join dictionary app with you!</Text>
                  <Text style={styles.heading}>Invite a Friend</Text>
                </View>
              </View>
              <View style={styles.darkContainer}>
                <View style={styles.innerContainer}>
                  <View style={styles.p_20}>
                    <View> 
                      <Text style={styles.label}>Enter Email</Text>
                      <View style={styles.d_flex}>
                        <TextInput
                        style={[styles.input, styles.color_white]}
                        />
                      </View>
                    </View>
                    <View>
                    <TouchableHighlight style={styles.mt_25}>
                      <View style={styles.button}>
                        <Text style={[styles.color_white, styles.font_16]}>Send Invite</Text>
                      </View>
                    </TouchableHighlight>
                    </View>
                  </View>
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
      marginTop: '1%',
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
      backgroundColor: '#f6edfa'
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
      backgroundColor: '#ffffff',
      height: '25%',
      width: '100%',
    },
    innerContainer: {
      backgroundColor: '#ffffff',
      borderTopLeftRadius: 50,
      height: '100%',
      width: '100%',
    },
    back: {
      marginTop: '2%',
      fontSize: 15,
      color: '#ffffff',
    },
    register: {
      marginTop: '12%',
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
      color: '#301934',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 5,
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
    d_flex: {
        display: 'flex',
        flexDirection: 'row'
    }
  });

export default InviteFriend;