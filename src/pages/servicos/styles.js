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
    width: 370,
    height: 90,
    borderRadius: 10,
    backgroundColor: "#7AE8C7",
    marginTop: 15,
    marginLeft: 6,
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  nome: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 19,
    marginBottom: 2
  },
  crm: {
    fontSize: 15,
    lineHeight: 19,
  },
  local: {
    fontSize: 15,
    lineHeight: 19,
  }
})
