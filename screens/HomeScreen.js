import React, {useContext, useEffect, useState} from "react";
import {Text, View, StyleSheet, StatusBar} from "react-native";
import {AuthContext} from "../navigation/AuthProvider";
import {hideNavigationBar} from "react-native-navigation-bar-color";
import SearchBar from "../components/SearchBar";
import {ScrollView} from "react-native-gesture-handler";


const HomeScreen = () => {
    useEffect(() => {
        getUserData();
        hideNavigationBar();
    }, []);

    const {userName, getUserData} = useContext(AuthContext);

    const cropName = (name) => {
        return name.split(" ")[0];
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Hello, {cropName(userName)}.</Text>
            <Text style={styles.title}>What would you</Text>
            <Text style={styles.title}>like to eat?</Text>
            <SearchBar></SearchBar>
        </ScrollView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        padding: 30
    },
    title: {
        fontSize: 25,
        color: "#333333",
        fontFamily: 'Lato-Italic',
        fontWeight: "bold",
        lineHeight: 35,
        letterSpacing: 2
    },
});
