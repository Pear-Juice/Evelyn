import {TouchableHighlight, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './Colors';

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



