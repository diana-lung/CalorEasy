import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet, Image} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {ScrollView} from "react-native-gesture-handler";
import {windowHeight} from "../utils/Dimensions";
// import {AuthContext} from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    // const {register} = useContext(AuthContext);


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Create an account</Text>

            <FormInput
                labelValue={email}
                // onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                // onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormInput
                labelValue={confirmPassword}
                // onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign Up"
                // onPress={() => register(email, password)}
            />

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Have an account? <Text style={styles.navButtonTextBold}>Sign In</Text></Text>
            </TouchableOpacity>

            {Platform.OS === 'android' ? (
                <View>
                    <SocialButton
                        buttonTitle="Sign Up with Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        borderColor="#4867aa"
                        // onPress={() => {}}
                    />

                    <SocialButton
                        buttonTitle="Sign Up with Google"
                        btnType="google"
                        color="#de4d41"
                        borderColor="#de4d41"
                        // onPress={() => {}}
                    />
                </View>
            ) : null}
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
});
