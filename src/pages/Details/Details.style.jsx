import { StyleSheet, Dimensions } from 'react-native';

const displaySize = Dimensions.get('screen'); 

export default StyleSheet.create({
    image: {
        height: displaySize.height / 4,
        width: '100%'
    },

    meal_title: {
        color: '#a5292a',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'left',
        margin: 5
    },

    meal_subtitle:{
        color: '#a5292a',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
        textAlign: 'left',
    },

    sperator:{
        height: 1,
        width: '100%',
        backgroundColor: '#bdbdbd',
        marginVertical: 10
    },

    meal_content: {
        margin: 5,
    },

    btn_goto_youtube: {
        backgroundColor: '#ff0000',
        padding: 10,
        margin: 8,
        borderRadius: 5,
        marginBottom: 40
    },

    btn_text: {
        color: '#ffe5e4',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }

});