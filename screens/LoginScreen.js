import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from "../components/FormInput";
import {ScrollView} from "react-native-gesture-handler";
import SocialButton from "../components/SocialButton";
import {windowHeight} from "../utils/Dimensions";
// import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // const {login, googleLogin, fbLogin} = useContext(AuthContext);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/images/icon.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>CalorEasy App</Text>

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

            <FormButton
                buttonTitle="Sign In"
                onPress={() => {
                }}
                // onPress={() => login(email, password)}
            />

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>
                    Don't have an acount?  <Text style={styles.navButtonTextBold}>Create here</Text>
                </Text>
            </TouchableOpacity>

            {Platform.OS === 'android' ? (
                <View>
                    <SocialButton
                        buttonTitle="Sign In with Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        borderColor="#4867aa"
                        // onPress={() => fbLogin()}
                    />

                    <SocialButton
                        buttonTitle="Sign In with Google"
                        btnType="google"
                        color="#de4d41"
                        borderColor="#de4d41"
                        // onPress={() => googleLogin()}
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
    }
});

