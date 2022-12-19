import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@react-navigation/stack';

const AppStack = createStackNavigator();

export default function AppStack() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={HomeScreen} />
        </AppStack.Navigator>
    );

    
}