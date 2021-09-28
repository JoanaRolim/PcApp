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
        marginLeft: 28,
        flexDirection: 'row',
        padding: 15
    },
    text_nome: {
      marginLeft: 22,
        fontSize: 17,
        fontStyle: "normal",
        fontWeight: "bold",
        marginBottom: 5,
    },
    text_idade: {
        fontSize: 17,
        marginLeft: 22,
        fontStyle: "normal",
        fontWeight:"500",
    },
    icone: {
        display: 'flex',
        width: "100%"
        
    },
    list: {
        alignSelf: 'center',
    },
    pets_text: {
        width: "90%"
    },
    foto: {
      borderRadius: 880,
      marginTop: 30,
      width: "35%",
      height: 150
    },
    containerFoto: {
      alignItems: 'center'
    },
    fotoPet: {
      borderRadius: 220,
      marginLeft: 15
    },
})
