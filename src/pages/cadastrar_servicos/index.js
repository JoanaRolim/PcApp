import React, { useState, useEffect } from 'react';
import { Feather} from '@expo/vector-icons';
import { View, Image, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown"
import DropDownPicker from "react-native-dropdown-picker"
import {Picker} from '@react-native-picker/picker';

import styles from './styles';

import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function Servicos({navigation,route}){
    const isFocused = useIsFocused();

    const [vets, setVets] = useState([]);
    const [clinicName, setClinicName] = useState('') 
    const [token, setToken] = useState('')

    const [vet, setVet] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');
    const [indications, setIndications] = useState('');
  
    async function addService() {
      const clinicId = await AsyncStorage.getItem('clinicId');
      console.log(vet, name, description, cost, indications);

       const data = {
        name,
        description,
        cost,
        indications,
        vet
      }

      console.log('teste');
      console.log(data);

        try {
        const response = await api.post(`service/${clinicId}`, data);

        console.log(response);
              if (response.data) {
              navigation.navigate("Servicos");
              }
        } catch (e) {
          console.log(e);
        }
  }

  async function onInit(){
    const storageToken = await AsyncStorage.getItem('token');
    setToken(storageToken);

    const storageName = await AsyncStorage.getItem('clinicName');
    setClinicName(storageName);

    getVets();
    addService();
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

    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>

                    <View>
                    <Text style = {styles.inputTitle}  >Nome do Serviço:</Text>
                        <TextInput value={name} onChangeText={value => setName(value)} style={styles.input}  placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >Descrição:</Text>
                        <TextInput value={description} onChangeText={value => setDescription(value)} style={styles.input} placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >Custo:</Text>
                        <TextInput  value={cost} onChangeText={value => setCost(value)} style ={styles.input}  placeholder="R$" keyboardType="numbers-and-punctuation" placeholderTextColor="gray"></TextInput>
                        <Text style = {styles.inputTitle}  >Indicações:</Text>
                        <TextInput  value={indications} onChangeText={value => setIndications(value)} style = {styles.input} placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >Profissional Responsável:</Text>
                        <Picker
                        selectedValue={vet}
                        onValueChange={(itemValue, itemIndex) =>
                          setVet(itemValue)
                        }>
                        
                       { vets.map(vet => (
                       <Picker.Item label={vet.name} value={vet._id} />
                       ))}
                        </Picker>
                     
                    </View>

                </View>

            </View>
            <TouchableOpacity style={styles.containerbutton}   onPress = { () => addService()}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>

        </ScrollView>
    );
}