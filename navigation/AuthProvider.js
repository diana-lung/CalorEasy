import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from "react-native";
import {GoogleSignin} from '@react-native-community/google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import db from "../utils/DatabaseConfig";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userHeight, setUserHeight] = useState('');
    const [userWeight, setUserWeight] = useState('');
    const [userGender, setUserGender] = useState('');
    const [userPhoto, setUserPhoto] = useState('');
    const [currentRecipe, setCurrentRecipe] = useState(null);
    const [userFavourites, setUserFavourites] = useState(null);
    const [userPlan, setUserPlan] = useState(null);


    function onResult(QuerySnapshot) {
        setUserName(QuerySnapshot.data().name);
        setUserName(QuerySnapshot.data().name);
        setUserAge(QuerySnapshot.data().age);
        setUserHeight(QuerySnapshot.data().height);
        setUserWeight(QuerySnapshot.data().weight);
        setUserGender(QuerySnapshot.data().gender);
        setUserPhoto(QuerySnapshot.data().photoURL);
        setUserFavourites(QuerySnapshot.data().favourites);
        setUserPlan(QuerySnapshot.data().mealPlanner);
    }

    function onError(error) {
        console.error("Error getting user:", error);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        Alert.alert(
                            'Authentication Failed. ',
                            'Please check you introduced the correct email and password!',
                            [
                                { text: 'OK', onPress: () => console.log('OK Pressed') }
                            ],
                            { cancelable: false }
                        );
                    }
                },
                googleLogin: async () => {
                    try {
                        // Get the users ID token
                        const { idToken } = await GoogleSignin.signIn();

                        // Create a Google credential with the token
                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

                        // Sign-in the user with the credential
                        await auth().signInWithCredential(googleCredential);
                    } catch(error) {
                        console.log({error});
                    }
                },
                 fbLogin: async () => {
                     try {
                         // Attempt login with permissions
                         const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

                         if (result.isCancelled) {
                             throw 'User cancelled the login process';
                         }

                         // Once signed in, get the users AccesToken
                         const data = await AccessToken.getCurrentAccessToken();

                         if (!data) {
                             throw 'Something went wrong obtaining access token';
                         }

                         // Create a Firebase credential with the AccessToken
                         const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

                         // Sign-in the user with the credential
                         await auth().signInWithCredential(facebookCredential);
                     } catch(error) {
                         console.log({error});
                     }
                 },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch (e) {
                        Alert.alert(
                            'Registration Failed. ',
                            'The email you introduced already exists.',
                            [
                                { text: 'OK', onPress: () => console.log('OK Pressed') }
                            ],
                            { cancelable: false }
                        );
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                },
                currentRecipe, setCurrentRecipe,
                userName, setUserName,
                userAge, setUserAge,
                userHeight, setUserHeight,
                userWeight, setUserWeight,
                userGender, setUserGender,
                userPhoto, setUserPhoto,
                userFavourites, setUserFavourites,
                userPlan, setUserPlan,
                getUserData: async () => {
                    await db.collection('users').doc(user.uid).onSnapshot(onResult, onError);
                },
                updateUserData: (userName, userHeight, userWeight, userAge, userGender) => {
                    db.collection('users').doc(user.uid)
                        .update({
                            name: userName,
                            age: userAge,
                            height: userHeight,
                            weight: userWeight,
                            gender: userGender
                        })
                        .then(() => {
                            console.log('User updated!');
                        });
                },

                updateUserFavourites: (recipes) =>{
                     db.collection('users').doc(user.uid)
                         .update({
                             favourites: recipes
                         })
                         .then(() => {
                             console.log('Favourite recipes updated!');
                         });
                },
                updateUserPlan: (recipes, type, day) =>{
                    db.collection('users').doc(user.uid)
                        .update({
                            mealPlanner: recipes
                        })
                        .then(() => {
                            console.log('Favourite recipes updated!');
                        });
                }
            }}>
            {children}
        </AuthContext.Provider>
    );
};
