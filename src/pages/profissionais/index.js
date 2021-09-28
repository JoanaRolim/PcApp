import React,{useEffect, useState} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator} from 'react-native';

import api from '../../services/api';
import styles from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function Profissionais({navigation}){

        const [token, setToken] = useState('');
        const [vets, setVets] = useState([]);
        const isFocused = useIsFocused();
        const [name, setName] = useState('')
        const [clinicName, setClinicName] = useState('') 
        const [load, setLoad] = useState(true);

        const [role, setRole] = useState('');
        const [id, setId] =  useState('');
    
        async function onInit(){
          const storageToken = await AsyncStorage.getItem('token');
          setToken(storageToken);

          const storageName = await AsyncStorage.getItem('clinicName');
          setClinicName(storageName);

          const role = await AsyncStorage.getItem('role');
          setRole(role);
    
          const id = await AsyncStorage.getItem('id');
          setId(id);
    
          getVets();
    }
    
        async function getVets(){
            const storageId = await AsyncStorage.getItem('clinicId');
        
            try{
                const response = await api.get(`clinic/${storageId}/vets`)
                setVets(response.data.data)
    
            }catch(e){
              console.log(e.response.data);
            }
            setLoad(false);

        }

        
    async function setVetId(vet){
        await AsyncStorage.setItem('vetId', vet._id);
      
        navigation.navigate("EditarProfissional")
    }

    
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", ()=> {onInit()}); 
        
     },[navigation])
    
     
React.useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: () => (
            role === 'clinicOwner' && clinica.user === id  ?
           ( <TouchableOpacity onPress = {()=>{navigation.navigate("CadastrarProfissionais", {teste:null} )}} style={{ paddingRight: 20 }}>
              <Feather name="plus-circle" size={27} color="#ffffffff" />   </TouchableOpacity>
           ) : <Text></Text>
          )
        })
},[navigation])

    return(
        <ScrollView style = {styles.container} >
             { load ? <ActivityIndicator size="large" style={{marginTop: 10}} /> :
            <View style = {styles.descricao}>

                    {vets.length > 0 ? vets.map(vet=> (
                <View style = {styles.detalhes}>
                    <View key={vet._id}>
                        <Text style = {styles.nome}>{vet.name}</Text>
                        <Text style = {styles.crm}>CRMV: {vet.crmv}</Text>
                        <Text style = {styles.local}>{clinicName}</Text>
                    </View>
                    
                    {role === 'clinicOwner' && clinica.user === id  ? ( <TouchableOpacity 
                                      style = {styles.icone} 
                                      onPress = { () => setVetId(vet)} 
                                  >
                                      <Feather name = "edit" size = {24} color = "#000000" />
                                  </TouchableOpacity> ) : <Text></Text> }
                                  </View>
                                  )) :  <Text>Sem profissionais registrados.</Text>
                    }
            </View>}
        </ScrollView>
    );
}