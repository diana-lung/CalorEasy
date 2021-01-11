import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStack from "./HomeStack";
import RecipesStack from "./RecipesStack";
import MealStack from "./MealStack";
import ProfileStack from "./ProfileStack";

const Tab = createMaterialBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            shifting={true}
            backBehavior="history"
            inactiveColor="rgba(255, 255, 255, 0.6)"
            barStyle={{height: 60, backgroundColor: '#8ec140'}}
        >
            <Tab.Screen
                name='Home'
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#8ec140',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Recipes"
                component={RecipesStack}
                options={{
                    tabBarLabel: 'Recipes',
                    tabBarColor: '#8ec140',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="noodles" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="MealPlanner"
                component={MealStack}
                options={{
                    tabBarLabel: 'Planner',
                    tabBarColor: '#8ec140',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="clipboard-text" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="UserProfile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#8ec140',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


export default AppTabs;
