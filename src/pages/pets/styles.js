import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText:{
        marginLeft: 60,
        marginTop: 40,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    headerBellow:{
        marginLeft: 60,
        marginTop: 0,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 17,
    },
    descricao:{
        marginTop: 44,
    },
    detalhes:{
        borderRadius: 10,
        backgroundColor: '#DEF0F6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
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
        justifyContent: 'space-between',
        padding: 20,
        marginHorizontal: 30,
        marginTop: 30,
    },
    list: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        justifyContent: 'space-between',
        padding: 20,
        marginHorizontal: 30,
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
        marginHorizontal: 30,
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
        justifyContent: 'space-between',
    },
    iconeconsulta: {
        flexDirection: 'row',
        marginLeft: 240,
    },
});