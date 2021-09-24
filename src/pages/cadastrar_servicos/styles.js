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
    marginTop: 200,
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
  },
  input: {
    fontSize: 17,
    marginBottom: 24,
    backgroundColor: "#E8E6E6",
    borderWidth: 1,
    width: 320,
    height: 36,
    borderRadius: 10,
    borderColor: "gray",
    paddingLeft: 7
  },
  inputTitle: {
    fontSize: 17,
    marginBottom: 5,
  },
  selector: {
    backgroundColor: "#E8E6E6",
    borderRadius: 10,
    padding: 5,
    width: 266,
    height: 40,
    color: "black",
    width: "100%",
    zIndex: 1,
    borderColor: "gray",
  },
})
