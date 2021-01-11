import React, {useContext, useEffect} from "react";
import {Text, View, StyleSheet} from "react-native";
import {AuthContext} from "../navigation/AuthProvider";
import {hideNavigationBar} from "react-native-navigation-bar-color";

const SettingsScreen = () => {
    useEffect(() => {
        hideNavigationBar();
    }, []);

    const {user, logout} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings</Text>
        </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 20,
        color: "#333333"
    }
});
