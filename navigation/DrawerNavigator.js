import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from "../screens/DrawerContent";
import {NavigationContainer} from "@react-navigation/native";
import AppTabs from "./AppTabs";
import SettingsStack from "./SettingsStack";
import FavouritesStack from "./FavouritesStack";
import {hideNavigationBar} from "react-native-navigation-bar-color";
import OnboardingScreen2 from "../screens/OnboardingScreen2";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    useEffect(() => {
        hideNavigationBar();
    }, []);

    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
                <Drawer.Screen name="Root" component={AppTabs}/>
                <Drawer.Screen name="Support" component={OnboardingScreen2}/>
                <Drawer.Screen name="Settings" component={SettingsStack}/>
                <Drawer.Screen name="Favourites" component={FavouritesStack}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default DrawerNavigator;
