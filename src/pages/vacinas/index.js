import React,{useState, useEffect} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

import styles from './styles';
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function Vacinas({navigation}){

    const [token, setToken] = useState('');
    const [pet, setPet] = useState([]);
    const isFocused = useIsFocused();
    const [name, setName] = useState('')

    const [vacinas, setVacinas] = useState([]);
    const [clinicName, setClinicName] = useState('');

    async function onInit(){
      const storageClinic = await AsyncStorage.getItem('clinicId');
      setClinicName(storageClinic);

      const storageToken = await AsyncStorage.getItem('token');
      setToken(storageToken);

      getVaccines();
}

    async function getVaccines(){
        const storageId = await AsyncStorage.getItem('petId');
    
        try{
            const response = await api.get(`/pet/${storageId}/petvaccines`)
            setVacinas(response.data.data)

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
                <TouchableOpacity onPress = {()=>{navigation.navigate("CadastrarVacinas", {teste:null} )}} style={{ paddingRight: 20 }}>
                  <Feather name="plus-circle" size={27} color="#ffffffff" />
                </TouchableOpacity>
              )
        })
    },[navigation])

    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

            {vacinas.length > 0 ? vacinas.map(vacina=> ( 
                <View style = {styles.detalhes}>
                    <View key={vacina._id} >
                        <Text style = {styles.vacina}>Vacina: {vacina.vaccine} </Text>
                        <Text style = {styles.data}>Data: {vacina.date}</Text>
                        <Text style = {styles.local}>Local: {clinicName}</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress = { () => {navigation.navigate("EditarVacina" )}}
                    >
                        <Feather name = "edit" size = {24} color = "#000000" />
                    </TouchableOpacity>

                </View>)) : <Text>Sem vacinas cadastradas.</Text>
                }
            </View>
        </ScrollView>
    );
}