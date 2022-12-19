import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FormInput from '../Buttons/FormInput';
import FormButton from '../Buttons/FormButton';
import SocialButton from '../Buttons/SocialButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/user.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>SocialNet</Text>
            <FormInput
                onChangeText={(userEmail) => setEmail(userEmail)}
                labelValue={email}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                onChangeText={(userPassword) => setPassword(userPassword)}
                labelValue={password}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton 
                buttonTitle="Sign In"
                onPress={() =>alert("Sign In Clicked!")}
            />
            <TouchableOpacity 
                style={styles.forgotButton}
                onPress={() => {}}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
            <SocialButton
                buttonTitle="Sign In with Facebook"
                buttonType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => alert("Sign In with Facebook")}
            />
            <SocialButton
                buttonTitle="Sign In with Google"
                buttonType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => alert("Sign In with Google")}
            />
            <TouchableOpacity
                style={styles.signup}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        height: 95,
        width: 95,
        resizeMode: 'cover',
    },
    text: {
        // fontFamily:  'Lato-Ragular',
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
    signup: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e64e5',
        // fontFamily: 'Lato-Ragular',
    },
});