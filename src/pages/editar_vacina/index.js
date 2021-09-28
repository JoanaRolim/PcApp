import React,{useEffect, useState} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground, ActivityIndicator} from 'react-native';

import styles from './styles';
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditarVacina({navigation,route}){
    const [vacina, setVacina] = useState();
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const [load, setLoad] = useState(true);

    async function onInit(){
        getVaccineInfo();
    }

    async function getVaccineInfo(){
        const storageId = await AsyncStorage.getItem('idVacina');
    
        try{
            const response = await api.get(`/petvaccine/${storageId}`)

            setName(response.data.data.vaccine)
            setDate(response.data.data.date)

        }catch(e){
          console.log(e.response.data);
        }
        setLoad(false);
    }

    async function updateVaccine(){
        const id = await AsyncStorage.getItem('idVacina');
    
         const data = {
            vaccine: name,
            date,
            id
        }

        console.log(data);
        try{
            const response = await api.put(`petvaccine/${id}`, data)
            console.log('teste');
            console.log(response.data.data);

            if(response.data){
               navigation.navigate("Vacinas");
            }
        }catch(e){
          console.log(e.response.data);
        }
    } 
    
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", ()=> {onInit()}); 
        
     },[navigation])

    return(
        <ScrollView style = {styles.container} >
            { load ? <ActivityIndicator size="large" style={{marginTop: 10}} /> :
        <View>
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>
                    
                <View>                      
                        <Text style = {styles.inputTitle}  >Vacina:</Text>
                        <TextInput value={name} onChangeText={value=> setName(value)} style={styles.input} placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >Data:</Text>
                        <TextInput value={date} onChangeText={value=> setDate(value)} style = {styles.input} placeholder="dd/mm/aaaa"  placeholderTextColor="gray"></TextInput>
                    </View>

                </View>
            </View>
            <TouchableOpacity style={styles.containerbutton}   onPress = { () => updateVaccine() }>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>
          </View>}
        </ScrollView>
    );
}