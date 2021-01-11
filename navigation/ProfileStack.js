import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import {View} from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfileScreen from '../screens/EditProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import SupportStack from "./SupportStack";
import SettingsStack from "./SettingsStack";
import FavouritesStack from "./FavouritesStack";
import SupportScreen from "../screens/SupportScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

const AppStack = createStackNavigator();

const ProfileStack = ({navigation}) => {
    return (
        <AppStack.Navigator
            initialRouteName={'Profile'}
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
                name="Profile"
                component={ProfileScreen}
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
                            <MaterialCommunityIcons.Button
                                name="account-edit"
                                size={25}
                                backgroundColor='#8ec140'
                                onPress={() => navigation.navigate('EditProfile')}
                            />
                        </View>
                    ),
                }}
            />
            <AppStack.Screen
                name="EditProfile"
                options={{
                    title: 'Edit Profile',
                    headerRight: () => (
                        <View style={{marginRight: 10}}>
                        </View>
                    ),
                }}
                component={EditProfileScreen}
            />
            <AppStack.Screen
                name="Support"
                options={{
                    title: 'Support',
                    headerRight: () => (
                        <View style={{marginRight: 10}}>
                        </View>
                    ),
                }}
                component={SupportScreen}
            />
            <AppStack.Screen
                name="Settings"
                options={{
                    title: 'Setting',
                    headerRight: () => (
                        <View style={{marginRight: 10}}>
                        </View>
                    ),
                }}
                component={SettingsScreen}
            />
            <AppStack.Screen
                name="Favourites"
                options={{
                    title: 'Favourites',
                    headerRight: () => (
                        <View style={{marginRight: 10}}>
                        </View>
                    ),
                }}
                component={FavouritesScreen}/>
        </AppStack.Navigator>
    );

};

export default ProfileStack;
