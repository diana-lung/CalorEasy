import React, {useContext, useEffect} from "react";
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import {hideNavigationBar} from "react-native-navigation-bar-color";
import { DataTable } from 'react-native-paper';
import {AuthContext} from "../navigation/AuthProvider";


const MealScreen = () => {
    useEffect(() => {
        hideNavigationBar();
    }, []);

    const {userPlan} = useContext(AuthContext);

    return (
        <SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title></DataTable.Title>
                    <DataTable.Title>Breakfast</DataTable.Title>
                    {/*<DataTable.Title>Lunch</DataTable.Title>*/}
                    {/*<DataTable.Title>Dinner</DataTable.Title>*/}
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell >Monday</DataTable.Cell>
                    <DataTable.Cell>{userPlan['Monday'].Breakfast}</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Monday'].Lunch}</DataTable.Cell>*/}
                    {/*<DataTable.Cell>{userPlan['Monday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Tuesday</DataTable.Cell>
                    <DataTable.Cell>{userPlan['Tuesday'].Breakfast}</DataTable.Cell>
                {/*    <DataTable.Cell>{userPlan['Tuesday'].Lunch}</DataTable.Cell>*/}
                {/*    <DataTable.Cell>{userPlan['Tuesday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Wednesday</DataTable.Cell>
                    <DataTable.Cell>{userPlan['Wednesday'].Breakfast}</DataTable.Cell>
                {/*    <DataTable.Cell>{userPlan['Wednesday'].Lunch}</DataTable.Cell>*/}
                {/*    <DataTable.Cell>{userPlan['Wednesday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Thursday</DataTable.Cell>
                    <DataTable.Cell>{userPlan['Thursday'].Breakfast}</DataTable.Cell>
                {/*    <DataTable.Cell>{userPlan['Thursday'].Lunch}</DataTable.Cell>*/}
                {/*    <DataTable.Cell>{userPlan['Thursday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Friday</DataTable.Cell>
                    <DataTable.Cell>{userPlan['Friday'].Breakfast}</DataTable.Cell>
                {/*    <DataTable.Cell>{userPlan['Friday'].Lunch}</DataTable.Cell>*/}
                {/*    <DataTable.Cell>{userPlan['Friday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Saturday</DataTable.Cell>
                    <DataTable.Cell>{userPlan['Saturday'].Breakfast}</DataTable.Cell>
                {/*    <DataTable.Cell>{userPlan['Saturday'].Lunch}</DataTable.Cell>*/}
                {/*    <DataTable.Cell>{userPlan['Saturday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Sunday</DataTable.Cell>
                    <DataTable.Cell>{userPlan['Sunday'].Breakfast}</DataTable.Cell>
                {/*    <DataTable.Cell>{userPlan['Sunday'].Lunch}</DataTable.Cell>*/}
                {/*    <DataTable.Cell>{userPlan['Sunday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

            </DataTable>


            <DataTable>
                <DataTable.Header>
                    <DataTable.Title></DataTable.Title>
                    {/*<DataTable.Title>Breakfast</DataTable.Title>*/}
                    <DataTable.Title>Lunch</DataTable.Title>
                    {/*<DataTable.Title>Dinner</DataTable.Title>*/}
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell >Monday</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Monday'].Breakfast}</DataTable.Cell>*/}
                    <DataTable.Cell>{userPlan['Monday'].Lunch}</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Monday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Tuesday</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Tuesday'].Breakfast}</DataTable.Cell>*/}
                        <DataTable.Cell>{userPlan['Tuesday'].Lunch}</DataTable.Cell>
                    {/*    <DataTable.Cell>{userPlan['Tuesday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Wednesday</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Wednesday'].Breakfast}</DataTable.Cell>*/}
                        <DataTable.Cell>{userPlan['Wednesday'].Lunch}</DataTable.Cell>
                    {/*    <DataTable.Cell>{userPlan['Wednesday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Thursday</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Thursday'].Breakfast}</DataTable.Cell>*/}
                        <DataTable.Cell>{userPlan['Thursday'].Lunch}</DataTable.Cell>
                    {/*    <DataTable.Cell>{userPlan['Thursday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Friday</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Friday'].Breakfast}</DataTable.Cell>*/}
                        <DataTable.Cell>{userPlan['Friday'].Lunch}</DataTable.Cell>
                    {/*    <DataTable.Cell>{userPlan['Friday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Saturday</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Saturday'].Breakfast}</DataTable.Cell>*/}
                        <DataTable.Cell>{userPlan['Saturday'].Lunch}</DataTable.Cell>
                    {/*    <DataTable.Cell>{userPlan['Saturday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Sunday</DataTable.Cell>
                    {/*    <DataTable.Cell>{userPlan['Sunday'].Breakfast}</DataTable.Cell>*/}
                        <DataTable.Cell>{userPlan['Sunday'].Lunch}</DataTable.Cell>
                    {/*    <DataTable.Cell>{userPlan['Sunday'].Dinner}</DataTable.Cell>*/}
                </DataTable.Row>

            </DataTable>



            <DataTable>
                <DataTable.Header>
                    <DataTable.Title></DataTable.Title>
                    {/*<DataTable.Title>Breakfast</DataTable.Title>*/}
                    {/*<DataTable.Title>Lunch</DataTable.Title>*/}
                    <DataTable.Title>Dinner</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell >Monday</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Monday'].Breakfast}</DataTable.Cell>*/}
                    {/*<DataTable.Cell>{userPlan['Monday'].Lunch}</DataTable.Cell>*/}
                    <DataTable.Cell>{userPlan['Monday'].Dinner}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Tuesday</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Tuesday'].Breakfast}</DataTable.Cell>*/}
                    {/*<DataTable.Cell>{userPlan['Tuesday'].Lunch}</DataTable.Cell>*/}
                        <DataTable.Cell>{userPlan['Tuesday'].Dinner}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Wednesday</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Wednesday'].Breakfast}</DataTable.Cell>*/}
                    {/*<DataTable.Cell>{userPlan['Wednesday'].Lunch}</DataTable.Cell>*/}
                        <DataTable.Cell>{userPlan['Wednesday'].Dinner}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Thursday</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Thursday'].Breakfast}</DataTable.Cell>*/}
                    {/*<DataTable.Cell>{userPlan['Thursday'].Lunch}</DataTable.Cell>*/}
                        <DataTable.Cell>{userPlan['Thursday'].Dinner}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Friday</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Friday'].Breakfast}</DataTable.Cell>*/}
                    {/*<DataTable.Cell>{userPlan['Friday'].Lunch}</DataTable.Cell>*/}
                        <DataTable.Cell>{userPlan['Friday'].Dinner}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Saturday</DataTable.Cell>
                    {/*<DataTable.Cell>{userPlan['Saturday'].Breakfast}</DataTable.Cell>*/}
                    {/*<DataTable.Cell>{userPlan['Saturday'].Lunch}</DataTable.Cell>*/}
                        <DataTable.Cell>{userPlan['Saturday'].Dinner}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Sunday</DataTable.Cell>
                    {/*    <DataTable.Cell>{userPlan['Sunday'].Breakfast}</DataTable.Cell>*/}
                    {/*<DataTable.Cell>{userPlan['Sunday'].Lunch}</DataTable.Cell>*/}
                        <DataTable.Cell>{userPlan['Sunday'].Dinner}</DataTable.Cell>
                </DataTable.Row>

            </DataTable>

            </ScrollView>

        </SafeAreaView>
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
    },
});
