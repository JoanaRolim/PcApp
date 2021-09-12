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
    backgroundColor: "#7AE8C7",
    marginTop: 20,
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0
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
    marginTop: 455,
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
