import { StyleSheet } from "react-native"

export default StyleSheet.create({
  containerClinica: {
    flex: 1
  },
    headerText:{
        marginLeft: 35,
        fontSize: 28,
        height: 70,
        fontStyle: 'normal',
        textTransform: "uppercase",
        fontWeight: 'bold',
        alignSelf: "auto",
        lineHeight: 36,
        marginTop: 45
    },
    icone: {
        marginLeft: 370,
        marginTop: -65
    },
  detalhes: {
    fontStyle: "normal",
    marginLeft: 35,
    marginEnd: 18
  },
    infos: {
      marginTop: 35,
      fontSize: 15,
      lineHeight: 19,
      fontWeight: "bold"
    },
    top: {
      marginTop: 45,
    },
    agendamento:{
      width: 375,
      height: 65,
      backgroundColor: '#D0EFE6',
      borderRadius: 10,
      marginLeft: 26,
      textAlign: "center",
      padding: 18
  },
  text: {
      marginLeft: 25,
      fontSize: 17,
      lineHeight: 20,
      fontStyle: "normal",
      fontWeight: "500",
      marginBottom: 5,
      marginTop: -20
  },
  icone_info: {
      marginLeft: 300,
      marginTop: -28
  },
  icone_calendar: {
    marginLeft: 0,
    marginTop: 5
  }
})
