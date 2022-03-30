import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../app/screens/Login';
import SignUp from '../app/screens/SignUp';
import WelcomeScreen from '../app/screens/WelcomeScreen';

const RootStack = createNativeStackNavigator();

export default function RootStackNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Group screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}>
                <RootStack.Screen name="Login" component={Login} />
                <RootStack.Screen name="Signup" component={SignUp} />
                <RootStack.Screen name="Welcome" component={WelcomeScreen}/>
            </RootStack.Group>
            {/* <RootStack.Group screenOptions={{ presentation: 'modal', headerShown: false, animation: 'slide_from_bottom' }}>
                <RootStack.Screen name="Login" component={Login} />
                <RootStack.Screen name="Signup" component={SignUp} />
            </RootStack.Group> */}
        </RootStack.Navigator>
    );
}