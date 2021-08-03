import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  background: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  fundo: {
    resizeMode: "cover",
    top: 45,
    width: 215,
    height: 210
  },
  fundocor: {
    padding: 20
  },
  containermsg: {
    margin: 20,
    alignItems: "center",
    padding: 5,
    top: 20
  },
  mensagem: {
    color: "black",
    fontSize: 30,
    fontFamily: "Quicksand",
    fontWeight: "bold"
  },
  containeremailsenha: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    padding: 5
  },
  containeremail: {
    padding: 10
  },
  email: {
    paddingBottom: 5,
    color: "black",
    fontSize: 24
  },
  input: {
    backgroundColor: "#DEF0F6",
    borderRadius: 5,
    padding: 10,
    width: 266,
    height: 30,
    color: "black",
    width: "100%"
  },
  containersenha: {
    padding: 10,
    width: 350
  },
  senha: {
    paddingBottom: 5,
    color: "black",
    fontSize: 24
  },
  containerbutton: {
    position: "absolute",
    width: 267,
    height: 53,
    left: 75,
    top: 505,
    backgroundColor: "#7AEBC7",
    borderRadius: 25,
    padding: 5,
    fontSize: 55,
    fontWeight: "bold",
    alignContent: "center"
  },
  inputArea: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center"
  },
  icon: {
    position: "absolute",
    top: 4,
    left: 6
  },
  selector: {
    backgroundColor: "#DEF0F6",
    borderRadius: 5,
    padding: 5,
    width: 266,
    height: 40,
    color: "black",
    width: "100%"
  },
  user: {
    position: "absolute",
    top: 49,
    left: 16
  },
  mail: {
    position: "absolute",
    top: 49,
    left: 16
  }
})
