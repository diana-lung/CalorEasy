import React, {useContext, useEffect} from "react";
import {Text, View, StyleSheet, StatusBar} from "react-native";
import {AuthContext} from "../navigation/AuthProvider";
import {hideNavigationBar} from "react-native-navigation-bar-color";
import firestore from '@react-native-firebase/firestore';
import SearchBar from "../components/SearchBar";
import {ScrollView} from "react-native-gesture-handler";

const HomeScreen = () => {
    useEffect(() => {
        hideNavigationBar();
    }, []);

    const cropName = (name) => {
        return name.split(" ")[0];
    }

    let name = 'Diana Lung';

    const db = firestore();

    const {user, logout} = useContext(AuthContext);
    // const usersCollection = firestore().collection('Users').get();

    const getUserData = async () => {
        // try {
        //     await db.collection('recipes')
        //         .get()
        //         .then((snapshot) => {
        //             console.log(snapshot.docs);
        //         })
        // } catch (e) {
        //     console.log(e);
        // }
        // console.log(usersCollection);

    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Hello, {cropName(name)}.</Text>
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
