import { StyleSheet } from "react-native"
import { useFonts, Quicksand_700Bold, Quicksand_400Regular } from "@expo-google-fonts/dev"

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
    width: 210,
    height: 215
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
    fontFamily: "Quicksand_400Regular",
    top: 20
  },
  containeremailsenha: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30
  },
  containeremail: {
    padding: 20
  },
  email: {
    paddingBottom: 10,
    color: "black",
    fontSize: 24,
    fontFamily: " Quicksand_400Regular"
  },
  input: {
    backgroundColor: "#DEF0F6",
    borderRadius: 5,
    padding: 5,
    width: 266,
    height: 30,
    color: "black",
    width: "100%"
  },
  containersenha: {
    padding: 20
  },
  senha: {
    paddingBottom: 10,
    color: "black",
    fontSize: 24
  },
  containerbutton: {
    position: "absolute",
    width: 267,
    height: 53,
    left: 75,
    top: 385,
    backgroundColor: "#FE395D",
    borderRadius: 25,
    padding: 5,
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
  icon: {
    position: "absolute",
    top: 4,
    left: 7
  },
  mail: {
    position: "absolute",
    top: 63,
    left: 27
  }
})
