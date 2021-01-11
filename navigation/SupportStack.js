import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {View} from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";
import SupportScreen from "../screens/SupportScreen";

const AppStack = createStackNavigator();

const SupportStack = ({navigation}) => {
    return (
        <AppStack.Navigator
            initialRouteName={'Support'}
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#8ec140',
                    height: 85,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontSize: 20,
                },
                headerTitleContainerStyle: {
                    alignContent: 'center',
                    alignItems: 'center'
                }
            }}
        >
            <AppStack.Screen
                name="Support"
                component={SupportScreen}
                options={{
                    headerLeft: () => (
                        <View style={{marginLeft: 10}}>
                            <Icon.Button
                                name="ios-menu"
                                size={25}
                                backgroundColor='#8ec140'
                                // color={colors.text}
                                onPress={() => navigation.openDrawer()}
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{marginRight: 10}}>
                        </View>
                    ),
                }}
            />
        </AppStack.Navigator>
    );

};

export default SupportStack;
