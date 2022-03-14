import {TouchableHighlight, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function MenuScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>:)</Text>
            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.menuButton}
                onPress={() => navigation.navigate('Info')}
            >
                <Text style={{fontSize: 30}}>What is this?</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.menuButton}
                onPress={() => navigation.navigate('Gallery')}
            >
                <Text style={{fontSize: 30}}>Gallery</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.menuButton}
                //onPress={() => navigation.navigate('Details')}
            >
                <Text style={{fontSize: 30}}>Cookie Jar</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.menuButton}
                //onPress={() => navigation.navigate('Details')}
            >
                <Text style={{fontSize: 30}}>Poetry</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.menuButton}
                //onPress={() => navigation.navigate('Details')}
            >
                <Text style={{fontSize: 30}}>Moments</Text>
            </TouchableHighlight>
        </View>
    );
}

export default MenuScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffbfa3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: '#f79a7e',
        margin: 60,
        padding: 10,
        borderRadius:300,
    },

    menuButton: {
        backgroundColor: '#f79a7e',
        margin: 13,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
    }
});
