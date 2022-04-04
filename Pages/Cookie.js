import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { focusProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import styles from './Colors';

function CookieScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Press the cookie!</Text>

            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.button}

                onPress={() => navigation.navigate('CookieOpen')}
            >
                <Image resizeMode={'contain'} style={{width: 150, height: 150}} source={require( "../assets/Cookie_Closed.png")}/>

            </TouchableHighlight>
        </View>
    );
}

export default CookieScreen;



