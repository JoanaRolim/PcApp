import { StyleSheet } from "react-native"

export default StyleSheet.create({
  containerClinica: {
    flex: 1
  },
    headerText:{
        marginLeft: 35,
        fontSize: 28,
        height: 33,
        fontStyle: 'normal',
        textTransform: "uppercase",
        fontWeight: 'bold',
        alignSelf: "auto",
        lineHeight: 36,
        marginTop: 45
    },
    icone: {
        marginLeft: 370,
        marginTop: -25
    },
  detalhes: {
    fontStyle: "normal",
    fontWeight: "500",
    justifyContent: "space-between",
    marginLeft: 35,
    marginEnd: 18
  },
    infos: {
      marginTop: 3,
      fontSize: 15,
      lineHeight: 19
    },
    endereco: {
      marginTop: 3,
      fontSize: 15,
      lineHeight: 19
    },
    telefone: {
      marginTop: 3,
      fontSize: 15,
      lineHeight: 19
    },
    avaliacao: {
      marginTop: 30,
      textAlign: "center",
      fontStyle: 'normal',
      fontWeight: "500",  
      fontSize: 17,
      lineHeight: 21,
      textDecorationLine: "underline",
      color: "black"
    },
    iconstar: {
      marginTop: 25,
      lineHeight: 21,
      marginStart: 135,
      position: "absolute"
    },
    top: {
      marginTop: 75,
    },
    agendamento:{
      width: 375,
      height: 65,
      backgroundColor: '#FAD3CB',
      borderRadius: 10,
      marginLeft: 26,
      textAlign: "center",
      padding: 18,
      marginBottom: 30
  },
  text: {
    marginLeft: 22,
      fontSize: 17,
      lineHeight: 25,
      fontStyle: "normal",
      fontWeight: "500",
      marginBottom: 5,
      marginTop: 0
  },
  icone_info: {
      marginLeft: 300,
      marginTop: -27
  }
})
