import React,{useEffect, useState} from "react"
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { View, Image, Text, ScrollView, TouchableOpacity, ImageBackground, ScrollViewComponent, Button, ActivityIndicator } from "react-native"

import api from '../../services/api';
import styles from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function DescricaoServicos({ navigation }) {
    const [token, setToken] = useState('');
    const [service, setService] = useState([]);
    const isFocused = useIsFocused();
    const [id, setId] = useState();
    const [load, setLoad] = useState(true);

    const [role, setRole] = useState('')
    const [idUser, setIdUser] = useState('')

   async function onInit(){
       getService();

    const role = await AsyncStorage.getItem('role');
    setRole(role);

    const idUser = await AsyncStorage.getItem('id');
    setIdUser(idUser);
}

    async function getService(){
        const storageId = await AsyncStorage.getItem('serviceId');

        console.log(id);

        try{
            const response = await api.get(`service/${storageId}`)

           setService(response.data.data)


        }catch(e){
          console.log(e.response.data);
        }
        setLoad(false);
    }

        
    async function setServiceId(service){
      await AsyncStorage.setItem('serviceId', service._id);
    
      navigation.navigate("EditarServico")
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", ()=> {onInit()}); 
    
 },[navigation])


  return (
    <ScrollView  style = {styles.containerClinica} >

 { load ? <ActivityIndicator size="large" style={{marginTop: 10}} /> :
      <View key={service._id}>
        <View style = {styles.container_eco}>
            <Text style = {styles.headerText}>
                {service.name}
            </Text>
            {role === 'clinicOwner' && clinica.user === idUser  ? 
            ( <TouchableOpacity style = {styles.icone} onPress ={()=> setServiceId(service)} >
                    <Feather name = "edit" size = {19} color = "#000000" />
            </TouchableOpacity>) : <Text></Text> }
        </View>
          
    {  service&&   
      <View style={styles.detalhes}>
            
            <View>
              <Text style = {styles.infos}>Profissionais responsáveis:</Text>
              {service.vet && service.vet.name && <Text style = {styles.descricao}>{service.vet.name}</Text>}
          </View>

            <View>
              <Text style = {styles.infos}>Informações adicionais:</Text>
              <Text style = {styles.descricao}>{service.description}</Text>
          </View>

          <View>
              <Text style = {styles.infos}>Custo:</Text>
              <Text style = {styles.descricao}>R$ {service.cost}</Text>
          </View>

            <View>
              <Text style = {styles.infos}>Indicações:</Text>
              <Text style = {styles.descricao}>{service.indications}</Text>
          </View>

        </View>}

        <View style = {styles.top}>
          <View style = {styles.agendamento}>
                    <View >
                    <TouchableOpacity onPress = { () => {navigation.navigate("DescricaoServicos")} }>
                    <FontAwesome style = {styles.icone_calendar} name="calendar" size={20} color="black"/>
                    </TouchableOpacity>
                        <Text style = {styles.text} >
                            Agendamento
                        </Text>
                    </View>
                    <View style = {styles.list}>
                        <TouchableOpacity onPress = { () => {navigation.navigate("CadastrarAgendamento")} }>
                            <View style = {styles.icone_info} >
                                <Feather name="more-vertical" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                </View>
                </View>}
    </ScrollView>
  )
}
