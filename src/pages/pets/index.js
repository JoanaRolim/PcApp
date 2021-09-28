import React,{useState, useEffect} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';

import api from '../../services/api';
import styles from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function Pets({navigation}){
    const [token, setToken] = useState('');
    const [pet, setPet] = useState([]);
    const isFocused = useIsFocused();
    const [name, setName] = useState('')
    const [load, setLoad] = useState(true);

    async function onInit(){
      const storageToken = await AsyncStorage.getItem('token');
      setToken(storageToken);

      getPet();
}

    async function getPet(){
        const storageId = await AsyncStorage.getItem('petId');
    
        try{
            const response = await api.get(`pet/${storageId}`)
            setPet(response.data.data)

        }catch(e){
          console.log(e.response.data);
        }
        setLoad(false);
    }

    async function setPetId(pet){
        await AsyncStorage.setItem('petId', pet._id);
      

        navigation.navigate("Vacinas")
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", ()=> {onInit()}); 
        
     },[navigation])

    return(
        <ScrollView  style = {styles.container} >

 { load ? <ActivityIndicator size="large" style={{marginTop: 10}} /> :
<View>
            <View>
                <Text style = {styles.headerText}>
                    {pet.name}
                </Text>
                <Text style = {styles.headerBellow}>
                   {pet.breed}
                </Text>
            </View>
            <View style = {styles.descricao}>
                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.raca}>Raça: {pet.breed}</Text>
                        <Text style = {styles.idade}>Idade: {pet.age} anos </Text>
                        <Text style = {styles.peso}>Peso: {pet.weight} kg</Text>
                        <Text style = {styles.altura}>Altura: {pet.height} cm</Text>
                        <Text style = {styles.alergia}>Alergias: {pet.allergy}</Text>
                        <Text style = {styles.castracao}>Castração: {pet.castracao}</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress ={()=>{navigation.navigate("EditarPet")} } 
                    >
                        <Feather name = "edit" size = {24} color = "#000000" />
                   </TouchableOpacity>
                </View>
            </View>

            <View style = {styles.vacinas}>
                <View>
                    <Text style = {styles.text_vacina} >
                        Vacinas
                    </Text>
                </View>
                <View style = {styles.list}>
                    <TouchableOpacity onPress = { () => setPetId(pet) }>
                    <Feather  style = {styles.icone} name="more-vertical" size={21} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style = {styles.historico}>
                <View>
                    <Text style = {styles.text_historico} >
                        Histórico de Agendamentos
                    </Text>
                </View>
                <View style = {styles.list}>
                    <TouchableOpacity onPress = { () => {navigation.navigate("Consultas")} }>
                    <Feather style = {styles.icone} name="more-vertical" size={21} color="black" />
                        </TouchableOpacity>
                </View>
            </View>

        </View>}
        </ScrollView>
    );
}