import React from "react";
import { Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({ navigation }) => {
    return (
        <Onboarding style={styles.container}
            onSkip = {() => navigation.replace('Login')}
            onDone = {() => navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#00bcd4',
                    image: <Image
                                source = {require('../../assets/images/leadership.png')} 
                                style={{ width: 300, height: 300 }}
                                />,
                    title: 'SocialNet',
                    subtitle: 'Welcome to SocialNet!',
                },
                {
                    backgroundColor: '#9c27b0',
                    image: <Image
                                source={require('../../assets/images/traintracks.png')}
                                style={{ width: 300, height: 100 }}
                                />,
                    title: 'Connect with people',
                    subtitle: 'You are on the right track.',
                },
                {
                    backgroundColor: '#e91e63',
                    image: <Image
                                source={require('../../assets/images/train.png')}
                                style={{ width: 310, height: 110 }}
                                />,
                    title: 'Onboarding',
                    subtitle: 'Let\'s start the journey...',
                },
            ]}
        />
    );
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});