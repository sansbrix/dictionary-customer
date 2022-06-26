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

const Terms = (props) => {
  
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
          <Text style={styles.heading}>Terms and Conditions</Text>
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
            <Text style={[styles.justify, styles.font_14]}>3amia mobile applications (“Apps”) and related services ( the “Service”) are operated by Zenobia for Artificial Intelligence Solutions, LLC. (“Zenobia AI,” “us,” or “we”). Access and use of the Service is subject to the following Terms and Conditions of Service (“Terms and Conditions”). By accessing or using any part of the Service, you represent that you have read, understood, and agree to be bound by these Terms and Conditions including any future modifications. Zenobia AI may amend, update or change these Terms and Conditions. If we do this, we will post a notice that we have made changes to these Terms and Conditions on the App for at least 7 days after the changes are posted and will indicate at the bottom of the Terms and Conditions the date these terms were last revised. Any revisions to these Terms and Conditions will become effective the earlier of (i) the end of such 7-day period or (ii) the first time you access or use the Service after such changes. If you do not agree to abide by these Terms and Conditions, you are not authorized to use, access or participate in the Service.</Text>
            <Text style={[styles.justify, styles.font_14]}>PLEASE NOTE THAT THESE TERMS AND CONDITIONS CONTAIN A MANDATORY ARBITRATION OF DISPUTES PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES IN CERTAIN CIRCUMSTANCES, RATHER THAN JURY TRIALS OR CLASS ACTION LAWSUITS.</Text>
            <Text style={styles.plan_label}>2. Description of App and Service</Text>
            <Text style={[styles.justify, styles.font_14]}>The Service allows users to access and use a variety of educational services, including learning or practicing a language. 3amia may, in its sole discretion and at any time, update, change, suspend, make improvements to or discontinue any aspect of the Service, temporarily or permanently.</Text>
            <Text style={styles.plan_label}>3. Additional Terms</Text>
            <Text style={[styles.justify, styles.font_14]}>Some of our Services have additional terms and conditions (“Additional Terms”). Where Additional Terms apply to a Service, we will make them available for you to read through your use of that Service. By using that Service, you agree to the Additional Terms.</Text>
            <Text style={[styles.plan_label]}>4. Registration; Submission of Content</Text>
            <Text style={[styles.justify, styles.font_14, styles.underline]}>a. Registration</Text>
            <Text style={[styles.justify, styles.font_14]}>In connection with registering for and using the Service, you agree (i) to provide accurate, current and complete information about you and/or your organization as requested by 3amia; (ii) to maintain the confidentiality of your password and other information related to the security of your account; (iii) to maintain and promptly update any registration information you provide to 3amia, to keep such information accurate, current and complete; and (iv) to be fully responsible for all use of your account and for any actions that take place through your account.</Text>
            <Text style={[styles.justify, styles.font_14, styles.underline]}>b. Course Contributor Submissions</Text>
            <Text style={[styles.justify, styles.font_14]}>If you are or become a Course Contributor, you may offer to translate or have translated certain existing courses into other languages and you may offer to contribute new courses to the Service, as agreed between you and 3amia on a case-by-case basis. Subject to any guidelines posted on the Service, you may perform any such translations or create any such courses in accordance with your own schedule and using your own facilities and resources. You are not required to become a Course Contributor and you may cease your activities as a Course Contributor at any time. You acknowledge that you do not desire and will not receive compensation for your activities as a Course Contributor or for our use of any Course Contributor Materials (as defined below) you submit.</Text>
            <Text style={[styles.justify, styles.font_14, styles.underline]}>c. General Content</Text>
            <Text style={[styles.justify, styles.font_14]}>As a condition of submitting any ratings, reviews, information, data, text, photographs, audio clips, audiovisual works, translations, flashcards or other materials on the Services (“Content”), you hereby grant to 3amia a royalty free, perpetual, irrevocable, worldwide, nonexclusive, transferable, and sublicensable license to use, reproduce, copy, adapt, modify, merge, distribute, publicly display, create derivative works from, incorporate such Content into other works; sublicense through multiple tiers the Content, and acknowledge that this license cannot be terminated by you once your Content is submitted to the Services. You represent that you own or have secured all legal rights necessary for the Content submitted by you to be used by you, 3amia, and others as described and otherwise contemplated in these Terms and Conditions. You understand that other users will have access to the Content and that neither they or 3amia have any
   obligation to you or anyone else to maintain the confidentiality of the Content.</Text>
            <Text style={styles.plan_label}>5. Your Representations and Warranties</Text>
            <Text style={[styles.justify, styles.font_14]}>You represent and warrant to 3amia that your access and use of the Service will be in accordance with these Terms and Conditions and with all applicable laws, rules and regulations of the United States and any other relevant jurisdiction, including those regarding online conduct or acceptable content, and those regarding the transmission of data or information exported from Jordan and/or the jurisdiction in which you reside. You further represent and warrant that you have created or own any material you submit via the Service (including Translation Materials, Course Contributor Materials, Activity Materials, and Content) and that you have the right, as applicable, to grant us a license to use that material as set forth above or the right to assign that material to us as set forth below.
You represent and warrant that (1) you are not organized under the laws of, operating from, or otherwise ordinarily resident in a country or territory that is the target or comprehensive Jordan economic or trade sanctions (i.e., an embargo) or (2) identified on a list of prohibited or restricted persons.</Text>
            <Text style={styles.plan_label}>6. Inappropriate Use</Text>
            <Text style={[styles.justify, styles.font_14]}>You will not upload, display or otherwise provide on or through the Service any content that: (i) is libelous, defamatory, abusive, threatening, harassing, hateful, offensive or otherwise violates any law or infringes upon the right of any third party (including copyright, trademark, privacy, publicity or other personal or proprietary rights); or (ii) in Zenobia AI’s sole judgment, is objectionable or which restricts or inhibits any other person from using the Service or which may expose 3amia or its users to any harm or liability of any kind.</Text>
            <Text style={[styles.plan_label]}>7. Indemnification of 3amia</Text>
            <Text style={[styles.justify, styles.font_14]}>You agree to defend, indemnify and hold harmless 3amia and its directors, officers, employees, contractors, agents, suppliers, licensors, successors and assigns, from and against any and all losses, claims, causes of action, obligations, liabilities and damages whatsoever, including attorneys' fees, arising out of or relating to your access or use of the Service, any false representation made to us (as part of these Terms and Conditions or otherwise), your breach of any
of these Terms and Conditions, or any claim that any translation we provide to you is inaccurate, inappropriate or defective in any way whatsoever.</Text>
            <Text style={[styles.plan_label]}>8. License to Apps</Text>
            <Text style={[styles.justify, styles.font_14]}>Subject to the terms of these Terms and Conditions, Zenobia AI grants you a non-transferable, non-exclusive license to download, install, and use one copy of each App in object code form only on an interactive wireless device that you own or control. You may not derive or attempt to derive the source code of all or any portion of any App, permit any third party to derive or attempt to derive such source code, or reverse engineer, decompile, disassemble, or translate any App or any part thereof. Zenobia AI and its licensors own and shall retain all intellectual property rights and other rights in and to the Apps, and any changes, modifications, or corrections thereto. The following terms and conditions apply to you only if you are using the Apps from the Apple App Store. To the extent the other terms and conditions of these Terms and Conditions are less restrictive than, or otherwise conflict with, the terms and conditions of this paragraph, the more restrictive or conflicting terms and conditions in this paragraph apply, but solely with respect to Apps from the Apple App Store. You acknowledge and agree that these Terms and Conditions are solely between you and Zenobia AI, not Apple, and that Apple has no responsibility for the Apps or content thereof. Your use of any App must comply with the App Store Terms of Service. You acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Apps. In the event of any failure of any App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any, for the App to you; to the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the Apps, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be solely governed by these Terms and Conditions. You and Zenobia AI acknowledge that Apple is not responsible for addressing any claims of you or any third party relating to the Apps or your possession and/or use of any App, including, but not limited to: (i) product liability claims; (ii) any claim that an App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation. You and Zenobia AI acknowledge that, in the event of any third-party claim that any App or your possession and use of that App infringes that third party's intellectual property rights, Zenobia AI, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim to the extent required by these Terms and Conditions. You must comply with applicable third party terms of agreement when using any App. You and Zenobia AI acknowledge and agree that Apple, and Apple’s subsidiaries, are third party beneficiaries of these Terms and Conditions as they relate to your license of the Apps, and that, upon your acceptance of these Terms and Conditions, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms and Conditions against you as a third party beneficiary thereof. </Text>
            <Text style={[styles.plan_label]}>9. In-App Purchases</Text>
            <Text style={[styles.justify, styles.font_14]}>If you purchase an auto-renewing periodic subscription through the Service, your 3amia account will be billed continuously for the subscription until you terminate it as set forth below. After your initial subscription period, and again after any subsequent subscription period, your subscription will automatically renew for an additional equivalent period. If you do not wish your subscription to renew automatically, or if you want to change or terminate your subscription, you will need to log in to your 3amia account and follow instructions to terminate or change your subscription, even if you have deleted your account.
In the Service, you may purchase, with “real world” money, a limited, personal, non-transferable, non-sublicensable, revocable license to use (a) “virtual currency,” including but not limited to virtual gems, solely for use in the Service, and (b) “virtual in-app items” (together with “virtual currency,” “Virtual Items”). You are allowed to purchase Virtual Items through the Service, and not in any other way.
Zenobia AI may manage, regulate, control, modify, or eliminate Virtual Items at any time, with or without notice. Zenobia AI may update the pricing of Virtual Items at any time in its sole discretion, and may add new Virtual Items for additional fees. Zenobia AI shall have no liability to you or any third party in the event that Zenobia AI exercises any such rights.
The transfer of Virtual Items is prohibited except where expressly authorized in the Service. Other than as expressly authorized in the Service, you shall not sell, redeem or otherwise transfer Virtual Items
to any person or entity, including but not limited to Company, another user, or any third party.
You agree to pay all fees and applicable taxes incurred by you or anyone using a 3amia account registered to you. Zenobia AI may revise the pricing for the goods and services offered through the Service at any time. All information that you provide in connection with a purchase or transaction or other monetary transaction interaction with the Service must be accurate, complete, and current. You agree to pay all charges incurred by users of your credit card, debit card, or other payment method used in connection with a purchase or transaction or other monetary transaction interaction with the Service at the prices in effect when such charges are incurred. You will pay any applicable taxes, if any, relating to any such purchases, transactions or other monetary transaction interactions.</Text>
            <Text style={[styles.plan_label]}>10. Payment Processors
            </Text>
            <Text style={[styles.justify, styles.font_14]}>8. Children under age of digital consent</Text>
            <Text style={[styles.justify, styles.font_14]}>We know that children deserve extra privacy protection. That’s why we treat child users differently to ensure their parents are in control and we only collect the bare minimum information we need to make 3amia work.
            When a user creates a 3amia account we collect their age and compare it to the local standard of child online consent depending on the country they registered in. We refer to users under this age as “child users”. Child users are permitted to create a user account but we ask them to provide their parent’s email address instead of their own. We also prevent child users from supplying their own name because we don’t need that information.
            After registration we will send an email notifying the parent about 3amia’s privacy and information practices regarding child users, including what personal data we collect and how we use, share, and protect that personal data. The email also explains how parents can request that Duolingo access, change or delete the personal data about their child.
            </Text>
            <Text style={styles.plan_label}>9. Links</Text>
            <Text style={[styles.justify, styles.font_14]}>The Service may contain links to other websites. We are not responsible for the privacy practices of other websites. We encourage users to be aware when they leave the Service to read the privacy statements of other websites that collect personally identifiable information. This Privacy Policy applies only to information collected by 3amia via the Service.</Text>
            <Text style={styles.plan_label}>10. Information security</Text>
            <Text style={[styles.justify, styles.font_14]}>All financial transactions made in connection with the Service will be processed by a third party in accordance with their respective terms of use, privacy policy, and/or any applicable payment terms and conditions. We encourage you to learn about the practices of such third party. In no event will Zenobia AI be responsible for the actions or inactions of any third party payment processor, including, but not limited to, system downtime or payment service outages.</Text>
            <Text style={styles.plan_label}>11. Refund Policy</Text>
            <Text style={[styles.justify, styles.font_14]}>In the event that Zenobia AI suspends or terminates your use of the Service or these Terms and Conditions or you close your account voluntarily, you understand and agree that you will receive no refund or exchange of any kind, including for any unused virtual currency or other Virtual Item, any Content or data associated with your use of the Service, or for anything else.</Text>
            <Text style={styles.plan_label}>12. Third-Party Links, Sites, and Services</Text>
            <Text style={[styles.justify, styles.font_14]}>The Service may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Zenobia AI. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from 3amia, you understand that these Terms and Conditions and our Privacy Policy do not apply to your use of such sites. You
expressly acknowledge and agree that Zenobia AI shall not be responsible or liable, directly or indirectly, for any damage or loss arising from your use of any third-party website, service, or content.
The Service may include advertisements, which may be targeted to the Content or information on the Service, or other information. The types and extent of advertising by Zenobia AI on the Service are subject to change. In consideration for Zenobia AI granting you access to and use of the Service, you agree that Zenobia AI and its third party providers and partners may place such advertising in connection with the display of content or information submitted by you or others.</Text>
            <Text style={[styles.plan_label]}>13. NO REPRESENTATIONS OR WARRANTIES BY ZENOBIA AI</Text>
            <Text style={[styles.justify, styles.font_14]}>THE SERVICE, INCLUDING ALL IMAGES, AUDIO FILES AND OTHER CONTENT THEREIN, AND ANY OTHER INFORMATION, PROPERTY AND RIGHTS GRANTED OR PROVIDED TO YOU BY ZENOBIA AI ARE PROVIDED TO YOU ON AN “AS IS” BASIS. ZENOBIA AI AND ITS SUPPLIERS MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND WITH RESPECT TO THE SERVICE, EITHER EXPRESS OR IMPLIED, AND ALL SUCH REPRESENTATIONS AND WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT, ARE EXPRESSLY DISCLAIMED. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, ZENOBIA AI DOES NOT MAKE ANY REPRESENTATION OR WARRANTY OF ANY KIND RELATING TO ACCURACY, SERVICE AVAILABILITY, COMPLETENESS, INFORMATIONAL CONTENT, ERROR-FREE OPERATION, RESULTS TO BE OBTAINED FROM USE, OR NON- INFRINGEMENT. ACCESS AND USE OF THE SERVICE MAY BE UNAVAILABLE DURING PERIODS OF PEAK DEMAND, SYSTEM UPGRADES, MALFUNCTIONS OR SCHEDULED OR UNSCHEDULED MAINTENANCE OR FOR OTHER REASONS. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.</Text>
            <Text style={[styles.plan_label]}>14. LIMITATION ON TYPES OF DAMAGES/LIMITATION OF LIABILITY</Text>
            <Text style={[styles.justify, styles.font_14]}>IN NO EVENT WILL ZENOBIA AI BE LIABLE TO YOU OR ANY THIRD PARTY CLAIMING THROUGH YOU (WHETHER BASED IN CONTRACT, TORT, STRICT LIABILITY OR OTHER THEORY) FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES ARISING OUT OF OR RELATING TO THE ACCESS OR USE OF, OR THE INABILITY TO ACCESS OR USE, THE SERVICE OR ANY PORTION THEREOF, INCLUDING BUT NOT LIMITED TO THE LOSS OF USE OF THE SERVICE, INACCURATE RESULTS, LOSS OF PROFITS, BUSINESS INTERRUPTION, OR DAMAGES STEMMING FROM LOSS OR CORRUPTION OF DATA OR DATA BEING RENDERED INACCURATE, THE COST OF RECOVERING ANY DATA, THE COST OF SUBSTITUTE SERVICES OR CLAIMS BY THIRD PARTIES FOR ANY DAMAGE TO COMPUTERS, SOFTWARE, MODEMS, TELEPHONES OR OTHER PROPERTY, EVEN IF ZENOBIA AI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ZENOBIA AI’S LIABILITY TO YOU OR ANY THIRD PARTY CLAIMING THROUGH YOU FOR ANY CAUSE WHATSOEVER, AND REGARDLESS OF THE FORM OF THE ACTION, IS LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO ZENOBIA AI FOR THE SERVICE IN THE 12 MONTHS PRIOR TO THE INITIAL ACTION GIVING RISE TO LIABILITY. THIS IS AN AGGREGATE LIMIT. THE EXISTENCE OF MORE THAN ONE CLAIM HEREUNDER WILL NOT INCREASE THIS LIMIT.</Text>
            <Text style={[styles.plan_label]}>15. Termination</Text>
            <Text style={[styles.justify, styles.font_14]}>Zenobia AI may terminate your access and use of the Service immediately at any time, for any reason, and at such time you will have no further right to use the Service. You may terminate your 3amia account at any time by following the instructions available through the Service. The provisions of these Terms and Conditions relating to the protection and enforcement of Zenobia AI’s proprietary rights, your representations and warranties, disclaimer of representations and warranties, release and indemnities, limitations of liability and types of damages, ownership of data and information, governing law and venue, and miscellaneous provisions shall survive any such termination.</Text>
            <Text style={[styles.plan_label, styles.justify]}>16. Proprietary Rights in Service Content and Activity Materials</Text>
            <Text style={[styles.justify, styles.font_14]}>All content available through the Service, including designs, text, graphics, images, information, software, audio and other files, and their
selection and arrangement (the "Service Content"), are the proprietary property of Zenobia AI or its licensors. No Service Content may be modified, copied, distributed, framed, reproduced, republished, downloaded, scraped, displayed, posted, transmitted, or sold in any form or by any means, in whole or in part, other than as expressly permitted in these Terms and Conditions. You may not use any data mining, robots, scraping or similar data gathering or extraction methods to obtain Service Content. As between you and Zenobia AI, all data, information and materials generated from your access and use of the educational activities made available on or through the Service, including translated content generated by you (collectively, the “Activity Materials”), shall be exclusively owned by Zenobia AI, and you shall not have any right to use such Activity Materials except as expressly authorized by these Terms and Conditions. Activity Materials will not include Translation Materials. By using the Service, you hereby assign to Zenobia AI any and all rights, title and interest, including any intellectual property rights or proprietary rights, in the Activity Materials. All rights of Zenobia AI or its licensors that are not expressly granted in these Terms and Conditions are reserved to Zenobia AI and its licensors.</Text>
            <Text style={[styles.plan_label]}>17. Trademarks</Text>
            <Text style={[styles.justify, styles.font_14]}>“3amia” and all other trademarks, service marks, graphics and logos used in connection with the Service are trademarks or service marks of Zenobia AI or their respective owners, and certain of them are registered with the Jordan Patent and Trademark Office. Access and use of the Service does not grant or provide you with the right or license to reproduce or otherwise use the 3amia name or any 3amia or third- party trademarks, service marks, graphics or logos.</Text>
            <Text style={[styles.plan_label]}>18. Privacy</Text>
            <Text style={[styles.justify, styles.font_14]}>Use of the Service is also governed by our Privacy Policy, a copy of which is located at Privacy Policy in the Aoo. By using the Service, you consent to the terms of the Privacy Policy.</Text>
            <Text style={[styles.plan_label]}>19. Governing Law and Arbitration; No Class Action</Text>
            <Text style={[styles.justify, styles.font_14]}>These Terms and Conditions, its subject matter and Zenobia AI’s and your respective rights under these Terms and Conditions, as well as and any claim, cause of action or dispute (“claim”) arising out of or related to these Terms and Conditions, shall be governed by and construed under the laws of the Hashemite Kingdom of Jordan,
 
 excluding the conflict of law provisions of that or any other jurisdiction, regardless of your country of origin or where you access the Service. ANY DISPUTE OR CLAIM RELATING IN ANY WAY TO THESE TERMS AND CONDITIONS OR THE SERVICE WILL BE RESOLVED BY BINDING ARBITRATION, RATHER THAN IN COURT, except for Zenobia AI’s right to seek injunctive relief as set forth below. Unless otherwise expressly required by applicable law, each party shall bear its own attorneys’ fees without regard to which party is deemed the prevailing party in the arbitration proceeding.
 If you do not want to arbitrate disputes with Zenobia AI and you are an individual, you may opt out of this arbitration agreement by sending an email to contact@zenobiaai.com within 30 days of the day you first access or use the Service.
 If you intend to seek arbitration you must first send written notice to Zenobia AI’s Administration Office of your intent to arbitrate (“Notice”). The Notice to Zenobia AI should be sent by any of the following means: (i) electronic mail to contact@zenobiaai.com; or (ii) sending the Notice by Postal Service certified mail to Zenobia AI, LLC., Attention: Prime Business Centre, Housing Bank Complex, Alshmisani, Amman, Jordan. The Notice must (x) describe the nature and basis of the claim or dispute; and (y) set forth the specific relief sought; and (z) set forth your name, address and contact information. If we intend to seek arbitration against you, we will send any notice of dispute to you at the contact information we have for you.
 The arbitration will be conducted before a neutral single arbitrator in the Hashemite Kingdom of Jordan, whose decision will be final and binding, and the arbitral proceedings will be governed by Hashemite Kingdom of Jordan under its Comprehensive Arbitration Rules and Procedures (the “HKJ Rules”) as modified by these Terms and Conditions. All issues are for the arbitrator to decide, including the scope of this arbitration clause, but the arbitrator is bound by the terms of these Terms and Conditions. If you initiate arbitration, your arbitration fees will be limited to the filing fee set forth in the HKJ Rules. We will reimburse all other HKJ filing, administration and arbitrator fees paid by you, unless the arbitrator determines that the arbitration was frivolous or brought for an improper purpose, in which case the payment of all such fees shall be governed by the HKJ Rules. The arbitration will be conducted in the Arabic language. Judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. For any claim where the potential award is
 
 reasonably likely to be $10,000 or less, either you or Zenobia AI may elect to have the dispute resolved through non-appearance-based arbitration.
 To the fullest extent permitted by applicable law, YOU AND ZENOBIA AI EACH AGREE THAT ANY DISPUTE RESOLUTION PROCEEDING WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED OR REPRESENTATIVE ACTION. If for any reason a claim proceeds in court rather than in arbitration, YOU AND ZENOBIA AI EACH WAIVE ANY RIGHT TO A JURY TRIAL. If a court of competent jurisdiction finds the foregoing arbitration provisions invalid or inapplicable, you and Zenobia AI agree that all claims arising out of or related to these Terms and Conditions must be resolved exclusively by a state or federal court located in the Hashemite Kingdom of Jordan, and you and Zenobia AI each agree to submit to the exercise of personal jurisdiction of such courts for the purpose of litigating all such claims. Notwithstanding the above, you agree that Zenobia AI shall still be allowed to apply for and obtain injunctive remedies (or an equivalent type of urgent legal relief) in any jurisdiction.</Text>
 <Text style={[styles.plan_label]}>20. Language</Text>
 <Text style={[styles.justify, styles.font_14]}>This agreement was originally written in English. To the extent any translated version of this agreement conflicts with the English version, the English version controls.</Text>
 <Text style={[styles.plan_label]}>21. Miscellaneous</Text>
 <Text style={[styles.justify, styles.font_14]}>These Terms and Conditions constitute the entire agreement between Zenobia AI and you concerning the subject matter hereof. In the event that any of the Terms and Conditions are held by a court or other tribunal of competent jurisdiction to be unenforceable, such provisions shall be limited or eliminated to the minimum extent necessary so that these Terms and Conditions shall otherwise remain in full force and effect. A waiver by Zenobia AI or you of any provision of these Terms and Conditions or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof. Zenobia AI may assign its rights or obligations under these Terms and Conditions without condition. These Terms and Conditions will be binding upon and will inure to the benefit of Zenobia AI and you, and Zenobia AI's and your respective successors and permitted assigns.
</Text>
<Text style={[styles.justify, styles.font_14]}>Last revised on June 14th, 2022</Text>
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
  },
});

export default Terms;
