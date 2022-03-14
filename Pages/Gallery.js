import {TouchableHighlight, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function GalleryScreen() {
    return (
        <View style={styles.container}>
            <Text>:)</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('C:\\Users\\pearj\\Documents\\Projects\\UpACreek\\evelyn\\assets\\heart.png')}>
                </Image>
            </View>
        </View>
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
