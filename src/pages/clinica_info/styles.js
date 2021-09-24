import { StyleSheet } from "react-native"

export default StyleSheet.create({
  containerClinica: {
    flex: 1
  },
    headerText:{
        marginLeft: 35,
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        alignSelf: "auto",
        marginTop: 45
    },
    icone: {
        
    },

    detalhes: {
    fontStyle: "normal",
    fontWeight: "500",
    justifyContent: "space-between",
    marginLeft: 35,
    marginEnd: 18
    },
    cnpj: {
      marginTop: 3,
      fontSize: 15,
    },
    endereco: {
      marginTop: 3,
      fontSize: 15,
    },
    telefone: {
      marginTop: 3,
      fontSize: 15,
    },
    avaliacao: {
      marginTop: 30,
      textAlign: "center",
      alignItems: "center",
      alignContent: "center",
      display: "flex",
      fontStyle: 'normal',
      fontWeight: "500",  
      fontSize: 17,
      textDecorationLine: "underline",
      color: "black"
    },
    iconstar: {
      marginTop: 25,
      alignItems: "center"
    },
    top: {
      marginTop: 75,
    },
    infos:{
      flex: 1,
      backgroundColor: '#FAD3CB',
      marginHorizontal: 20,
      borderRadius: 10,
      marginLeft: 26,
      textAlign: "center",
      flexDirection:'row',
      justifyContent: 'space-between',
      padding: 19,
      marginBottom: 30
  },
  text: {
      marginLeft: 22,
      fontSize: 17,
      fontStyle: "normal",
      fontWeight: "500",
      marginBottom: 5,
      marginTop: 0
  },

})
