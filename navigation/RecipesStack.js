import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import RecipesScreen from "../screens/RecipesScreen";
import {View} from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";

const AppStack = createStackNavigator();

const RecipesStack = ({navigation}) => {
    return (
        <AppStack.Navigator
            initialRouteName={'Recipes'}
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
                name="Recipes"
                component={RecipesScreen}
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

export default RecipesStack;
