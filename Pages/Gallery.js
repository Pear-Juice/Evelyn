import React, { Component } from 'react';
import {TouchableHighlight, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { focusProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
// import {Gallery} from 'react-native-photo-gallery';
let images= [
    {
        name: "Image 1",
        image: "https://i.ytimg.com/vi/tAcUTUm8iKg/maxresdefault.jpg"
    },
    {
        name:"Image 2",
        image: "https://th.bing.com/th/id/R.63c958bfaad0fe2640f11c450525e81b?rik=CJb7%2fPKiXQHzIg&pid=ImgRaw&r=0"
    },
    {
        name: "Image 3",
        image: "https://i.pinimg.com/736x/46/e0/93/46e093dde55c2a9826c91aee4e95e08f.jpg"
    }
]


export default class App extends Component { //basically i tried some random shit from a rando on the internet 
    
    renderImages= (item) => { //it didnt work
        return (
            <View>
                <image source={{uri: item.item.image}} style={styles.image} />
            </View>
        )
        
    };

    render() {
        return (
            <View>
                <FlatList
                horizontal={false}
                numColumns={3}
                data={images}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderImages}
                />
            </View>
        );
    }
    
}


function GalleryScreen() { //rn this is not being used because,,, that thing up there
    
    renderImages= (item) => {
        return (
            <View style={styles.container}>
                <image source={{uri: item.item.image}} style={styles.image} ></image>
            </View>
        )
        
    };

    return (
        <View style={styles.container}>
            <Text>:)</Text>
            <FlatList
            horizontal={false}
            numColumns={3}
            data={images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderImages}
            />
        </View>
    );
}

// export default GalleryScreen;


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

    button: {
        backgroundColor: '#f79a7e',
        margin: 60,
        padding: 10,
        borderRadius:300,
    },
});
