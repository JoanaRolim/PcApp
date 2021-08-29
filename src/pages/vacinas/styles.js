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
    lineHeight: 22,
    marginBottom: 24
  },
  local: {
    marginTop: 8,
    fontSize: 18,
    marginBottom: 24,
    lineHeight: 22
  },
  data: {
    marginTop: 8,
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 24
  }
})
