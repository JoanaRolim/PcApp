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
    backgroundColor: "#FCFF78",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  nome: {
    fontSize: 17,
    marginBottom: 24
  },
  avaliacao: {
    fontSize: 17,
    marginBottom: 24
  },
  nota: {
    fontSize: 17,
    marginBottom: 24
  },
    containerbutton: {
    marginVertical: 535,
    backgroundColor: "#086281",
    width: "100%",
    paddingTop: 20,
    paddingBottom: 30,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: 'row',
  },
  button: {
    fontSize: 24,
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
