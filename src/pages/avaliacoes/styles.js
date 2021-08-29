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
    padding: 22,
    width: 386,
    height: 130,
    borderRadius: 10,
    backgroundColor: "#FCFF78",
    marginTop: 15,
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  nome: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8
  },
  avaliacao: {
    fontSize: 15,
    lineHeight: 19,
  },
  icone: {
    justifyContent: "space-between"
  },
  nota: {
      fontSize: 17
  }
})
