import {TouchableHighlight, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function MenuScreen({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.menuButton}
                onPress={() => navigation.navigate('Info')}
            >
                <Text style={styles.text}>What is this?</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.menuButton}
                onPress={() => navigation.navigate('Gallery')}
            >
                <Text style={styles.text}>Gallery</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.menuButton}
                onPress={() => navigation.navigate('Cookie')}
            >
                <Text style={styles.text}>Cookie Jar</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.menuButton}
                onPress={() => navigation.navigate('Poetry')}
            >
                <Text style={styles.text}>Poetry</Text>
            </TouchableHighlight>

            {/*{<TouchableHighlight*/}
            {/*    underlayColor='#8c4530'*/}
            {/*    style={styles.menuButton}*/}
            {/*    //onPress={() => navigation.navigate('Details')}*/}
            {/*>*/}
            {/*    <Text style={{fontSize: 30}}>Moments</Text>*/}
            {/*</TouchableHighlight>}*/}
        </View>
    );
}

export default MenuScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#230D06',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: '#F97339',
        margin: 60,
        padding: 10,
        borderRadius:300,
    },

    text: {
        fontSize: 40,
        color: '#F97339'
    },

    menuButton: {
        backgroundColor: '#8F2B00',
        margin: 13,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    }
});
