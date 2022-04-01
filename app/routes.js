import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen.js'
import SignUp from './screens/SignUp.js'
import Login from './screens/Login.js';
import OTPEmailVerification from './screens/OTPEmailVerification.js';
import PlansScreen from './screens/PlansScreen.js';
import FreeTrialPlan from './screens/FreeTrialPlan.js';
import AMonthTrialPlan from './screens/AMonthTrialPlan.js';
import ThreeMonthsPlan from './screens/ThreeMonthsPlan.js';
import SixMonthsPlan from './screens/SixMonthsPlan.js';
import TwelveMonthsPlan from './screens/TwelveMonthsPlan.js';
import PlanPayment from './screens/PlanPayment.js';
import PaymentOTPVerification from './screens/PymentOTPVerification.js';
import UpdateProfile from './screens/UpdateProfile.js';
import LearningTrack from './screens/LearningTrack.js';
import InviteFriend from './screens/InviteFriend.js';
import TranslateWord from './screens/TranslateWord.js';
import Words from './screens/Words.js';
import WordsQuiz from './screens/WordsQuiz.js';
import Sentence from './screens/Sentence.js';
import UserDefinedWord from './screens/UserDefinedWord.js';
import Alphabets from './screens/Alphabets.js';
import SingleAlphabet from './screens/SignleAlphabet.js';

const Stack = createNativeStackNavigator();

const Routes = () => (
   <NavigationContainer>
   <Stack.Navigator>
     {/* <Stack.Screen
       name="Welcome"
       component={WelcomePage}
     />
     <Stack.Screen 
         name="Sign Up" 
         component={SignUp}
      />
      <Stack.Screen
         name="Login"
         component={Login}
      />
      <Stack.Screen
         name="Email Verification"
         component={OTPEmailVerification}
      />
      <Stack.Screen
         name="Plans"
         component={PlansScreen}
      />
      <Stack.Screen
         name="Free Trial Plan"
         component={FreeTrialPlan}
      />
      <Stack.Screen
         name="1 Month Plan"
         component={AMonthTrialPlan}
      />
      <Stack.Screen
         name="3 Months Plan"
         component={ThreeMonthsPlan}
      />
      <Stack.Screen
         name="6 Months Plan"
         component={SixMonthsPlan}
      />
      <Stack.Screen
         name="12 Months Plan"
         component={TwelveMonthsPlan}
      />
      <Stack.Screen
         name="Plan Payment"
         component={PlanPayment}
      />
      <Stack.Screen
         name="Payment Verification"
         component={PaymentOTPVerification}
      />
      <Stack.Screen
         name="Update Profile"
         component={UpdateProfile}
      />
      <Stack.Screen
         name="Learning Track"
         component={LearningTrack}
      />
      <Stack.Screen
         name="Invite A Friend"
         component={InviteFriend}
      />
      <Stack.Screen
         name="Translate Word"
         component={TranslateWord}
      />
      <Stack.Screen
         name="Words"
         component={Words}
      />
      <Stack.Screen
         name="Words Quiz"
         component={WordsQuiz}
      />
      <Stack.Screen
         name="Sentences"
         component={Sentence}
      />
      <Stack.Screen
         name="Add User-defined Word"
         component={UserDefinedWord}
      />
      <Stack.Screen
         name="Alphabets"
         component={Alphabets}
      />
      <Stack.Screen
         name="Signle Alphabet"
         component={SingleAlphabet}
      /> */}
      <Stack.Screen
         name="Menu"
         component={MainMenu}
      />
   </Stack.Navigator>
 </NavigationContainer>
)
export default Routes