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
    width: 390,
    height: 170,
    borderRadius: 10,
    backgroundColor: "#FCFF78",
    marginTop: 15,
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  nome: {
    fontSize: 17,
    lineHeight: 19,
    marginBottom: 24
  },
  avaliacao: {
    fontSize: 17,
    lineHeight: 19,
    marginBottom: 24
  },
  nota: {
    fontSize: 17,
    lineHeight: 19,
    marginBottom: 24
  },
    containerbutton: {
    marginTop: 514,
    backgroundColor: "#086281",
    width: "100%",
    height: 79,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: 'row',
  },
  button: {
    fontSize: 24,
    lineHeight: 30,
    color: "white",
    fontWeight: "bold",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  containericon: {
    flexDirection: "row"
  },
  icon: {
    marginTop: 12
  }
})
