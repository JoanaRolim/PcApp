import React,{useEffect, useState} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground, ActivityIndicator} from 'react-native';
import SelectDropdown from "react-native-select-dropdown"
import DropDownPicker from "react-native-dropdown-picker"

import styles from './styles';
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function EditarProfissional({navigation,route}){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [cpf, setCpf] = useState();
    const [crmv, setCrmv] = useState();
    const [phone, setPhone] = useState();

  const [vet, setVet] = useState();
  const isFocused = useIsFocused();

  const [load, setLoad] = useState(true);

  async function onInit(){
      getVetInfo();
  }

      async function getVetInfo(){
        const storageId = await AsyncStorage.getItem('vetId');
    
        try{
            const response = await api.get(`vet/${storageId}`)
          
            setName(response.data.data.name)
            setEmail(response.data.data.email)
            setCpf(response.data.data.cpf)
            setCrmv(response.data.data.crmv)
            setPhone(response.data.data.phone)

        }catch(e){
          console.log(e.response.data);
        }
        setLoad(false);

    }
  
      async function updateVet(){
          const id = await AsyncStorage.getItem('vetId');
      
           const data = {
            name,
            email,
            cpf,
            crmv,
            phone,
            id
           }
  
          console.log(data);
          try{
              const response = await api.put(`/vet/${id}`, data)
  
              if(response.data.data){
                 navigation.navigate("Profissionais");
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
                        <Text style = {styles.inputTitle}  >Nome do Profissional:</Text>
                        <TextInput style = {styles.input} value={name} onChangeText={value => setName(value)} style={styles.input} placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >Email do Profissional:</Text>
                        <TextInput style = {styles.input} value={email} onChangeText={value => setEmail(value)} style={styles.input} placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >CPF do Profissional:</Text>
                        <TextInput style = {styles.input} value={cpf} onChangeText={value => setCpf(value)} style={styles.input} placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >CRMV:</Text>
                        <TextInput style = {styles.input} value={crmv} onChangeText={value => setCrmv(value)} style={styles.input} placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >Telefone para contato:</Text>
                        <TextInput style = {styles.input} value={phone} onChangeText={value => setPhone(value)} style={styles.input} placeholderTextColor="black"></TextInput>
                    </View>

                </View>

            </View>
            <TouchableOpacity style={styles.containerbutton}   onPress = { () => updateVet()}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>
          </View>}
        </ScrollView>
    );
}