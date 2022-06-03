import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../app/screens/Login';
import SignUp from '../app/screens/SignUp';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import MainMenu from '../app/screens/MainMenu';
import ProfileMenu from '../app/screens/ProfileMenu';
import OTPEmailVerification from '../app/screens/OTPEmailVerification.js';
import PlansScreen from '../app/screens/PlansScreen.js';
import FreeTrialPlan from '../app/screens/FreeTrialPlan.js';
import AMonthTrialPlan from '../app/screens/AMonthTrialPlan.js';
import ThreeMonthsPlan from '../app/screens/ThreeMonthsPlan.js';
import SixMonthsPlan from '../app/screens/SixMonthsPlan.js';
import TwelveMonthsPlan from '../app/screens/TwelveMonthsPlan.js';
import PlanPayment from '../app/screens/PlanPayment.js';
import PaymentOTPVerification from '../app/screens/PymentOTPVerification.js';
import UpdateProfile from '../app/screens/UpdateProfile.js';
import LearningTrack from '../app/screens/LearningTrack.js';
import InviteFriend from '../app/screens/InviteFriend.js';
import TranslateWord from '../app/screens/TranslateWord.js';
import Words from '../app/screens/Words.js';
import WordsQuiz from '../app/screens/WordsQuiz.js';
import Sentence from '../app/screens/Sentence.js';
import UserDefinedWord from '../app/screens/UserDefinedWord.js';
import Alphabets from '../app/screens/Alphabets.js';
import SingleAlphabet from '../app/screens/SignleAlphabet.js';
import LearningMenu from '../app/screens/LearningMenu';

const RootStack = createNativeStackNavigator();

export default function RootStackNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Group screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}>
                
                <RootStack.Screen name="Welcome" component={WelcomeScreen}/>
                <RootStack.Screen name="MainMenu" component={MainMenu} />
                <RootStack.Screen name="Signup" component={SignUp} />
                <RootStack.Screen name="Login" component={Login} />
                <RootStack.Screen name="ProfileMenu" component={ProfileMenu} />
                <RootStack.Screen name="LearningMenu" component={LearningMenu} />
                <RootStack.Screen name="Email Verification" component={OTPEmailVerification} />
                <RootStack.Screen name="Plans" component={PlansScreen} />
                <RootStack.Screen name="Free Trial Plan" component={FreeTrialPlan} />
                <RootStack.Screen name="1 Month Plan" component={AMonthTrialPlan} />
                <RootStack.Screen name="3 Months Plan" component={ThreeMonthsPlan} />
                <RootStack.Screen name="6 Months Plan" component={SixMonthsPlan} />
                <RootStack.Screen name="12 Months Plan" component={TwelveMonthsPlan} />
                <RootStack.Screen name="Plan Payment" component={PlanPayment} />
                <RootStack.Screen name="Payment Verification" component={PaymentOTPVerification} />
                <RootStack.Screen name="Update Profile" component={UpdateProfile} />
                <RootStack.Screen name="Learning Track" component={LearningTrack} />
                <RootStack.Screen name="Invite A Friend" component={InviteFriend} />
                <RootStack.Screen name="Signle Alphabet" component={SingleAlphabet} /> 
                <RootStack.Screen name="Words" component={Words} />
                <RootStack.Screen name="Words Quiz" component={WordsQuiz} />
                <RootStack.Screen name="Sentences" component={Sentence} /> 
                <RootStack.Screen name="Add User-defined Word" component={UserDefinedWord} /> 
                <RootStack.Screen name="Alphabets" component={Alphabets} /> 
                <RootStack.Screen name="Translate Word" component={TranslateWord} />       
            </RootStack.Group>
            {/* <RootStack.Group screenOptions={{ presentation: 'modal', headerShown: false, animation: 'slide_from_bottom' }}>
                <RootStack.Screen name="Login" component={Login} />
                <RootStack.Screen name="Signup" component={SignUp} />
            </RootStack.Group> */}
        </RootStack.Navigator>
    );
}