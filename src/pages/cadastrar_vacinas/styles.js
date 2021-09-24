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
    backgroundColor: "#D0EFE6",
    marginBottom: 15,
    marginTop: 18,
    marginLeft: 7,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  vacina: {
    marginTop: 8,
    fontSize: 17,
    marginBottom: 24
  },
  local: {
    marginTop: 8,
    fontSize: 17,
    marginBottom: 24,
  },
  data: {
    marginTop: 8,
    fontSize: 17,
    marginBottom: 24
  },
    containerbutton: {
    paddingTop: 20,
    paddingBottom: 30,
    marginTop: 470,
    backgroundColor: "#086281",
    width: "100%",
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
  }
})
