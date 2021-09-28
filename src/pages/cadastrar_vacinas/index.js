import React, {useEffect, useState} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground, ActivityIndicator} from 'react-native';

import styles from './styles';

import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function CadastarVacinas({navigation,route}){
    const isFocused = useIsFocused();
    const [load, setLoad] = useState(true);
  
    const [vaccine, setVaccine] = useState();
    const [date, setDate] = useState();


    async function onInit(){
      addVaccine();
  }
    
  
    async function addVaccine() {
      const petId = await AsyncStorage.getItem('petId');

     const data = {
        vaccine,
        date
      }

        try {
        const response = await api.post(`/petvaccine/${petId}`, data);

        console.log(response);
              if (response.data) {
                navigation.navigate("Vacinas")
              }
        } catch (e) {
          console.log(e);
        }
        setLoad(false);
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
                        <TextInput value={vaccine} onChangeText={value => setVaccine(value)} style={styles.input} placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >Data:</Text>
                        <TextInput value={date} onChangeText={value => setDate(value)} style = {styles.input} placeholder="dd/mm/aaaa"  placeholderTextColor="gray"></TextInput>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.containerbutton}   onPress = { () => addVaccine()}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>
          </View>}
        </ScrollView>
    );
}