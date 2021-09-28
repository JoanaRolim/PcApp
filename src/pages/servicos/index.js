import React,{useEffect, useState} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator} from 'react-native';
    
import api from '../../services/api';
import styles from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Servicos({navigation}){    
    const [token, setToken] = useState('');
    const [services, setServices] = useState([]);
    const [name, setName] = useState('')
    const [clinicName, setClinicName] = useState('') 
    const [load, setLoad] = useState(true);

    const [role, setRole] = useState('');
    const [idUser, setIdUser] =  useState('');

    const [userClinic, setUserClinic] = useState('')
        
  async function onInit(){
      const storageToken = await AsyncStorage.getItem('token');
      setToken(storageToken);
    
      const storageName = await AsyncStorage.getItem('clinicName');
      setClinicName(storageName);
        
       await getServices();
        }
        
    async function getServices(){
      const storageId = await AsyncStorage.getItem('clinicId');

      const user = await AsyncStorage.getItem('clinicUser')
      setUserClinic(user);

      const id = await AsyncStorage.getItem('id');
      setIdUser(id);

      const role = await AsyncStorage.getItem('role');
      setRole(role);
  
            
        try{
            const response = await api.get(`clinic/${storageId}/services`)
            
            setServices(response.data.data)
         
        
        }catch(e){
           console.log(e.response.data);
        }
        setLoad(false);
   }

async function openService(service){
    await AsyncStorage.setItem('serviceId', service._id);
    console.log(service._id);

    navigation.navigate("DescricaoServicos")
}
        
    useEffect(() => {
       const unsubscribe = navigation.addListener("focus", ()=> {onInit()}); 
       
    },[navigation])
    

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                ( role === 'clinicOwner' && userClinic === idUser )  ?
                <TouchableOpacity onPress = {()=>{navigation.navigate("CadastrarServicos", {teste:null} )}} style={{ paddingRight: 20 }}>
                  <Feather name="plus-circle" size={27} color="#ffffffff" /></TouchableOpacity> : <></>
              )
        })
    },[navigation, role, userClinic, idUser])

    return(
        <ScrollView style = {styles.container} >
            { load ? <ActivityIndicator size="large" style={{marginTop: 10}} /> :
            <View style = {styles.descricao}>

             {services.length > 0 ? services.map(service=> ( 
                <View key={service._id} style = {styles.detalhes}>
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

                </View> )) :  <Text>Sem serviços cadastrados.</Text>}
                

            </View>}
        </ScrollView>
    );
}