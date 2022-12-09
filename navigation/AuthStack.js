import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnBoardingScreen from '../components/screens/OnBoardingScreen';
import LoginScreen from '../components/screens/LoginScreen';

const AppStack = createStackNavigator();

export default function AuthStack() {
    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value === null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, []);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch === true) {
        return (
            <AppStack.Navigator
                headerShown="false"
            >
                <AppStack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
                <AppStack.Screen name="Login" component={LoginScreen} />
            </AppStack.Navigator>
        );
    } else {
        return <LoginScreen />
    }
}