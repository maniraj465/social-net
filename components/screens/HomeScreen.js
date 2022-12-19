import React, { useState } from 'react';
import  { View, Text, StyleSheet } from 'react_native';
import FormButton from '../Buttons/FormButton';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            <FormButton buttonTitle='Logout' onPress={() => {}} />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 30,
        color: '#051d5f',
    },
});