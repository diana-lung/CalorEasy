import React from "react";
import Routes from "./Routes";
import {AuthProvider} from "./AuthProvider";
import {StatusBar} from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';

const Providers = () => {
    return (
        <PaperProvider>
        <AuthProvider>
            <StatusBar translucent backgroundColor="transparent" />
            <Routes/>
        </AuthProvider>
        </PaperProvider>
    );
};

export default Providers;
