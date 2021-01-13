import React, {useContext, useEffect, useState} from "react";
import {Text, View, StyleSheet,SafeAreaView, ScrollView, FlatList} from "react-native";
import {hideNavigationBar} from "react-native-navigation-bar-color";
import RecipeCard from "../components/RecipeCard";
import db from "../utils/DatabaseConfig";
import {AuthContext} from "../navigation/AuthProvider";


const RecipesScreen = ({navigation}) => {
    useEffect(() => {
        hideNavigationBar();
        getRecipes();
    }, []);

    const [recipes, setRecipes] = useState([]);
    const {currentRecipe, setCurrentRecipe} = useContext(AuthContext);


    const getRecipes = async () => {
       await db.collection('recipes').get()
           .then(querySnapshot => {
               const addedData = [];
               querySnapshot.forEach(documentSnapshot => {
                   addedData.push(Object.assign(documentSnapshot.data(), {id: documentSnapshot.id}));
               });
               setRecipes([...recipes, ...addedData]);
           }).catch(error => {
                console.log('Recipes error: ', error);
           })
    }

    const openDetailsPage = (myRecipe) => {
        setCurrentRecipe(myRecipe);
        navigation.navigate("Recipe Details");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {recipes.map(recipe => (
                    <RecipeCard
                        key={recipe.id}
                        title={recipe.title}
                        calories={recipe.calories}
                        time={recipe.time}
                        imageUrl={recipe.pictureURL}
                        onClick={()=> {openDetailsPage(recipe)}}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default RecipesScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        padding: 20
    },
    text: {
        fontSize: 20,
        color: "#333333"
    }
});
