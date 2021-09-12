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
    backgroundColor: "#D0EFE6",
    marginBottom: 15,
    marginTop: 18,
    marginLeft: 7,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  vacina: {
    marginTop: 8,
    fontSize: 18,
    marginBottom: 24
  },
  local: {
    marginTop: 8,
    fontSize: 18,
    marginBottom: 24,
  },
  data: {
    marginTop: 8,
    fontSize: 18,
    marginBottom: 24
  }
})
