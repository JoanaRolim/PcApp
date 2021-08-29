import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    perfil:{
        width: 100,
        height: 98,
        borderRadius: 50,
        marginLeft: 35,
        marginTop: 30
    },
    headerText:{
        width: 75,
        height: 25,
        marginLeft: 155,
        marginTop: -80,
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 25
    },
    headerBellow:{
        width: 65,
        height: 19,
        marginLeft: 155,
        marginTop: 0,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 19,
    },
    descricao:{
        marginTop: 74,
    },
    detalhes:{
        borderRadius: 10,
        backgroundColor: '#DEF0F6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 370,
        height: 346,
        marginLeft: 30,
        padding: 20
    },
    raca:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
        lineHeight: 21
    },
    alergia:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
        lineHeight: 21
    },
    altura:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
        lineHeight: 21
    },
    castracao:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
        lineHeight: 21
    },
    idade:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
        lineHeight: 21
    },
    peso:{
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
        lineHeight: 21
    },
    vacinas:{
        flex: 1,
        backgroundColor: '#DEF0F6',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 20,
        width: 370,
        marginLeft: 30,
        height: 70,
        marginTop: 30
    },
    list: {
        alignSelf: 'center',
    },
    text_vacina: {
        marginTop: 5,
        fontSize: 18,
        marginBottom: 5,
        lineHeight: 21
    },
    historico:{
        flex: 1,
        backgroundColor: '#DEF0F6',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 20,
        width: 370,
        marginLeft: 30,
        height: 70,
        marginTop: 30
    },
    text_historico: {
        marginTop: 5,
        fontSize: 18,
        marginBottom: 5,
        lineHeight: 21
    },
    detalhes_consulta: {
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: '#D0EFE6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 370,
        height: 176,
        marginLeft: 30,
        padding: 20
    },
    text_consultas: {
        marginTop: 5,
        fontSize: 16,
        marginBottom: 5,
        lineHeight: 15
    },
    icone: {
        flexDirection: 'row',
        marginLeft: 250,
    },
    iconeconsulta: {
        flexDirection: 'row',
        marginLeft: 240,
    },
});