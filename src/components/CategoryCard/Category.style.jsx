import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        backgroundColor: '#eceff1',
        margin: 10,
        padding: 5,
        borderRadius: 5,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 100,
        backgroundColor: '#eceff1',
        resizeMode: 'contain',
    },
    title: {
        fontWeight: '400',
        color: 'black',
        fontSize: 24,
        marginLeft: 16,
    }

});