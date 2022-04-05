import {TouchableHighlight, StyleSheet, Text, View, Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useEffect, useState} from "react";
import styles from './Colors';

function CookieOpenScreen({navigation}) {
    
    const fortunes = [
        "You are beautiful",
        "You smell really good",
        "You\'re my light during dark times",
        "You\'re my rock",
        "You always know, and say, exactly what I need to hear when I need to hear it",
        "Thank you for being with me",
        "I bet you do the crossword puzzle in ink",
        "You\'re my best friend",
        ];

    const openedFortunes = [];

    useEffect(() => {
        let randNum = Math.floor(Math.random() * fortunes.length);
        setFortune(fortunes[randNum]);

        if (fortunes.length !== 0) {
            openedFortunes.push(fortunes[randNum])
            fortunes.splice(randNum);
        }

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

            <Image resizeMode={'contain'} style={{width: 150, height: 150}} source={require( "../assets/Cookie_Open.png")}/>


        </View>
    );
}

export default CookieOpenScreen;



