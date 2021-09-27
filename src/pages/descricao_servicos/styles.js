import { StyleSheet } from "react-native"

export default StyleSheet.create({
  containerClinica: {
    flex: 1
  },
    headerText:{
        marginLeft: 35,
        fontSize: 21,
        fontStyle: 'normal',
        textTransform: "uppercase",
        fontWeight: 'bold',
        alignSelf: "auto",
        marginTop: 50
    },
    icone: {
        marginTop: 50,
    },
  detalhes: {
    flex: 1,
    fontStyle: "normal",
    marginLeft: 35,
    marginEnd: 18
  },
    infos: {
      marginTop: 35,
      fontSize: 15,
      fontWeight: "bold"
    },
    top: {
      marginVertical: 40,
    },
    agendamento:{
      flex: 1,
      backgroundColor: '#D0EFE6',
      borderRadius: 10,
      marginVertical: 10,
      marginHorizontal: 25,
      textAlign: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 22

  },
  text: {
      marginLeft: 25,
      fontSize: 17,
      fontStyle: "normal",
      fontWeight: "500",
      marginBottom: 5,
      marginTop: -20
  },
  icone_info: {
    marginHorizontal: 5,
  },
  icone_calendar: {
    marginEnd: 10
  },
  container_eco: {
      marginRight: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
  }
})
