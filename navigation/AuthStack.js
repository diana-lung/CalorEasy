import useCachedResources from "../hooks/useCachedResources";
import React, {useEffect, useState} from "react";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import {createStackNavigator} from "@react-navigation/stack";
import SignupScreen from "../screens/SignupScreen";
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin } from '@react-native-community/google-signin';

const AppStack = createStackNavigator();

const AuthStack = () => {
    const isLoadingComplete = useCachedResources();
    let routeName;
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);

    // make sure the onboarding screen is shown only when the application is launched for the first time

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });

        GoogleSignin.configure({
            webClientId: '816469252822-5dkfhphh7ulm3kulrd3b0bi94642hqg6.apps.googleusercontent.com',
        });

    }, []);

    if (!isLoadingComplete) {
        return null;
    } else if (isFirstLaunch) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Login';
    }

    return (
        <AppStack.Navigator initialRouteName={routeName} >
            <AppStack.Screen name="Onboarding"
                             component={OnboardingScreen}
                             options={{header: () => null}}
            />
            <AppStack.Screen name="Login"
                             component={LoginScreen}
                             options={{header: () => null}}
            />
            <AppStack.Screen name="Signup"
                             component={SignupScreen}
                             options={{ title: 'SIGN UP',headerStyle: {
                                     backgroundColor: '#8ec140'
                                 } , headerTintColor: '#fff'}}
            />
        </AppStack.Navigator>
    );

};

export default AuthStack;
