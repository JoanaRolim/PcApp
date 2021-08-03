import { StyleSheet } from "react-native"

export default StyleSheet.create({
  containerClinica: {
    flex: 1
  },
  backgroundImage: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "30%"
  },
  circle: {
    marginTop: -30,
    marginRight: 30,
    marginLeft: 360
  },
  header: {
    justifyContent: "center",
    alignItems: "center"
  },
  descricao: {
    marginTop: 24
  },
  detalhes: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#89BCD2",
    margin: 17,
    marginBottom: 0,
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  nomeclinica: {
    marginTop: 45,
    fontSize: 18,
    marginLeft: -190,
    marginBottom: 0
  },
  endereco: {
    marginTop: 8,
    fontSize: 18,
    marginLeft: -190,
    marginBottom: 0
  },
  fone: {
    marginTop: 8,
    fontSize: 18,
    marginLeft: -190,
    marginBottom: 10
  }
})
