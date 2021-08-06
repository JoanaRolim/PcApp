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
    marginTop: 70,
  },
  fundocor: {
    padding: 20
  },
  containermsg: {
    margin: 20,
    alignItems: "center",
    padding: 5,
  },
  mensagem: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold"
  },
  containeremailsenha: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    padding: 5
  },
  email: {
    paddingBottom: 5,
    color: "black",
    fontSize: 24
  },
  input: {
    flexDirection: "row",
    backgroundColor: "#DEF0F6",
    borderRadius: 5,
    padding: 5,
    color: "black",
    width: "100%",
    marginBottom: 10,
  },
  senha: {
    paddingBottom: 5,
    color: "black",
    fontSize: 24
  },
  containerbutton: {
    marginTop: 30,
    marginLeft: 20,
    marginRight:20,
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

  tipo:{
    paddingBottom: 5,
    color: "black",
    fontSize: 24
  }
})
