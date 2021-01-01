import useCachedResources from "../hooks/useCachedResources";
import React, {useEffect} from "react";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import {createStackNavigator} from "@react-navigation/stack";
import SignupScreen from "../screens/SignupScreen";
import AsyncStorage from '@react-native-community/async-storage';

const AppStack = createStackNavigator();

const AuthStack = () => {
    const isLoadingComplete = useCachedResources();
    let routeName;

    // make sure the onboarding screen is shown only when the application is launched for the first time
    const [isFirstLaunch, setIsFirstLaunch] = React.useState(true);
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', "true");
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(true);
                // setIsFirstLaunch(true) // comment this and uncomment the previous line in order to see the onboarding screen just once
            }
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
