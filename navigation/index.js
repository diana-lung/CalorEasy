import React, {useEffect} from "react";
import Routes from "./Routes";
import {AuthProvider} from "./AuthProvider";
import {StatusBar, View} from "react-native";

const Providers = () => {
    return (
        <AuthProvider>
            <StatusBar translucent backgroundColor="transparent" />
            <Routes/>
        </AuthProvider>
    );
};

export default Providers;
