import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

import OnBoardingScreen from '../components/screens/OnBoardingScreen';
import LoginScreen from '../components/screens/LoginScreen';
import SignupScreen from '../components/screens/SignupScreen';

const AppStack = createStackNavigator();
let routeName;
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
        routeName = 'Onboarding';
    } else {
        routeName = 'Login';
    }

    return (
        <AppStack.Navigator
            initialRouteName={routeName}
        >
            <AppStack.Screen name="Onboarding" component=
            {OnBoardingScreen} />
            <AppStack.Screen name="Login" component={LoginScreen} />
            <AppStack.Screen
                name="Signup"
                component={SignupScreen}
                options={({navigation}) => ({
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        // shadowColor: '#f9fafd', // IOS
                        elevation: 0, // Android
                    },
                    headerLeft: () => (
                        <View style={{marginLeft: 10}}>
                            <FontAwesome.Button 
                                name="long-arrow-left"
                                size={25}
                                backgroundColor="#f9fafd"
                                color="#333"
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                ),
                })}
            />
        </AppStack.Navigator>
    );
}