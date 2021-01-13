import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import RecipesScreen from "../screens/RecipesScreen";
import {View} from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";

const AppStack = createStackNavigator();

const RecipesStack = ({navigation}) => {
    return (
        <AppStack.Navigator
            initialRouteName={'Recipes'}
            screenOptions={{

            }}
        >
            <AppStack.Screen
                name="Recipes"
                component={RecipesScreen}
                options={{
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
                    },
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
            <AppStack.Screen
                name="Recipe Details"
                component={RecipeDetailsScreen}
                options={{
                    title: '',
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },

                    headerTitleStyle: {
                        fontSize: 20,
                        color:'#fff'
                    },
                    headerTitleContainerStyle: {
                        alignContent: 'center',
                        alignItems: 'center'
                    },
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
