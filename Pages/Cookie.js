import {TouchableHighlight, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function CookieScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>:)</Text>

            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.button}

                onPress={() => navigation.navigate('CookieOpen')}
            >
                <Image resizeMode={'contain'} style={{width: 200, height: 200}} source={require( "../assets/fortuneCookie.png")}/>

            </TouchableHighlight>
        </View>
    );
}

export default CookieScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffbfa3',
        alignItems: 'center',
        justifyContent: 'center',
    },


    button: {
        backgroundColor: '#ffbfa3',
        margin: 60,
        padding: 15,
        borderRadius:300,
    },
});
