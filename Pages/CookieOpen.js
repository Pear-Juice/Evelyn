import {TouchableHighlight, StyleSheet, Text, View, Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useEffect, useState} from "react";

function CookieOpenScreen({navigation}) {
    const fortunes = ["Your eyes are really pretty","Fluffy hair !!"];

    useEffect(() => {
        setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
    }, [])

    const [fortune, setFortune] = useState("");

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.fortune}>{fortune}</Text>
            </View>

            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.button}

                onPress={() => navigation.navigate('Cookie')}
            >
                <Text>{"Start Over"}</Text>
            </TouchableHighlight>

            <Image resizeMode={'contain'} style={{width: 200, height: 200}} source={require( "../assets/brokenFortuneCookie.png")}/>


        </View>
    );
}

export default CookieOpenScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffbfa3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: '#f79a7e',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },

    fortune: {
        backgroundColor: '#fae8e3',
        width: 300,
        height: 100,
        fontSize: 15,
        fontFamily: 'Courier New',
        margin: 10,
        padding: 10,
        borderRadius: 3,

        textAlign: 'center',
        justifyContent: 'center',
    }
});
