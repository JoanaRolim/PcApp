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
    backgroundColor: "#FAD3CB",
    marginTop: 15,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nome: {
    fontSize: 17,
    marginBottom: 24
  },
  crm: {
    fontSize: 17,
    marginBottom: 24
  },
    containerbutton: {
    marginTop: 550,
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
