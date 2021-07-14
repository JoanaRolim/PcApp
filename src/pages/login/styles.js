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
        height: '30%',
    },
    perfil:{
        width: 120,
        height: 120,
        marginTop: 200,
        borderRadius: 50,
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
        marginTop: 24,
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
