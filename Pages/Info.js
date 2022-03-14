import {TouchableHighlight, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function InfoScreen() {
    return (
        <View style={styles.container}>
            <Text>:)</Text>
            <View style={styles.arrowButtonContainer}>
                <TouchableHighlight
                    underlayColor='#8c4530'
                    style={styles.menuButton}
                    //onPress={() => navigation.navigate('Details')}
                >
                    <Text style={{fontSize: 30}}>‹</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor='#8c4530'
                    style={styles.menuButton}
                    //onPress={() => navigation.navigate('Details')}
                    >
                    <Text style={{fontSize: 30}}>›</Text>
                </TouchableHighlight>
            </View>

        </View>
    );
}

export default InfoScreen;


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

    arrowButtonContainer: {
        flexDirection: 'row',

    },
});
