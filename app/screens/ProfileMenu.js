import React from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    TouchableOpacity,
    ScrollView
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {getUserProfile, logout} from "../api";
import { consoleErrors } from "../helper";
import * as SecureStore from 'expo-secure-store';

const ProfileMenu = (props) => {
  const [data, setData] = React.useState({});
  
  React.useEffect(() => {
    // Check the token 
    getUserProfile().then((response) => {
      setData(response.data.user);
    }).catch((error) => {
      console.log(error);consoleErrors(error)});
  }, []);

  const onLogoutClickHandler = async () => {
    await SecureStore.deleteItemAsync('access_token');
    props.navigation.replace("Login" , {signup_successful: true});
  }
  return (
     <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <ScrollView>
        <View
          style={{
            flex: 0.3,
            backgroundColor: "#82A4B7",
            borderBottomRightRadius: 45,
          }}
        >
        <TouchableOpacity
                style={{
                  ...styles.back,
                  borderRadius: 100,
                  backgroundColor: "#9D908D",
                  marginTop: 50,
                  marginLeft: 30,
                  width: 35,
                  height: 35,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => onLogoutClickHandler()}
              >
                <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
                  <Text style={styles.back}>
                    <Ionicons name="md-log-out" size={24} color="#756765" />
                  </Text>
                </Text>
              </TouchableOpacity>
          <Text style={styles.heading}>Profile Menu</Text>
          <Text style={styles.levelLabel}>{data.first_name} {data.last_name} : Level</Text> 
        </View>
        <View style={{ flex: 0.7, backgroundColor: "#82A4B7" }}>
          <View
            style={{
              backgroundColor: "#fff",
              height: "100%",
              borderTopLeftRadius: 50,
              paddingLeft: 50,
              paddingRight: 50,
              paddingTop: 5,
            }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
            <TouchableOpacity onPress={() => props.navigation.navigate('MainMenu')}>
                <View style={[styles.plans_div, styles.m_top_50]}>
                  <View style={styles.cat_image_container}>
                  <Ionicons name="md-language" size={32} color="#756765" />
                  </View>
                  <View>
                    <Text style={styles.plan_label}>#Language</Text>
                  </View>
                </View>
              </TouchableOpacity>
                
              {/* <TouchableOpacity onPress={() => props.navigation.navigate('Learning Track')}>
                <View style={styles.plans_div}>
                  <View style={styles.cat_image_container}>
                  <Ionicons name="md-play" size={32} color="#756765" />
                  </View>
                  <View>
                    <Text style={styles.plan_label}>#Level</Text>
                  </View>
                </View>
              </TouchableOpacity> */}
                
              <TouchableOpacity onPress={() => props.navigation.navigate('Update Profile')}>
                <View style={styles.plans_div}>
                  <View style={styles.cat_image_container}>
                  <Ionicons name="md-settings" size={32} color="#756765" />
                  </View>
                  <View>
                    <Text style={styles.plan_label}>Settings</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => props.navigation.navigate('Invite A Friend')}>
                <View style={styles.plans_div}>
                  <View style={styles.cat_image_container}>
                  <Ionicons name="md-link" size={32} color="#756765" />
                  </View>
                  <View>
                    <Text style={styles.plan_label}>Invite a Friend</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => props.navigation.navigate('Plans')}>
                <View style={styles.plans_div}>
                  <View style={styles.cat_image_container}>
                  <Ionicons name="md-ribbon" size={32} color="#756765" />
                  </View>
                  <View>
                    <Text style={styles.plan_label}>subscriptions</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
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

  heading: {
    marginTop: "-11%",
    marginLeft: 80,
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: "#82A4B7",
    color: "#82A4B7",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    backgroundColor: "#82A4B7",
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
    height: "25%",
    width: "100%",
  },
  innerContainer: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 50,
    height: "100%",
    width: "100%",
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
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  m_top_50: {
    marginTop: 40
  },
  dot: {
    height: 20,
    width: 20,
    backgroundColor: "#756765",
    borderRadius: 50,
    marginTop: 11,
  },
  plan_label: {
    fontSize: 17,
    color: "#82A4B7",
    fontWeight: "bold",
    marginLeft: 10,
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
    width: 40,
    height: 40,
  },
  cat_image_container: {
    marginLeft: 15,
    marginRight: 15,
    padding: 0,
    height: 40,
    width: 45,
    borderColor: "#9D908D",
    borderRightWidth: 4,
    borderRadius: 10,
  },
  levelLabel: {
    marginLeft: 80,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 15
  }
});

export default ProfileMenu;
