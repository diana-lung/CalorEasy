import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet, Alert,
} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from "../components/FormInput";
import {ScrollView} from "react-native-gesture-handler";
import SocialButton from "../components/SocialButton";
import {windowHeight, windowWidth} from "../utils/Dimensions";
import {AuthContext} from '../navigation/AuthProvider';
import * as Animatable from 'react-native-animatable';


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [data, setData] = React.useState({
        isValidUser: true,
        isValidPassword: true,
        isExistingErrors: false
    });

    const {login, googleLogin, fbLogin} = useContext(AuthContext);

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

    const handleLogin = () => {
        if (data.isValidPassword && data.isValidUser && email && password) {
            setData({
                ...data,
                isExistingErrors: false
            });
            login(email, password);
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

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/images/icon.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>CalorEasy App</Text>

            {data.isExistingErrors ? handleErrorMsg() : null}

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
                    handleValidPassword(userPassword)}
                }
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />
            {data.isValidPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={500} style={styles.errorMsgContainer}>
                    <Text style={styles.errorMsg}>Invalid password! Should contain at least 6 characters, a special character and an uppercase letter.</Text>
                </Animatable.View>
            }
            <FormButton
                buttonTitle="Sign In"
                onPress={() => handleLogin()}
            />

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>
                    Don't have an account?  <Text style={styles.navButtonTextBold}>Create here</Text>
                </Text>
            </TouchableOpacity>

            {Platform.OS === 'android' ? (
                <View>
                    <SocialButton
                        buttonTitle="Sign In with Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        borderColor="#4867aa"
                        onPress={() => fbLogin()}
                    />

                    <SocialButton
                        buttonTitle="Sign In with Google"
                        btnType="google"
                        color="#de4d41"
                        borderColor="#de4d41"
                        onPress={() => googleLogin()}
                    />
                </View>
            ) : null}


        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#fFF',
        height: windowHeight
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#3f3d56',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#888',
        fontFamily: 'Lato-Regular',
    },
    navButtonTextBold: {
        fontSize: 16,
        color: '#696969',
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

