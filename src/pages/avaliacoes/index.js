import React,{useEffect, useState} from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from "react-native";

import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';
import api from '../../services/api'

export default function Avaliacoes({ navigation }) {
  const [avaliacoes, setAvaliacoes] = useState([]);

  const [token, setToken] = useState('');
  const [id, setId] = useState('');
  const isFocused = useIsFocused();
  const [name, setName] = useState('')

  const [clinicName, setClinicName] = useState('') 
    
  async function onInit(){
    const storageToken = await AsyncStorage.getItem('token');
    setToken(storageToken);

    const storageClinic = await AsyncStorage.getItem('clinicId');
    setClinicName(storageClinic);

    getRatings();
}

  async function getRatings(){
      const storageId = await AsyncStorage.getItem('id');
      setId(storageId);

      const user = await AsyncStorage.getItem('name');
      setName(user)

      try{
          const response = await api.get('/review')
          
          setAvaliacoes(response.data.data)

      }catch(e){
        console.log(e.response.data);
      }
  }

  useEffect(() => {
      onInit()
  },[isFocused])

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress = {()=>{navigation.navigate("CadastrarAvaliacoes", {teste:null} )}} style={{ paddingRight: 20 }}>
                  <Feather name="plus-circle" size={27} color="#ffffffff" />
                </TouchableOpacity>
              )
        })
    },[navigation])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.descricao}>
               { avaliacoes.length > 0 ? avaliacoes.map(avaliacao=> ( 
               <View key={avaliacao._id} style={styles.detalhes}>
                        <View>
                            <Text style={styles.nome}>
                                {name}
                            </Text>
                            <Text style={styles.avaliacao}>
                                {avaliacao.text}
                            </Text>
                        </View>

                        <FontAwesome name="star" size={15} color="black">
                            <Text style={styles.nota}>{avaliacao.rating}</Text>
                        </FontAwesome>
                </View> )):  <Text>Sem avaliações registradas.</Text> }
            </View>
        </ScrollView>
    );
}
