import React, { Component } from 'react';
import {TouchableHighlight, StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
// import {Gallery} from 'react-native-photo-gallery';
let images= [
    {
        name: "Image 1",
        image: require("../assets/Gallery/brokenFortuneCookie.png"),
        key: "isdifhdighdijghlfdgh",
    },
    {
        name:"Image 2",
        image: require("../assets/Gallery/brokenFortuneCookie.png"),
        key: "fjsojgnpjgndpjgndjgn",
    },
    {
        name: "Image 3",
        image: require("../assets/Gallery/brokenFortuneCookie.png"),
        key: "mbncxkbndighduigihgi",
    }
]


function GalleryScreen() { //rn this is not being used because,,, that thing up there
    const Item = ({ name, imageFile}) => (
        <View>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.imageContainer}>
                <Image resizeMode={'contain'} style={{width: 200, height: 200}} source={imageFile}/>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item name={item.name} imageFile={item.image} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList data={images} renderItem={renderItem}/>
            </View>
        </SafeAreaView>
    );
}

export default GalleryScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffbfa3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 400,
        height:400,
    },

    imageContainer: {
      resizeMode: 'contain',
      flex: 1,
      aspectRatio: 1,
    },

    name: {
        fontSize: 17,
    },

    button: {
        backgroundColor: '#f79a7e',
        margin: 60,
        padding: 10,
        borderRadius:300,
    },
});
