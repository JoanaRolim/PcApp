import { Rowdies_300Light } from "@expo-google-fonts/dev"
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
    margin: 40,
    alignItems: "center"
  },
  mensagem: {
    color: "black",
    fontSize: 33,
    fontWeight: "bold",
  },
  containeremailsenha: {
    paddingHorizontal:20,
    paddingBottom: 30
  },
  email: {
    paddingBottom: 10,
    color: "black",
    fontSize: 24,
  },
  input: {
    flexDirection: "row",
    backgroundColor: "#DEF0F6",
    borderRadius: 5,
    padding: 5,
    color: "black",
    width: "100%"
  },
  senha: {
    paddingBottom: 10,
    color: "black",
    fontSize: 24
  },
  containerbutton: {
    backgroundColor: "#FE395D",
    borderRadius: 25,
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 55,
    fontWeight: "bold",
    alignContent: "center"
  },
  containercadastro: {
    padding: 20,
    alignItems: "center"
  },
  cadastrotext: {
    color: "black",
    fontSize: 15,
    textDecorationLine: "underline",
    top: 40,
    right: 6
  },
  inputArea: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center"
  },

})
