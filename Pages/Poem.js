import {TouchableHighlight, StyleSheet, Text, View, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useState} from "react";
import alert from "react-native-web/dist/exports/Alert";


function PoemScreen({route})
{

    return (
        <View style={styles.container}>
            <ScrollView style={styles.poemContainer}>
                <Text style={styles.text}>{route.params.paramKey}</Text>
            </ScrollView>
        </View>
    )
}

export default PoemScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#773344',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: '#f79a7e',
        paddingVertical: 1,
        paddingHorizontal: 10,
        padding: 10,
        borderRadius: 10,

        alignSelf: 'flex-end',
    },

    poemContainer: {
        backgroundColor: '#F6CBD3',

        borderRadius: 10,
        width: 300,

        margin: 50,
        padding: 10,
    },

    text: {
        fontSize: 17,
        color: '#773344'
    },
});
