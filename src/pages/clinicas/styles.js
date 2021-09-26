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
    padding: 22,
    borderRadius: 10,
    backgroundColor: "#FFA7A7",
    marginTop: 15,
    marginLeft: 15,
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  nome: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2
  },
  crm: {
    fontSize: 15,
  },
  local: {
    fontSize: 15,
  }
})
