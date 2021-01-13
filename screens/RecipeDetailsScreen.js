import React, {useContext, useEffect} from "react";import {Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";import {AuthContext} from "../navigation/AuthProvider";import {hideNavigationBar} from "react-native-navigation-bar-color";import RecipeHeader from "../components/RecipeHeader";import RecipeIngredients from "../components/RecipeIngredientsList";import RecipeDescription from "../components/RecipeDescription";const RecipeDetailsScreen = () => {    useEffect(() => {        hideNavigationBar();    }, []);    const {currentRecipe} = useContext(AuthContext);    return (        <SafeAreaView style={styles.container}>            <ScrollView showsVerticalScrollIndicator={false}>                <RecipeHeader                    recipe={currentRecipe}                    title={currentRecipe.title}                    calories={currentRecipe.calories}                    time={currentRecipe.time}                    imageUrl={currentRecipe.pictureURL}                />                <RecipeIngredients                    ingredients={currentRecipe.ingredients}                />                <RecipeDescription                    instructions={currentRecipe.instructions}                />            </ScrollView>        </SafeAreaView>    );}export default RecipeDetailsScreen;const styles = StyleSheet.create({    container: {        backgroundColor: '#f9fafd',        marginTop:-90    },    heartIcon: {    }});