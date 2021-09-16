import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1
  
  },
  nome_usuario:{
    paddingVertical: 25,
    alignItems: "center",
    
  },
  text_nome_usuario: {
    fontSize: 25,
    fontWeight: "bold",
  },
  menu:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#DEF0F6',
      width: '100%',
      marginBottom: 20,
      
  },
    text_menu: {
        padding: 10,
        fontSize: 20,
    },
    pets:{
      flex: 1,
      backgroundColor: '#FAD3CB',
      marginVertical: 10,
      marginHorizontal: 20,
      marginTop: 10,
      borderRadius: 10,
      marginLeft: 25,
      flexDirection: 'row',
      padding: 17,
    },
    text_nome: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
        fontStyle: "normal"
    },
    text_infos: {
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal"
    },
    icone: {
      
    },
    list: {
        alignSelf: 'center',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    foto: {
      borderRadius: 200,
      marginTop: 30
    },
    containerFoto: {
      alignItems: 'center'
    },
})
