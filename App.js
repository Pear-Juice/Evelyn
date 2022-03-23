import { StatusBar } from 'expo-status-bar';
import {TouchableHighlight, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from "./Pages/Menu";
import InfoScreen from "./Pages/Info";
import GalleryScreen from "./Pages/Gallery";
import CookieScreen from "./Pages/Cookie";
import PoetryScreen from "./Pages/Poetry";
import CookieOpenScreen from "./Pages/CookieOpen";
import PoemScreen from "./Pages/Poem";

function HomeScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 50, color: '#E6BCCD'}}>Hello!!!!</Text>
            <TouchableHighlight
                underlayColor='#8c4530'
                style={styles.button}

                onPress={() => navigation.navigate('Menu')}
            >
                <Text style={styles.text}>{"Start<3"}</Text>
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
              <Stack.Screen name="Cookie" component={CookieScreen} />
              <Stack.Screen name="Poetry" component={PoetryScreen} />
              <Stack.Screen name="CookieOpen" component={CookieOpenScreen} />
              <Stack.Screen name="Poem" component={PoemScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29274C',
    alignItems: 'center',
    justifyContent: 'center',
  },

    button: {
        backgroundColor: '#7E52A0',
        margin: 80,
        padding: 20,
        borderRadius:300,
    },

    text: {
        fontSize: 20,
        color: '#E6BCCD'
    },

    menuButton: {
        backgroundColor: '#EADDD8',
        margin: 13,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
    }
});
