import {TouchableHighlight, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function InfoScreen() {
    const messages= [
        'Hey love! I made you this... well, you already knew I was making this. I hope it\'s not too disappointing :o',
        'Happy late birthday! I was planning this for a solid month and a half, but I honestly got started on this about a week before your birthday? Anyway, that was a bad idea.',
        'This app is essentially a little collection of a bunch of things that remind me of you or are about you. A quick warning before you start, it gets REALLY sappy.',
        'One last thing: please try to go in order! It doesn\'t make that much difference in the end, because you\'ll see all of it, but it\'d be better if you did. Alright, I\'ll leave you to it! Have fun! \n' +
        'Love, \n' +
        'Evelyn'
    ]


    useEffect(() => {
        setMessage(messages[index]); //sop pls help
    }, [])

    const [message, setMessage] = useState('')
    const [index,setIndex] = useState(0);


    return (
        <View style={styles.container}>
            <View style={styles.arrowButtonContainer}>
                <TouchableHighlight
                    underlayColor='#8c4530'
                    style={styles.menuButton}
                    onPress={() => setIndex(index + 1)}
                >
                    <Text style={{fontSize: 30}}>‹</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor='#8c4530'
                    style={styles.menuButton}
                    onPress={() => setIndex(index - 1)}
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
