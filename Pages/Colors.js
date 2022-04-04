'use strict';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#773344',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: '#FCB6C4',
        margin: 60,
        padding: 20,
        borderRadius:300,
    },

    title: {
        fontSize: 50,
        color: '#F6CBD3'
    },

    text: {
        fontSize: 40,
        color: '#773344'
    },

    infotext: {
        backgroundColor: '#FCB6C4',
        color: '#773344',
        fontSize: 18,

        borderRadius: 10,
        width: 300,

        margin: 50,
        padding: 10,
    },

    fortune: {
        backgroundColor: '#FCB6C4',
        color: '#773344',
        width: 300,
        height: 80,
        fontSize: 15,
        fontFamily: 'Courier New',
        margin: 10,
        padding: 10,
        borderRadius: 3,

        textAlign: 'center',
        justifyContent: 'center',
    },

    arrowButtonContainer: {
        flexDirection: 'row',
    },

    menuButton: {
        backgroundColor: '#FCB6C4',
        margin: 13,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    image: {
        width: 400,
        height:400,
    },

    imageContainer: {
      resizeMode: 'contain',
      flex: 1,
      aspectRatio: 1,
    },

    name: {
        fontSize: 17,
    },

    poetrybutton: {
        backgroundColor: '#F2A6B5',
        paddingVertical: 1,
        paddingHorizontal: 10,
        padding: 10,
        borderRadius: 10,

        alignSelf: 'flex-end',
    },

    poems: {
        backgroundColor: '#773344',

        borderRadius: 10,
        width: 300,
        margin: 50,
    },

    poetrytext: {
      fontSize: 17,
      color: '#773344'
    },

    item: {
        backgroundColor: '#F6CBD3',
        flexDirection: 'row',
        margin: 15,
        padding: 5,
        borderRadius: 10,
    },
});