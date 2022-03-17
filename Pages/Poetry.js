import {TouchableHighlight, StyleSheet, Text, View, Image, FlatList, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useState} from "react";


function PoetryScreen({navigation}) {

    const DATA = [
        {
            title: 'First Item',
            date: 'w3897',
            poem: 'On the bike path, a bunny\'s body and blood\n' +
                'where the head should be. Something\n' +
                '\n' +
                'has torn off its foot, something has eaten\n' +
                'its heart, its entrails frozen in snow.\n' +
                '\n' +
                'The plow growls past me. This morning\n' +
                'I left eggs behind the couch to incubate. I spent\n' +
                '\n' +
                'last night walking until all the blood left my feet,\n' +
                'and my thighs throbbed. The snow\n' +
                '\n' +
                'refuses to melt. I refuse to wear\n' +
                'a sweater set or heels. Instead of TV news,\n' +
                '\n' +
                'I watch the sky. When it darkens,\n' +
                'my ribs swell, and I know it is not time\n' +
                '\n' +
                'to plant. I wait for the beginning\n' +
                'or the end—depending on the day. Soon,\n' +
                '\n' +
                'there will be enough water for all of us\n' +
                'to need to build a boat: the sun falls\n' +
                '\n' +
                'into the street, blinding the drivers heading\n' +
                'north, warming the snow from inside.',
        },
        {
            title: 'Second Item',
            date: '874938'
        },
        {
            title: 'Third Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
    ];

    const Item = ({ title, date, poem }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{title + "    " + date}</Text>
            <View style={{display: 'flex', flex: 1, alignContent: 'flex-end'}}>
                <TouchableHighlight style={styles.button}
                onPress={() => navigation.navigate("Poem", {paramKey: poem} )}
                >

                    <Text>›</Text>

                </TouchableHighlight>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} date={item.date} poem={item.poem} />
    );

    return(
        <View style={styles.container}>
            <ScrollView style={styles.poems}>
                <FlatList data={DATA} renderItem={renderItem}/>
            </ScrollView>
        </View>
    )
}

export default PoetryScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffbfa3',
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

    poems: {
        backgroundColor: '#fae8e3',

        borderRadius: 10,
        width: 300,
        margin: 50,
    },

    text: {
      fontSize: 17,
    },

    item: {
        backgroundColor: '#e5dfdf',
        flexDirection: 'row',
        margin: 15,
        padding: 5,
        borderRadius: 10,
    },
});
