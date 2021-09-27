import React,{useEffect, useState} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
    
import api from '../../services/api';
import styles from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function Servicos({navigation}){    
    const [token, setToken] = useState('');
    const [services, setServices] = useState([]);
    const isFocused = useIsFocused();
    const [name, setName] = useState('')
    const [clinicName, setClinicName] = useState('') 
        
  async function onInit(){
      const storageToken = await AsyncStorage.getItem('token');
      setToken(storageToken);
    
      const storageName = await AsyncStorage.getItem('clinicName');
      setClinicName(storageName);
        
        getServices();
        }
        
    async function getServices(){
      const storageId = await AsyncStorage.getItem('clinicId');
            
        try{
            const response = await api.get(`clinic/${storageId}/services`)
            
            setServices(response.data.data)
        
        }catch(e){
           console.log(e.response.data);
        }
   }

async function openService(service){
    await AsyncStorage.setItem('serviceId', service._id);
    await AsyncStorage.setItem('serviceName', service.name);

    navigation.navigate("DescricaoServicos")
}
        
    useEffect(() => {
        onInit()
    },[isFocused])
    

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress = {()=>{navigation.navigate("CadastrarServicos", {teste:null} )}} style={{ paddingRight: 20 }}>
                  <Feather name="plus-circle" size={27} color="#ffffffff" />
                </TouchableOpacity>
              )
        })
    },[navigation])

    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

             {services.length > 0 ? services.map(service=> ( 
                <View style = {styles.detalhes}>
                    <View>
                        <Text style = {styles.nome} >{service.name}</Text>
                        <Text style = {styles.local}>{clinicName}</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress = { () => openService(service)}
                    >
                        <Feather name = "more-vertical" size = {24} color = "#000000" />
                    </TouchableOpacity>

                </View> )) :  <Text>Sem serviços cadastrados.</Text>
                } 

            </View>
        </ScrollView>
    );
}