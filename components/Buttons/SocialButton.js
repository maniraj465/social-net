import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { windowHeight, windowWidth } from '../../utils/Dimentions'

export default function SocialButton({buttonTitle, buttonType, color, backgroundColor, ...rest}) {
    return (
        <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: backgroundColor}]} {...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome name={buttonType} style={styles.icon} size={22} color={color} />
            </View>
            <View style={styles.buttonTextWrapper}>
                <Text style={[styles.buttonText, {color: color }]}>buttonTitle</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold',
    },
    buttonTextWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Ragular',
    },
});