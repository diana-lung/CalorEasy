import React, {useContext, useEffect} from "react";
import {Text, View, StyleSheet} from "react-native";
import {hideNavigationBar} from "react-native-navigation-bar-color";

const MealScreen = () => {
    useEffect(() => {
        hideNavigationBar();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Meal</Text>
        </View>
    );
}

export default MealScreen;

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
