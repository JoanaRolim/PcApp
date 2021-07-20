import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    navigation:{
        marginTop: 50, 
        marginLeft: 20
    },
    imageperfil:{
        width: '100%', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    perfil:{
        resizeMode: 'cover',
        width: "100%",
        height: 300,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    headerText:{
        marginTop: 30,
        fontSize: 36,
    },
    headerBellow:{
        fontSize: 24,
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
    peso:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
    },
    alergia:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
    },
    altura:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
    },
    castracao:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
    },
    dono:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
    },
});
