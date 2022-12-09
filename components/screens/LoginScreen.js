import React from "react";
import { View, Image, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import FormInput from '../Buttons/FormInput';
import FormButton from '../Buttons/FormButton';
import SocialButton from '../Buttons/SocialButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

const OnBoardingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/user.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>SocialNet</Text>
            <AntDesign
                    style={styles.iconStyle}
                    name='user'
                    size={25} color='#666'
                    />
            <FormInput
                labelValue="Email"
                placeholderText="Email"
                iconType="user"
            />
            <Button 
                title="Click here"
                onPress={() => alert('Button clicked')}
            />
        </View>
    );
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily:  'Lato-Ragular',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Ragular',
    },
});