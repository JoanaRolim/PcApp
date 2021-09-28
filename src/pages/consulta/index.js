import React,{useState, useEffect} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator} from 'react-native';

import styles from './styles';
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Consultas({navigation}){
        const [token, setToken] = useState('');
        const [name, setName] = useState('')
    
        const [consultas, setConsultas] = useState([]);
        const [clinicName, setClinicName] = useState('');
        const [service, setService] = useState('');
    
        const [load, setLoad] = useState(true);

        async function onInit(){
            const storageClinic = await AsyncStorage.getItem('clinicId');
            setClinicName(storageClinic);
      
            const storageToken = await AsyncStorage.getItem('token');
            setToken(storageToken);
      
            getConsultas();
      }
      
          async function getConsultas(){
              const storageId = await AsyncStorage.getItem('petId');
          
              try{
                  const response = await api.get(`/pet/${storageId}/agendamentos`)
                  setConsultas(response.data.data)
      
              }catch(e){
                console.log(e.response.data);
              }
              setLoad(false);
          }
      
      async function setConsultaId(consulta){
          AsyncStorage.setItem('idConsulta', consulta._id);
      }
      
      useEffect(() => {
          const unsubscribe = navigation.addListener("focus", ()=> {onInit()}); 
          
       },[navigation])
      

    return(
        <ScrollView style = {styles.container} >
              { load ? <ActivityIndicator size="large" style={{marginTop: 10}} /> :
            <View style = {styles.descricao}>

               { consultas.length > 0 ? consultas.map(consulta=> (  
               <View key={consulta._id} style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.clinica}>{consulta.clinic.name}</Text>
                        <Text style = {styles.data}>Data: {consulta.data}</Text>
                        <Text style = {styles.data}>Horário: {consulta.horario} </Text>
                        <Text style = {styles.servico}>Serviço: {consulta.service.name}</Text>
                    </View>

                </View>)) : <Text>Sem consultas marcadas. </Text>}

            </View>}
        </ScrollView>
    );
}