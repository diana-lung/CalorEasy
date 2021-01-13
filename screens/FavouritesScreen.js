import React, {useContext, useEffect} from "react";
import {Text, View, StyleSheet, ScrollView, SafeAreaView} from "react-native";
import {AuthContext} from "../navigation/AuthProvider";
import {hideNavigationBar} from "react-native-navigation-bar-color";
import {Button, Avatar, Chip, Paragraph, Dialog, Portal, RadioButton, List} from 'react-native-paper';
import {ListItem} from "@material-ui/core";

const FavouritesScreen = () => {
    useEffect(() => {
        hideNavigationBar();
    }, []);

    const {userFavourites, userPlan, updateUserPlan} = useContext(AuthContext);

    const [visible, setVisible] = React.useState(false);
    const [checked, setChecked] = React.useState('Breakfast');
    const [checked2, setChecked2] = React.useState('Monday');
    const [valid, setValid] = React.useState(true);
    const [currentRecipe, setCurrentRecipe] = React.useState(null);

    const addToMealPlan = (recipe) => {
        // console.log(checked2);
        // console.log(checked);
        // console.log(userPlan);
        const newRecipes = {...userPlan, [checked2]: {...userPlan[checked2], ...{[checked]: recipe.title}}};
        updateUserPlan(newRecipes, checked, checked2);
        // let obj = {[ckecked2]}
        // const da2 = {...userPlan, [checked2]: {...userPlan[checked2], ...source[key]}}
        // const da = {...userPlan, [checked2]: {...userPlan[checked2], ...{[checked]: recipe.title}}};
        console.log(newRecipes);
        setVisible(false);
    }

    const showDialog = (recipe) => {
        setCurrentRecipe(recipe);
        setVisible(true);
    };
    const hideDialog = (recipe) => {
        // setValid(checkValidity);
        // if (valid) {
        //
        // }
        addToMealPlan(recipe);
        setVisible(false);
    };

    return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {userFavourites.map(recipe => (
                <Chip
                    key={recipe.id}
                    avatar={<Avatar.Image
                        source={ { uri: recipe.pictureURL }}
                        size = {50}
                        style={{marginLeft: -5, marginRight: 40, marginTop: -16}}
                    />}
                    onPress={() => showDialog(recipe)}
                    mode="outlined"
                    height={70}
                    width={350}
                    textStyle={{ fontSize: 20, fontWeight: "700", marginTop: 10 }}
                    style={{ backgroundColor: '#fff',
                        borderColor: '#4EB552',
                        borderTopWidth:2, borderBottomWidth: 2,
                        borderLeftWidth: 2, borderRightWidth: 2,
                        borderRadius: 80,
                        paddingTop: 10,
                        marginBottom: 10,
                        paddingLeft: 10
                    }}

                >{recipe.title}</Chip>
            ))}

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Choose Meal Plan options</Dialog.Title>
                    <Dialog.Content>
                        {/*{valid && <Paragraph style={{color: 'red'}}>The number of calories is too big for the selected*/}
                        {/*    day!</Paragraph>}*/}
                        <Paragraph>TYPE</Paragraph>
                        <View>
                            <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
                                <View style={styles.row}>
                                    <RadioButton color="#4EB552" value="Breakfast" />
                                    <Text>Breakfast</Text>
                                </View>
                                <View style={styles.row}>
                                    <RadioButton color="#4EB552" value="Lunch" />
                                    <Text>Lunch</Text>
                                </View>
                                <View style={styles.row}>
                                    <RadioButton color="#4EB552" value="Dinner" />
                                    <Text>Dinner</Text>
                                </View>
                            </RadioButton.Group>
                        </View>
                        <Paragraph style={{marginTop: 10}}>DAY</Paragraph>
                        <RadioButton.Group onValueChange={newValue => setChecked2(newValue)} value={checked2}>
                            <List.Accordion title="Choose Day"
                                            theme={{ colors: { primary: '#4EB552', secondary:"#4EB552"}}}>
                                <View style={styles.row}>
                                    <RadioButton color="#4EB552" value="Monday" />
                                    <Text>Monday</Text>
                                </View>
                                <View style={styles.row}>
                                    <RadioButton color="#4EB552" value="Tuesday" />
                                    <Text>Tuesday</Text>
                                </View>
                                <View style={styles.row}>
                                    <RadioButton color="#4EB552" value="Wednesday" />
                                    <Text>Wednesday</Text>
                                </View>
                                <View style={styles.row}>
                                    <RadioButton color="#4EB552" value="Thursday" />
                                    <Text>Thursday</Text>
                                </View>
                                <View style={styles.row}>
                                    <RadioButton color="#4EB552" value="Friday" />
                                    <Text>Friday</Text>
                                </View>
                                <View style={styles.row}>
                                    <RadioButton color="#4EB552" value="Saturday" />
                                    <Text>Saturday</Text>
                                </View>
                                <View style={styles.row}>
                                    <RadioButton color="#4EB552" value="Sunday" />
                                    <Text>Sunday</Text>
                                </View>
                            </List.Accordion>
                        </RadioButton.Group>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            onPress={()=>{hideDialog(currentRecipe)}}
                        >Done</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>



        </ScrollView>
    </SafeAreaView>


    );
}

export default FavouritesScreen;

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
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
    },
});
