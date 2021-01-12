import React, {useContext, useEffect, useState} from "react";
import {Text, View, StyleSheet, TouchableOpacity,} from "react-native";
import {AuthContext} from "../navigation/AuthProvider";
import {hideNavigationBar} from "react-native-navigation-bar-color";
import UserProfileInput from "../components/UserProfileInput";
import {ScrollView} from "react-native-gesture-handler";
import {Avatar, RadioButton, IconButton} from "react-native-paper";
import FormButton from "../components/FormButton";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';


const EditProfileScreen = () => {
    useEffect(() => {
        hideNavigationBar();
    }, []);

    let bs = React.useRef(null);
    const fall = new Animated.Value(1);

    const {user, logout} = useContext(AuthContext);
    const [image, setImage] = useState();

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [gender, setGender] = useState('woman');

    const handleUpdate = () => {

    }

    const takePhotoFromCamera = () => {
        // ImagePicker.openCamera({
        //     compressImageMaxWidth: 300,
        //     compressImageMaxHeight: 300,
        //     cropping: true,
        //     compressImageQuality: 0.7
        // }).then(image => {
        //     console.log(image);
        //     setImage(image.path);
        //     bs.current.snapTo(1);
        // });
    }

    const choosePhotoFromLibrary = () => {
        // ImagePicker.openPicker({
        //     width: 300,
        //     height: 300,
        //     cropping: true,
        //     compressImageQuality: 0.7
        // }).then(image => {
        //     console.log(image);
        //     setImage(image.path);
        //     bs.current.snapTo(1);
        // });
    }

    const renderInner = () => (
        <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
                <IconButton
                    icon="close"
                    color="#f19422"
                    style={styles.closeIcon}
                    size={20}
                    onPress={() => bs.current.snapTo(1)}
                />
            </View>
        </View>
    );


    return (
        <ScrollView style={styles.container}>
            <BottomSheet
                ref={bs}
                snapPoints={[330,0]}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
                renderContent={renderInner}
                renderHeader={renderHeader}
            />
            <Animated.View style={{
                opacity: Animated.add(0.3, Animated.multiply(fall, 1.0)),
            }}>
                <View style={styles.info}>
                    <Avatar.Image
                        source={require('../assets/images/default-profile-pic.png')}
                        size={80}
                        style={styles.image}
                    />
                    <IconButton
                        icon="camera"
                        color="#fff"
                        style={styles.cameraIcon}
                        size={20}
                        onPress={() => bs.current.snapTo(0)}
                    />
                    <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                        <View style={styles.row}>
                            <RadioButton color="#4EB552" value="woman" />
                            <Text>Woman</Text>
                        </View>
                        <View style={styles.row}>
                            <RadioButton color="#4EB552" value="man" />
                            <Text>Man</Text>
                        </View>
                    </RadioButton.Group>
                </View>


                <UserProfileInput
                    text={name}
                    onChangeText={(newName) => {setName(newName);}}
                    labelValue="Name"
                    placeholderText="Name..."
                    iconType="account"
                />

                <UserProfileInput
                    text={age}
                    onChangeText={(newAge) => {setAge(newAge);}}
                    labelValue="Age"
                    placeholderText="Age..."
                    iconType="account-clock-outline"
                />

                <UserProfileInput
                    text={height}
                    onChangeText={(newHeight) => {setHeight(newHeight);}}
                    labelValue="Height"
                    placeholderText="Height in cm..."
                    iconType="human-male-height"
                />

                <UserProfileInput
                    text={weight}
                    onChangeText={(newWeight) => {setWeight(newWeight);}}
                    labelValue="Weight"
                    placeholderText="Weight in kg..."
                    iconType="weight-kilogram"
                />

                <FormButton
                    buttonTitle="Update"
                    onPress={() => handleUpdate()}
                />

                <View style={styles.big}>

                </View>
            </Animated.View>
        </ScrollView>
    );
}

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333'
    },
    big: {
        height: 225
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
    },
    info: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 10,
        marginTop: 5
    },
    image: {
        marginRight: 30
    },
    cameraIcon: {
        backgroundColor: "#f19422",
        marginLeft: -50,
        marginTop: 60,
        marginRight: 30
    },
    closeIcon: {
        marginLeft: 300,
        marginTop: -25
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        borderColor: '#d7d7d7',
        borderLeftWidth: 1,
        borderRightWidth: 1
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: "#d7d7d7",
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#f19422',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});
