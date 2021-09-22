import { StyleSheet } from "react-native"
import { color } from "react-native-reanimated"

export default StyleSheet.create({
  header: {
    paddingTop: 35,
    paddingBottom: 20,
    marginBottom: 10,
    width: "100%",
    height: 85,
    alignItems: "center",
    backgroundColor: "#086281"
  },
  headerText: {
    fontSize: 30,
    color: "#ffffff"
  },
  descricao: {
    margin: 24,
    lineHeight: 30
  },
  detalhes: {},
  containerinput: {
    padding: 10,
    fontSize: 20
  },
  input: {
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    width: 360,
    height: 24,
    backgroundColor: "#E8E6E6",
    borderRadius: 5,
    height: 40
  },
  foto: {
    padding: 5,
    fontSize: 20,
    borderRadius: 180
  },
  containerbutton: {
    marginTop: 40,
    paddingTop: 20,
    backgroundColor: "#7AE8C7",
    paddingBottom: 30,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: 'row',
  },
  button: {
    fontSize: 24,
    fontWeight: "bold",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
  },
  containerfoto: {
    alignItems: "center"
  },
  foto: {
    backgroundColor: "black",
    width: 125,
    height: 116,
    borderRadius: 189,
    padding: 10
  },
  containericon: {
    flexDirection: "row"
  },
  icon: {
    marginTop: 12
  },
  
})
