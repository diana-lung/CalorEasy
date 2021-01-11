import React, {useContext, useEffect} from "react";
import {Text, View, StyleSheet, StatusBar} from "react-native";
import FormButton from "../components/FormButton";
import {AuthContext} from "../navigation/AuthProvider";
import {hideNavigationBar} from "react-native-navigation-bar-color";
import firestore from '@react-native-firebase/firestore';


const AddProfileDataScreen = () => {
    useEffect(() => {
        hideNavigationBar();
    }, []);

    const {user, logout} = useContext(AuthContext);

    const addUserData = async () => {
        // firestore()
        //     .collection('users')
        //     .add({
        //         user
        //     })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {user.uid}</Text>
            <FormButton
                buttonTitle="AddData"
                onPress={() => addUserData()}
            />
        </View>
    );
}

export default AddProfileDataScreen;

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
