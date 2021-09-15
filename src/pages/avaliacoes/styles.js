import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    marginTop: 30,
    fontSize: 48
  },
  descricao: {
    margin: 24
  },
  detalhes: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#FCFF78",
    marginTop: 15,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  nome: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8
  },
  avaliacao: {
    fontSize: 15,
  },
  icone: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
  },
  nota: {
      fontSize: 17
  }
})
