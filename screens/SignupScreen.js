import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet, Alert} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {ScrollView} from "react-native-gesture-handler";
import {windowHeight, windowWidth} from "../utils/Dimensions";
import {AuthContext} from '../navigation/AuthProvider';
import * as Animatable from "react-native-animatable";

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const {register} = useContext(AuthContext);

    const [data, setData] = React.useState({
        isValidUser: true,
        isValidPassword: true,
        isValidConfirmedPassword: true,
        isExistingErrors: false
    });

    const {login} = useContext(AuthContext);

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleValidUser = (value) => {
        if ((value.trim().length >= 4) && validateEmail(value)){
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const validatePassword = (pw) => {
        return /[A-Z]/       .test(pw) &&
            /[a-z]/       .test(pw) &&
            /[^A-Za-z0-9]/.test(pw)
    }

    const handleValidPassword = (value) => {
        if ((value.trim().length >= 6) && validatePassword(value)){
            setData({
                ...data,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                isValidPassword: false
            });
        }
    }

    const handleRegister = () => {
        if (data.isValidPassword && data.isValidUser && data.isValidConfirmedPassword && email && password && confirmPassword) {
            setData({
                ...data,
                isExistingErrors: false
            });
            register(email, password);
        }
        else {
            setData({
                ...data,
                isExistingErrors: true
            });
        }
    }

    const handleErrorMsg = () => {
        Alert.alert(
            "Incorrect Data",
            'Make sure you have no input errors before proceeding further!',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
        setData({
            ...data,
            isExistingErrors: false
        });
    }

    const checkPasswordsAreEqual = (currentPw, confPw) => {
        if (currentPw === confPw){
            setData({
                ...data,
                isValidConfirmedPassword: true
            });
        } else {
            setData({
                ...data,
                isValidConfirmedPassword: false
            });
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {data.isExistingErrors ? handleErrorMsg() : null}

            <Text style={styles.text}>Create an account</Text>

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => {
                    setEmail(userEmail);
                    handleValidUser(userEmail)}
                    }
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            {data.isValidUser ? null :
                <Animatable.View animation="fadeInLeft" duration={500} style={styles.errorMsgContainer}>
                    <Text style={styles.errorMsg}>The email address is not a valid one</Text>
                </Animatable.View>
            }

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => {
                    setPassword(userPassword);
                    handleValidPassword(userPassword);
                    }
                }
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
                onEndEditing={() => checkPasswordsAreEqual(password, confirmPassword)}
            />
            {data.isValidPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={500} style={styles.errorMsgContainer}>
                    <Text style={styles.errorMsg}>Invalid password! Should contain at least 6 characters, a special character and an uppercase letter</Text>
                </Animatable.View>
            }

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => {
                    setConfirmPassword(userPassword);
                    checkPasswordsAreEqual(password, userPassword);
                }}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />
            {data.isValidConfirmedPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={500} style={styles.errorMsgContainer}>
                    <Text style={styles.errorMsg}>The passwords aren't the same</Text>
                </Animatable.View>
            }

            <FormButton
                buttonTitle="Sign Up"
                onPress={() => handleRegister()}
            />

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Have an account? <Text style={styles.navButtonTextBold}>Sign
                    In</Text></Text>
            </TouchableOpacity>
        </ScrollView>

    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fFF',
        height: windowHeight
    },
    logo: {
        height: 140,
        width: 140,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginTop: 45,
        marginBottom: 35,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 30,
        marginBottom: 40
    },
    navButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#888',
        fontFamily: 'Lato-Regular',
    },
    navButtonTextBold: {
        fontSize: 16,
        color: '#777',
        fontFamily: 'Lato-Bold',
    },
    errorMsgContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: windowWidth/1.12,
    },
    errorMsg: {
        color: '#de4d41',
        fontWeight: "bold",
        fontSize: 12,
        fontFamily: 'space-mono',

    }
});
