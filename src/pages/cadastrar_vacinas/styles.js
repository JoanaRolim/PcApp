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
    padding: 22,
    width: 370,
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
    lineHeight: 22,
    marginBottom: 24
  },
  local: {
    marginTop: 8,
    fontSize: 17,
    marginBottom: 24,
    lineHeight: 22
  },
  data: {
    marginTop: 8,
    fontSize: 17,
    lineHeight: 22,
    marginBottom: 24
  },
    containerbutton: {
    marginTop: 473,
    backgroundColor: "#086281",
    width: "100%",
    height: 76,
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
