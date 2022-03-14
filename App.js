import { StatusBar } from 'expo-status-bar';
import {TouchableHighlight, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from "./Pages/Menu";
import InfoScreen from "./Pages/Info";
import GalleryScreen from "./Pages/Gallery";

function HomeScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 35}}>Hello!!!!</Text>
            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.button}

                onPress={() => navigation.navigate('Menu')}
            >
                <Text>{"Start<3"}</Text>
            </TouchableHighlight>
            {/*<Image source={require("./assets/heart.png")}/>*/}
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Menu" component={MenuScreen} />
              <Stack.Screen name="Info" component={InfoScreen} />
              <Stack.Screen name="Gallery" component={GalleryScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

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
