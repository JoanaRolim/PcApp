import React,{useEffect, useState} from "react"
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { View, Image, Text, ScrollView, TouchableOpacity, ImageBackground, ScrollViewComponent, Button } from "react-native"

import api from '../../services/api';
import styles from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';


export default function DescricaoServicos({ navigation }) {

    const [token, setToken] = useState('');
    const [service, setService] = useState([]);
    const isFocused = useIsFocused();
    const [name, setName] = useState('')

    async function onInit(){
      const storageToken = await AsyncStorage.getItem('token');
      setToken(storageToken);

      getService();
}

    async function getService(){
        const storageId = await AsyncStorage.getItem('serviceId');
    
        try{
            const response = await api.get(`service/${storageId}`)
            console.log(response.data.data);
            setService(response.data.data)

        }catch(e){
          console.log(e.response.data);
        }
    }

    useEffect(() => {
        onInit()
    },[isFocused])

  return (
    <ScrollView  style = {styles.containerClinica} >

    <View style = {styles.container_eco}>
        <Text style = {styles.headerText}>
            {service.name}
        </Text>
            <TouchableOpacity style = {styles.icone} onPress ={()=>{navigation.navigate("EditarServico")}} >
                <Feather name = "edit" size = {19} color = "#000000" />
        </TouchableOpacity>
    </View>
      
      <View style={styles.detalhes}>
        
        <View>
          <Text style = {styles.infos}>Profissionais responsáveis:</Text>
          <Text style = {styles.descricao}> {service.vet.name}</Text>
      </View>

        <View>
          <Text style = {styles.infos}>Informações adicionais:</Text>
          <Text style = {styles.descricao}>{service.description}</Text>
      </View>

      <View>
          <Text style = {styles.infos}>Custo:</Text>
          <Text style = {styles.descricao}> R$ {service.cost}</Text>
      </View>

        <View>
          <Text style = {styles.infos}>Indicações:</Text>
          <Text style = {styles.descricao}>{service.indications}</Text>
      </View>

    </View>

    <View style = {styles.top}>
      <View style = {styles.agendamento}>
                <View >
                <TouchableOpacity onPress = { () => {navigation.navigate("")} }>
                <FontAwesome style = {styles.icone_calendar} name="calendar" size={20} color="black"/>
                </TouchableOpacity>
                    <Text style = {styles.text} >
                        Agendamento
                    </Text>
                </View>
                <View style = {styles.list}>
                    <TouchableOpacity onPress = { () => {navigation.navigate("Profissionais")} }>
                        <View style = {styles.icone_info} >
                            <Feather name="more-vertical" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            </View>
    </ScrollView>
  )
}
