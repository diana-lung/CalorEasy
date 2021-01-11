import React, {useContext, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import{ AuthContext} from "../navigation/AuthProvider";
import firestore from '@react-native-firebase/firestore';
import {calculateBMI, calculateDailyCalories} from "../utils/Formulas";

export function DrawerContent(props) {

    const {user, logout} = useContext(AuthContext);
    let height, weight, age, dailyCalorie, name, gender;
    height = 170;
    weight = 60;
    age = 20;
    dailyCalorie = 1.182;
    name = 'Diana Lung';
    gender = 'woman';


    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={require('../assets/images/default-profile-pic.png')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{name}</Title>
                                <Caption style={styles.caption}>{user.email}</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>BMI</Paragraph>
                                <Caption style={styles.caption}> {calculateBMI(height, weight)}</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>Calories</Paragraph>
                                <Caption style={styles.caption}> {calculateDailyCalories(age, gender, height, weight)}</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Root', { screen: 'Home' })}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="heart-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Favourites"
                            onPress={() => {props.navigation.navigate('Favourites')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('Support')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="cog-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Personal Data">
                        <View style={styles.row2}>
                            <Icon name="account-clock-outline" color='#f19422' size={20}/>
                            <Text style={{color:"#777777", marginLeft: 20}}>Age: {age}</Text>
                        </View>
                        <View style={styles.row2}>
                            <Icon name="gender-male-female" color='#f19422' size={20}/>
                            <Text style={{color:"#777777", marginLeft: 20}}>Gender: {gender}</Text>
                        </View>
                        <View style={styles.row2}>
                            <Icon name="human-male-height" color='#f19422' size={20}/>
                            <Text style={{color:"#777777", marginLeft: 20}}>Height: {height} cm</Text>
                        </View>
                        <View style={styles.row2}>
                            <Icon name="weight-kilogram" color='#f19422' size={20}/>
                            <Text style={{color:"#777777", marginLeft: 20}}>Weight: {weight} kg</Text>
                        </View>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {logout()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: '#f19422',
        color: '#fff',
        paddingTop: 30,
        paddingBottom: 30,
        marginTop: -30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: "#fff"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: "rgba(255,255,255,0.93)"
    },
    row2: {
        marginTop: 20,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
