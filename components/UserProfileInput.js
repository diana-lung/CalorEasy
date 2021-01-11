import * as React from 'react';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {terminateResponder} from "react-native-web/dist/hooks/useResponderEvents/ResponderSystem";
import {StyleSheet} from "react-native";
import {windowHeight, windowWidth} from "../utils/Dimensions";

const UserProfileInput = ({text, labelValue, placeholderText, iconType, ...rest}) => {
    return (
        <TextInput
            label={labelValue}
            value={text}
            style={styles.myStyle}
            placeholder={placeholderText}
            placeholderTextColor="#888"
            selectionColor="#666"
            theme={{ colors: { primary: "#4EB552", text: '#666', underlineColor:'transparent'}}}
            left={
                <TextInput.Icon
                    name={iconType}
                    color="#4EB552"
                />
            }
            {...rest}
        />
    );
};

export default UserProfileInput;

const styles = StyleSheet.create({
    myStyle: {
        color:'#666',
        backgroundColor: '#f9fafd'
    }
});
