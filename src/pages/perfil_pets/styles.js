import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1
  
  },
  nome_usuario:{
    paddingVertical: 50,
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
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    text_nome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text_idade: {
        fontSize: 17,
    },
    icone: {
        flexDirection: 'row',
    },
    list: {
        alignSelf: 'center',
    },
    pets_text: {
        
    },
})
