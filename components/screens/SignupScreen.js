import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FormInput from '../Buttons/FormInput';
import FormButton from '../Buttons/FormButton';
import SocialButton from '../Buttons/SocialButton';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>
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
            <FormInput
                onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
                labelValue={confirmPassword}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton 
                buttonTitle="Sign Up"
                onPress={() =>alert("Sign Up Clicked!")}
            />
            <View style={styles.textTerms}>
                <Text style={styles.colorTextTerms}> By registering, you confirm that you accept our </Text>
                <TouchableOpacity>
                    <Text style={styles.colorTextTermsLink}> Terms of service </Text>
                </TouchableOpacity>
                <Text style={styles.colorTextTerms}> and </Text>
                <TouchableOpacity>
                    <Text style={styles.colorTextTermsLink}> privacy policy.</Text>
                </TouchableOpacity>
            </View>
            <SocialButton
                buttonTitle="Sign Up with Facebook"
                buttonType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => alert("Sign In with Facebook")}
            />
            <SocialButton
                buttonTitle="Sign Up with Google"
                buttonType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => alert("Sign In with Google")}
            />
            <TouchableOpacity
                style={styles.signin}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Already have an account? Sign In here</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
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
    navButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e64e5',
        // fontFamily: 'Lato-Ragular',
    },
    signin: {
        marginVertical: 35,
    },
    textTerms: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    colorTextTerms: {
        fontSize: 13,
        fontWeight: '400',
        // fontFamily: 'Lato-Ragular',
        color: 'grey',
    },
    colorTextTermsLink: {
        fontSize: 13,
        fontWeight: '400',
        // fontFamily: 'Lato-Ragular',
        color: '#2e64e5',
    },
});