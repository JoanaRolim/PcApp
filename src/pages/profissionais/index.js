import React,{useEffect, useState} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

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
    
        async function onInit(){
          const storageToken = await AsyncStorage.getItem('token');
          setToken(storageToken);

          const storageName = await AsyncStorage.getItem('clinicName');
          setClinicName(storageName);
    
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
        }
    
        useEffect(() => {
            onInit()
        },[isFocused])

React.useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress = {()=>{navigation.navigate("CadastrarProfissionais", {teste:null} )}} style={{ paddingRight: 20 }}>
              <Feather name="plus-circle" size={27} color="#ffffffff" />
            </TouchableOpacity>
          )
    })
},[navigation])

    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                    {vets.length > 0 ? vets.map(vet=> (
                <View style = {styles.detalhes}>
                    <View key={vet._id}>
                        <Text style = {styles.nome}>{vet.name}</Text>
                        <Text style = {styles.crm}>CRMV: {vet.crmv}</Text>
                        <Text style = {styles.local}>{clinicName}</Text>
                    </View>
                    
                    <TouchableOpacity 
                                      style = {styles.icone} 
                                      onPress = { () => {navigation.navigate("EditarProfissional", {teste:"teste"} )}} 
                                  >
                                      <Feather name = "edit" size = {24} color = "#000000" />
                                  </TouchableOpacity>
                                  </View>
                                  )) :  <Text>Sem profissionais registrados.</Text>
                    }
            </View>
        </ScrollView>
    );
}