import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import React from "react";

const Routes = () => {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    );
};

export default Routes;
