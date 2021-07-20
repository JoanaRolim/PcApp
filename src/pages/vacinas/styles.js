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
    descricao:{
        margin: 24,

    },
    detalhes:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#BDE1ED',
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    vacina:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
    },
    local:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
    },
    data:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
    },
    
});
