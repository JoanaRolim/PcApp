import React,{useState, useEffect} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator} from 'react-native';

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

    const [load, setLoad] = useState(true);

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
        setLoad(false);
    }

async function setVacinaId(vacina){
    AsyncStorage.setItem('idVacina', vacina._id);

    navigation.navigate("EditarVacina" )
}

useEffect(() => {
    const unsubscribe = navigation.addListener("focus", ()=> {onInit()}); 
    
 },[navigation])


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
             { load ? <ActivityIndicator size="large" style={{marginTop: 10}} /> :
            <View style = {styles.descricao}>

            {vacinas.length > 0 ? vacinas.map(vacina=> ( 
                <View key={vacina._id} style = {styles.detalhes}>
                    <View  >
                        <Text style = {styles.vacina}>Vacina: {vacina.vaccine} </Text>
                        <Text style = {styles.data}>Data: {vacina.date}</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress = { () => setVacinaId(vacina)}
                    >
                        <Feather name = "edit" size = {24} color = "#000000" />
                    </TouchableOpacity>

                </View>)) : <Text>Sem vacinas cadastradas.</Text>
                }
            </View> }
        </ScrollView>
    );
}