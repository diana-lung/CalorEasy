import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {View} from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";
import FavouritesScreen from "../screens/FavouritesScreen";

const AppStack = createStackNavigator();

const FavouritesStack = ({navigation}) => {
    return (
        <AppStack.Navigator
            initialRouteName={'Favourites'}
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
                name="Favourites"
                component={FavouritesScreen}
                options={{
                    headerLeft: () => (
                        <View style={{marginLeft: 10}}>
                            <Icon.Button
                                name="ios-menu"
                                size={25}
                                backgroundColor='#8ec140'
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

export default FavouritesStack;
