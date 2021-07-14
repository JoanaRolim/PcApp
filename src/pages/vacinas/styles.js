import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage:{
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '150%',
    },
    navigation:{
        marginTop: 50, 
        marginLeft: 20
    },
    header:{
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    headerText:{
        marginTop: 30,
        fontSize: 48,
    },
});
