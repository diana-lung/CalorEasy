import React, {useContext, useEffect} from "react";
import {View, StyleSheet, SafeAreaView} from "react-native";
import {AuthContext} from "../navigation/AuthProvider";
import {hideNavigationBar} from "react-native-navigation-bar-color";
import {Avatar, Title, Caption, Text, TouchableRipple} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {bmiType, calculateBMI, calculateDailyCalories} from "../utils/Formulas";
import database from '@react-native-firebase/database';



const ProfileScreen = ({navigation}) => {
    useEffect(() => {
        hideNavigationBar();
    }, []);

    const {user, logout} = useContext(AuthContext);
    let height, weight, age, dailyCalorie, name, gender;
    height = 170;
    weight = 60;
    age = 20;
    name = 'Diana Lung';
    gender = 'woman';

    const getUser = ({ userId }) => {
        useEffect(() => {
            const onValueChange = database()
                .ref(`/users/${user.uid}`)
                .on('value', snapshot => {
                    console.log('User data: ', snapshot.val());
                });

            // Stop listening for updates when no longer required
            return () =>
                database()
                    .ref(`/users/${user.uid}`)
                    .off('value', onValueChange);
        }, [userId]);
    }

    // database()
    //     .ref('/users/NJ1mSgCuoZZdALVZBzXJaHB9f3z2')
    //     .on('value', snapshot => {
    //         console.log('User data: ', snapshot.val());
    //     });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image
                        source={require('../assets/images/default-profile-pic.png')}
                        size={80}
                    />
                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {
                            marginTop:15,
                            marginBottom: 5,
                        }]}>{name}</Title>
                        <Caption style={styles.caption}>{user.email}</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="account-clock-outline" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>Age: {age}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="gender-male-female" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>Gender: {gender}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="human-male-height" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>Height: {height} cm</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="weight-kilogram" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>Weight: {weight} kg</Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1,
                }]}>
                    <View style={styles.row2}>
                        {bmiType(height, weight) === 'Normal weight'
                        && <Icon name="check-circle"
                                 color="#339900" size={20}
                                 style={styles.iconBMI}/>}
                        {bmiType(height, weight) === 'Underweight'
                        && <Icon
                            name="alert-circle"
                            color="#6497b1" size={20}
                            style={styles.iconBMI}/>}
                        {bmiType(height, weight) === 'Overweight'
                        && <Icon name="alert-circle"
                                 color="#ffcc00" size={20}
                                 style={styles.iconBMI}/>}
                        {bmiType(height, weight) === 'Obesity'
                        && <Icon name="alert-circle"
                                 color="#cc3300" size={20}
                                 style={styles.iconBMI}/>}
                        <Title>{calculateBMI(height, weight)}</Title>
                    </View>
                        <Caption>BMI</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>{calculateDailyCalories(age, gender, height, weight)}</Title>
                    <Caption>Daily Calories</Caption>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => {navigation.navigate("Favourites")}}>
                    <View style={styles.menuItem}>
                        <Icon name="heart-outline" color="#f19422" size={25}/>
                        <Text style={styles.menuItemText}>Favorite Recipes</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {navigation.navigate("Support")}}>
                    <View style={styles.menuItem}>
                        <Icon name="account-check-outline" color="#f19422" size={25}/>
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {navigation.navigate("Settings")}}>
                    <View style={styles.menuItem}>
                        <Icon name="cog-outline" color="#f19422" size={25}/>
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {logout()}}>
                    <View style={styles.menuItem}>
                        <Icon name="exit-to-app" color="#f19422" size={25}/>
                        <Text style={styles.menuItemText}>Sign Out</Text>
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row2: {
        flexDirection: 'row',
        alignItems: "center",
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
        backgroundColor: "rgba(255,255,255,0.3)"
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    iconBMI: {
        marginRight: 10,
        marginLeft: -30
    }
});
