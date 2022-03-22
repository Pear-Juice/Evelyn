import React, { Component } from 'react';
import {TouchableHighlight, StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { HORIZONTAL, VERTICAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
import { Dimensions } from 'react-native';
// import {Gallery} from 'react-native-photo-gallery';
let images= [
    {
        name: "Image 1",
        image: require("../assets/Gallery/grasspurp.jpg"),
        key: "aaa",
    },
    {
        name:"Image 2",
        image: require("../assets/Gallery/gal4.jpg"),
        key: "bbb",
    },
    {
        name: "Image 3",
        image: require("../assets/Gallery/gal2.jpg"),
        key: "ccc",
    },
    {
        name: "Image 4",
        image: require("../assets/Gallery/gal3.jpg"),
        key: "ddd",
    },
]


function GalleryScreen() {
    const Item = ({ name, imageFile}) => (
        <View>
            <View style={styles.imageContainer}>
                <Image resizeMode={'contain'} 
                style={{width: Dimensions.get('window').width,
                }} 
                source={imageFile}/>
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
