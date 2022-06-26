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

const Policy = (props) => {
  
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
                onPress={() => props.navigation.navigate("ProfileMenu")}
              >
                <Text style={{ color: "#D3CFD6", fontWeight: "700" }}>
                  <Text style={styles.back}>
                    <Ionicons name="md-arrow-back" size={24} color="#756765" />
                  </Text>
                </Text>
              </TouchableOpacity>
          <Text style={styles.heading}>Privacy Policy</Text>
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
            
            <Text style={styles.plan_label}>Privacy Policy 3amia</Text>
            <Text style={styles.plan_label}>1. General</Text>
            <Text style={[styles.justify, styles.font_14]}>At Zenobia AI, we care about your personal data, so we have prepared this Privacy Policy to explain how we collect, use and share it.
                  This Privacy Policy (“Privacy Policy”) details the personal data Zenobia for Artificial Intelligence Solutions, LLC. (“Zenobia AI”, “we”, “us” or “our”) receives about you, how we process it and your rights and obligations in relation to your personal data. Zenobia AI, LLC, a company registered at Prime Business Centre, Housing Bank Complex, Alshmisani, Amman, Jordan, is the data controller for the purposes of the General Data Protection Regulation (“GDPR”) and any relevant local legislation (“Data Protection Laws”).
                  By using or accessing the Service, you agree to the terms of this Privacy Policy. Capitalized terms not defined here have the meanings set forth in the terms and conditions (the “Terms and Conditions”), located at www.zenobiaai.com/terms. We may update our Privacy Policy to reflect changes to our information practices. If we do this and the changes are material, we will post a notice that we have made changes to this Privacy Policy on the Website for at least 7 days before the changes are made, and we will indicate the date these terms were last revised at the bottom of the Privacy Policy. Any revisions to this Privacy Policy will become effective at the end of that 7 day period.
                  If you are an employee, worker or contractor of Zenobia AI, the information about how we handle your personal information is available in the Zenobia AI internal knowledge base. With respect to employees based in Europe, we are committed to cooperating with European data protection authorities (DPAs) and comply with the advice given by such authorities with regard to human resources data transferred from Europe in the context of the employment relationship.</Text>
            <Text style={styles.plan_label}>2. Information We Collect</Text>
            <Text style={[styles.justify, styles.font_14]}>This Privacy Policy explains how we collect, use and share your personal data.</Text>
            <Text style={[styles.underline, styles.justify, styles.font_14]}>Information you provide</Text>
            <Text style={[styles.justify, styles.font_14]}>Through the registration process, you will provide us with your name, e-mail address (or parent’s e-mail address), and age or date of birth. You will also provide us with your payment transaction information if you choose to pay for Zenobia AI services.</Text>
            <Text style={[styles.underline, styles.justify, styles.font_14]}>Activity Data</Text>
            <Text style={[styles.justify, styles.font_14]}>When you use the Service, you will submit information and content to your profile. We will also generate data about your use of our Services including your engagement in educational activities on the Service, or your sending of messages and otherwise transmitting information to other users (“Activity Data”). We also collect technical data about how you interact with our Services; for more information, see Cookies.</Text>
            <Text style={[styles.justify, styles.font_14, styles.font_red]}>When you use 3amia in our app, we use a service named FullStory to log your activity. This provides us with a set of data and a session replay of your activity on 3amia in the form of a video. FullStory captures and analyzes your usage data to help us make your 3amia experience better.</Text>
            <Text style={[styles.justify, styles.font_14, styles.font_red]}>We only collect the data we need which means we don’t record:</Text>
            <Text style={[styles.justify, styles.font_14, styles.font_red]}>⊛ Usernames</Text>
            <Text style={[styles.justify, styles.font_14, styles.font_red]}>⊛ Names</Text>
            <Text style={[styles.justify, styles.font_14, styles.font_red]}>⊛ Profile Images</Text>
            <Text style={[styles.justify, styles.font_14, styles.font_red]}>⊛ Email addresses</Text>
            <Text style={[styles.justify, styles.font_14, styles.font_red]}>⊛ Locations or bios on the Profile page</Text>
            <Text style={[styles.justify, styles.font_14, styles.font_red]}>⊛ Passwords</Text>
            <Text style={[styles.justify, styles.font_14]}> We do record the following data:</Text>
            <Text style={[styles.justify, styles.font_14, styles.bold]}> Usage Patterns</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Clicks</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Mouse movements</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Scrolling</Text>
            <Text style={[styles.justify, styles.font_14]}>Typing</Text>
            <Text style={[styles.justify, styles.font_14, styles.bold]}>⊛ Tech Specs</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Browser</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Device type</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Operating system</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Viewfinder size</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Script errors</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ IP address</Text>
            <Text style={[styles.justify, styles.font_14, styles.bold]}>Navigation</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Pages visited</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Referrers</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ URL parameters</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Session duration</Text>
            <Text style={[styles.justify, styles.font_14, styles.bold]}>Learning Activity</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Session progress</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Answers</Text>
            <Text style={[styles.justify, styles.font_14, styles.underline]}>Third Party Data</Text>
            <Text style={[styles.justify, styles.font_14]}>We also collect information about you from third parties.</Text>
            <Text style={[styles.justify, styles.font_14, styles.underline]}>Product Research and Development</Text>
            <Text style={[styles.justify, styles.font_14]}>We may contact you to participate in product research activities. These may include surveys, interviews, and other types of feedback sessions. When you participate in these research activities, the information you provide will be used to test, improve, and develop our products. We will record the video, audio and text transcriptions of this feedback together with any additional contact information you provide and will retain this data for two years.</Text>
            <Text style={[styles.justify, styles.font_14]}>Please contact us at contact@zenobiaai.com to:</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Request more information about the research activities you have volunteered for.</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Opt out of being contacted for research activities.</Text>
            <Text style={[styles.justify, styles.font_14]}>⊛ Request a copy of any research related data you have provided to us.</Text>
            <Text style={styles.plan_label}>3. Information Obtained by Third Parties</Text>
            <Text style={[styles.justify, styles.font_14]}>To support and enhance the Service, we work with a variety of third party advertising networks, marketing analytics service providers and website analysis firms, such as Google, Facebook, Instagram (collectively, “Third Party Advertising Service Providers”). These Third Party Advertising Service Providers collect and use personal data about your visits to and use of the mobile Application, as well as other websites in order to serve you with advertisements and content tailored to meet your preferences and likely interests or better understand ad effectiveness. Aggregate demographic and interest data will also be used for market research purposes.
                 In addition, your mobile devices may offer settings that enable you to make choices about the collection, use, or transfer of mobile app information for online behavioral advertising (for example, Apple iOS’ Advertising ID and Google Android’s Advertising ID). Please note that opting out does not prevent the display of all advertisements to you.</Text>
            <Text style={styles.plan_label}>4. Use of information obtained by Zenobia AI</Text>
            <Text style={[styles.justify, styles.font_14]}>3amia may occasionally send you service related and product change announcements through the general operation of the Service. We will send you reminder notifications to support the 3amia teaching methodology by reinforcing the learning cadence and help maintain your learning streak. We process your data to help provide you with the Service and offer personalized features, to understand and improve our Service and to keep our Service safe and secure.
                3amia may use or share anonymous data collected through the Service, including Activity Data without limitation. As a business, it is critical that we perform our contract with you with the best service possible, and it is in our legitimate interests to perform these processing functions and to enable service e-mails by default to keep your data secure and provide our Service. You may opt out of any non- essential service e-mails at any time.
                We may also use your contact information to send you notifications regarding new services, offers and promotions offered by 3amia if you affirmatively consent to receive such communications.
                When you register with 3amia, some of your information is made public and available at various locations. This will include the data from your 3amia Profile and Account (Name, Location, Bio, Username, User ID, Profile picture); your followers and the people you follow; and your learning progress. Your 3amia account email address is not shown publicly. Third party websites may be able to read, collect and use your public information for their own purposes.
                Profile information is used by 3amia to be presented back to and edited by you when you access the Service and to be presented to other users. In some cases, other users may be able to supplement your profile, including by submitting comments (which can be deleted by
                you). 3amia uses this information to provide you with support, to send you essential notifications, to enforce our terms, conditions and policies, to communicate with you, to administer the Services, and for internal operations, including troubleshooting, data analysis, testing, research, statistical, and survey purposes. Zenobia AI’s Terms and Conditions provide the contractual lawful basis for these processing activities.</Text>
            <Text style={[styles.justify, styles.font_14]}>5. Sharing your personal data with third parties</Text>
            <Text style={[styles.justify, styles.font_14, styles.font_red]}>3amia shares your personal data only when it is necessary to offer the Service, legally required, or permitted by you.</Text>
            <Text style={[styles.justify, styles.font_14]}>We will provide personal data to hosting providers such as Amazon Web Services, search engine providers such as Google, analytics providers such as Crashlytics, and support providers such as ZenDesk.</Text>
            <Text style={[styles.justify, styles.font_14]}>These data processors help us bring you the Service. For example, we may share your information in order to detect where or how you encountered a bug when using our mobile application. In connection with these operations, our service providers will have access to personal data for a limited time. When we utilize service providers for processing any personal data, we implement contractual protections limiting the use of that personal data to the provision of services to 3amia.</Text>
            <Text style={[styles.justify, styles.font_14]}>We will be required to access and disclose personal data in response to lawful requests, such as subpoenas or court orders, or in compliance with applicable laws. Additionally, we will access and share account or other personal data when we believe it is necessary to comply with law, to protect our interests or property, to prevent fraud or other illegal activity perpetrated through the Service or using the 3amia name, or to prevent imminent harm. This will include accessing and sharing personal data with other companies, lawyers, agents or government agencies.</Text>
            <Text style={[styles.justify, styles.font_14]}>Duolingo will share aggregate or anonymous data collected through the Service, including Activity Data, for purposes such as understanding or improving the service.</Text>
            <Text style={styles.plan_label}>6. Data subject rights and data retention</Text>
            <Text style={[styles.justify, styles.font_14]}>You can manage your account settings to update, amend, and correct your information.
                    You also have the following rights in relation to the personal data we hold about you, unless provided otherwise by local law:</Text>
            <Text style={[styles.justify, styles.font_14]}>To request access to, or erasure of, the personal data we hold about you.</Text>
            <Text style={[styles.justify, styles.font_14]}>To request us to restrict the processing of the personal data we hold about you.</Text>
            <Text style={[styles.justify, styles.font_14]}>To object to us processing personal data relating to you.</Text>
            <Text style={[styles.justify, styles.font_14]}>Where you have given us consent to process your personal data, you have the right to withdraw that consent at any time.</Text>
            <Text style={[styles.justify, styles.font_14]}>To export the personal data you have provided to 3amia in a format that can be transferred electronically to a third party.</Text>
            <Text style={[styles.justify, styles.font_14]}>To delete your account with 3amia by following the instructions available through the Service.</Text>
            <Text style={[styles.justify, styles.font_14]}>
            3amia will retain your data until your account is deleted, after which point we will retain anonymous data collected through the Service, including Activity Data, which may be used by 3amia and shared with third parties in any manner.
            Please note that some of these rights are not absolute. In some cases, we may refuse a request to exercise particular rights if complying with it meant that we are no longer able to meet our contractual obligation to provide you with particular products and services. We will keep you informed as to the actions that we can take when you make your request.
            You may also have the right to make a GDPR complaint to the relevant Supervisory Authority. A list of EEA Supervisory Authorities is available here:http://ec.europa.eu/justice/datarotection/bodies/authorities/index _en.htm . If you need further assistance regarding your rights, please contact us using the contact information provided below and we will consider your request in accordance with applicable law. In some cases our ability to uphold these rights for you may depend upon our obligations to process personal information for security, safety, fraud prevention reasons, compliance with regulatory or legal requirements,
  
            or because processing is necessary to deliver the services you have requested. Where this is the case, we will inform you of specific details in response to your request.
            </Text>
            <Text style={styles.plan_label}>7. Third party websites and links</Text>
            <Text style={[styles.justify, styles.font_14]}>Please note that you may have cookies placed on your computer by third party websites that refer you to our Service. Although we do not share your personal data with these third party websites unless it is reasonably necessary to offer the Service, they may be able to link certain non-personally identifiable information we transfer to them with personal data they previously collected from you. Please review the privacy policies of each website you visit to better understand their privacy practices. In addition, 3amia would like to inform you that anytime you click on links (including advertising banners), which take you to third party websites, you will be subject to the third parties’ privacy policies.
            Our Services contain links to other sites operated by third parties. 3amia does not control such other sites and is not responsible for their content, their privacy policies, or their use of personal data, including any personal or financial information collected by our third party payment processor to process payments for in-app purchases. 3amia’s inclusion of such links does not imply any endorsement of the content on such sites or of their owners or operators except as disclosed on the Services. Any information submitted by you directly to these third parties is subject to that third party’s privacy policy.
            </Text>
            <Text style={[styles.justify, styles.font_14]}>8. Children under age of digital consent</Text>
            <Text style={[styles.justify, styles.font_14]}>We know that children deserve extra privacy protection. That’s why we treat child users differently to ensure their parents are in control and we only collect the bare minimum information we need to make 3amia work.
            When a user creates a 3amia account we collect their age and compare it to the local standard of child online consent depending on the country they registered in. We refer to users under this age as “child users”. Child users are permitted to create a user account but we ask them to provide their parent’s email address instead of their own. We also prevent child users from supplying their own name because we don’t need that information.
            After registration we will send an email notifying the parent about 3amia’s privacy and information practices regarding child users, including what personal data we collect and how we use, share, and protect that personal data. The email also explains how parents can request that Duolingo access, change or delete the personal data about their child.
            </Text>
            <Text style={styles.plan_label}>9. Links</Text>
            <Text style={[styles.justify, styles.font_14]}>The Service may contain links to other websites. We are not responsible for the privacy practices of other websites. We encourage users to be aware when they leave the Service to read the privacy statements of other websites that collect personally identifiable information. This Privacy Policy applies only to information collected by 3amia via the Service.</Text>
            <Text style={styles.plan_label}>10. Information security</Text>
            <Text style={[styles.justify, styles.font_14]}>3amia has implemented administrative and technical safeguards it believes are appropriate to protect the confidentiality, integrity and availability of your personal data. However, given sufficient resources, a determined attacker could defeat those safeguards and may, as a result, gain access to the data we seek to protect.</Text>
            <Text style={styles.plan_label}>11. Do Not Track</Text>
            <Text style={[styles.justify, styles.font_14]}>The Service is not designed to respond to “do not track” signals sent by some browsers.</Text>
            <Text style={styles.plan_label}>12. Contact Us</Text>
            <Text style={[styles.justify, styles.font_14]}>For all data privacy inquiries and any questions or concerns you have about this Privacy Policy, please contact our Data Protection Officer at contact@zenobiaai.com
            For all support inquiries, please contact contact@zenobiaai.com.</Text>
            <Text style={[styles.justify, styles.font_14]}>Last revised on 14th June, 2022</Text>
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
  },
  justify: {
      textAlign: "justify"
  },
  bold: {
      fontWeight: "bold"
  },
  underline: {
      textDecorationLine: "underline"
  },
  font_14: {
      fontSize: 14
  },
  font_red: {
        color: 'red'
  }
});

export default Policy;
