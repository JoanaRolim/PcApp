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
    backgroundColor: "#F08080",
    marginTop: 15,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
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
    containerbutton: {
    marginTop: 220,
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
