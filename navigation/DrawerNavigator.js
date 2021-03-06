import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from "../screens/DrawerContent";
import {NavigationContainer} from "@react-navigation/native";
import AppTabs from "./AppTabs";
import SupportStack from "./SupportStack";
import SettingsStack from "./SettingsStack";
import FavouritesStack from "./FavouritesStack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
                <Drawer.Screen name="Root" component={AppTabs}/>
                <Drawer.Screen name="Support" component={SupportStack}/>
                <Drawer.Screen name="Settings" component={SettingsStack}/>
                <Drawer.Screen name="Favourites" component={FavouritesStack}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default DrawerNavigator;
