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
    width: 380,
    height: 210,
    borderRadius: 10,
    backgroundColor: "#7AE8C7",
    marginTop: 15,
    padding: 29,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  nome: {
    fontSize: 17,
    lineHeight: 19,
    marginBottom: 24
  },
  profissional: {
    fontSize: 17,
    lineHeight: 19,
    marginBottom: 24
  },
  infos: {
    fontSize: 17,
    lineHeight: 19,
    marginBottom: 24
  },
  indicacao: {
    fontSize: 17,
    lineHeight: 19,
    marginBottom: 24
  },
    containerbutton: {
    marginTop: 473,
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
