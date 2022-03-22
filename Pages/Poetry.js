import {TouchableHighlight, StyleSheet, Text, View, Image, FlatList, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useState} from "react";


function PoetryScreen({navigation}) {

    const DATA = [
        {
            title: 'Fool',
            date: '1/10/22',
            poem: 'Do my eyes taste of the sea, oh Dorothy? ' +
            'You, clip-clopping, ripping brick after yellow brick away from the mortar that '+
            'glues my rib cage to my spine? Is it you who paves my roads gold, gemstone heart green '+
            'without envy, no. Green with life, green with wealth. You, with Poseidon\'s eyes, ' +
            'hands the wide expanse of desert sand. Is it you, Aphrodite, sea foam at the mouth, '+
            'breath shaking, the bellows of the earth heaving… Is it you, Demeter, '+
            'through grass sways, fallen fruits swallowed by the earth, spat back up into bountiful berries and trees. '+
            'Is it you who descended into the earth, spilling pomegranate seeds, seedling sprouts taming the three-headed dog. '+
            'Is it you the winter mourns? The winds that whip milk into butter. White bread toasted brown, '+
            'butter floating clumps down the wine-spring. Is it you, you Lia, you Lilith, you Lazarus, who crawls from Elysium, '+
            'hair coiled with strands of gold, dangling jewels, holding my leaden hands. You who led the mule down the mountain, '+
            'goat herder, your call that pulls fruit from the branches emerging from the joints of the fingers of saints. '+
            'Is it you? My Anne, my Joan, my Heather, my Aria. Is it you who prods fingers through the mortar to make sure the fleshy, '+
            'pulsing creature inside is still okay? Who asks it if it is hungry, and feeds it? '+
            'Who massages the crevices and checks the valves, plucking arteries like harpstrings? '+
            'Is it you, the muse, the savior, the fool who dared to caress my soul?',
        },
        {
            title: 'Second heartbreak',
            date: '2/24/22',
            poem: 'today is the day you say you want a break\n' +
            'and perhaps i finally begin to understand what you felt before thanksgiving break\n' +
            'our break, little breakup\n' +
            'today was filled with blue text bubbles \n' +
            'and blaming fingers pointed this way and that\n' +
            'a magnet in a metal tube\n' +
            'the word, break\n' +
            'does to me exactly what it says, i suppose \n' +
            'i might be bold enough to believe that you will come back \n' +
            'but i\'ve always been a liability\n' + 
            'for a raging forest fire does nothing to a boulder\n' +
            'but make it hot.\n' +
            
            'but when my flames ran out you came after me\n' +
            'i remember that \n' +
            'but now i\'ve found my fire\n' +
            'feeding it my fingers and my body\n' +
            'my mind and my family \n' +
            'i tossed my violin into the blaze like firewood, my love \n' +
            'my blood is like gasoline \n' +
            'i was learning “butterfly lovers concerto” for you\n' +
            'my senior piece\n' +
            'the piece i\'d play before leaving my instrument in the dust forever \n' +
            'the two lovers were pulled apart \n' +
            'because you know how chinese families are\n' +
            'they raced off the cliff and like the golden eagle\n' +
            'plummeted to meet the sharp rocks below \n' +
            'they were born\n' +
            'and they lived together as butterflies\n' +
            
            'i tossed their delicate wings into the blaze for you\n' +
            
            'it\'s still burning, you know\n' +
            'the dumpster fire\n' +
            'i dismantled my home and fed it to the metal trash can to keep it blazing \n' +
            'it\'s cold out here\n' +
            'but i will keep it warm for your return\n' 
            
        },
        {
            title: 'How to Kill a God',
            date: '2/15/22',
            poem: 'I sit on a gilded throne, glittering jewels\n' +
            'Embedded in brushed silver and auburn gold vines\n' +
            'Under my fingertips\n' +
            '\nThe first peasant arrives with a platter of sizzling pork\n' +
            'And though humble, the food is hearty, and I cannot help but\n' +
            'Wonder which son he sold for such a lavish silver plate\n' +
            '\nI look across the amethyst-encrusted fingers on my right hand\n' +
            'Then up at the amber eyes of the dragon draped over marble stairs and\n' +
            'Curled around pillars. The dragon shakes her mane and returns the gaze\n' +
            '\nI take a bite of pork. It is surprisingly sweet and tastes of...\n' +
            'Hope. Yearning, perhaps. Maybe a taste of freedom\n' +
            'The dragon bellows, great flames leaping. I polish off my meal, feeling sorry for\n' +
            'The charred corpse kneeling before me\n' +
            '\nImagine my surprise when you walk in holding a simple wooden box\n' +
            'The dragon snorts and leaves the room; she prefers gold\n' +
            'You step forward with a smile\n' +
            '\nWhat could you possibly offer?\n' +
            'The head of an enemy? I take the box with curious hands\n' +
            'Perhaps you have come to try your hand at assassinating a god? I lift the lid\n' +
            '\nOh?\n' +
            'A frail heart lies inside\n' +
            'Beating to the pulsing in my throat\n' +
            'I look at you, and you bow a deep bow,\n' +
            'Hand over the hole in your chest\n'+
            '\nSuddenly age-old traditions don\'t seem so important anymore\n' +
            'And so that day you find yourself going home with an immortal\'s heart in place of your own\n' +
            '\nWho does a god thank for the gift of the life of a lover?\n' +
            'To think I would desecrate my own temple... it seems blasphemous\n' +
            'When every touch of yours trails blessings along my skin\n' +
            '\nWho does a god pray to for forgiveness?'
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
        {
            title: 'Fourth Item',
            date: '7394287',
        },
    ];

    const Item = ({ title, date, poem }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{title + "    " + date}</Text>
            <View style={{display: 'flex', flex: 1, alignContent: 'flex-end'}}>
                <TouchableHighlight style={styles.button}
                onPress={() => navigation.navigate("Poem", {paramKey: poem} )}
                >

                    <Text>›</Text>

                </TouchableHighlight>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} date={item.date} poem={item.poem} />
    );

    return(
        <View style={styles.container}>
            <ScrollView style={styles.poems}>
                <FlatList data={DATA} renderItem={renderItem}/>
            </ScrollView>
        </View>
    )
}

export default PoetryScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffbfa3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: '#f79a7e',
        paddingVertical: 1,
        paddingHorizontal: 10,
        padding: 10,
        borderRadius: 10,

        alignSelf: 'flex-end',
    },

    poems: {
        backgroundColor: '#fae8e3',

        borderRadius: 10,
        width: 300,
        margin: 50,
    },

    text: {
      fontSize: 17,
    },

    item: {
        backgroundColor: '#e5dfdf',
        flexDirection: 'row',
        margin: 15,
        padding: 5,
        borderRadius: 10,
    },
});
