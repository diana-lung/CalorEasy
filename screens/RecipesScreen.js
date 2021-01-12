import React, {useContext, useEffect} from "react";
import {Text, View, StyleSheet} from "react-native";
import {AuthContext} from "../navigation/AuthProvider";
import {hideNavigationBar} from "react-native-navigation-bar-color";
import RecipeCard from "../components/RecipeCard";

const recipes = [
    {
        id: 0,
        title: "Belgian Waffles",
        calories: 120,
        time: 25,
        imageUrl: "https://webcomicms.net/sites/default/files/clipart/173286/pictures-food-items-173286-1461693.jpg"
    }
]

const RecipesScreen = () => {
    useEffect(() => {
        hideNavigationBar();
    }, []);

    const {user, logout} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            {recipes.map(recipe => (
                <RecipeCard
                    title={recipe.title}
                    calories={recipe.calories}
                    time={recipe.time}
                    imageUrl={recipe.imageUrl}
                    onClick={()=> {console.log(recipe)}}
                />
            ))}
        </View>
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
