import React, { useState, useEffect } from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground} from 'react-native';

import styles from './styles';

import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function CadastrarProfissionais({navigation,route}){

    const isFocused = useIsFocused();
  
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [cpf, setCpf] = useState();
    const [crmv, setCrmv] = useState();
    const [phone, setPhone] = useState();
  
    async function addVet() {
      const clinicId = await AsyncStorage.getItem('clinicId');

      data = {
        name,
        email,
        cpf,
        crmv,
        phone
      }

        try {
        const response = await api.post(`vet/${clinicId}`, data);

        console.log(response);
              if (response.data.data) {
              navigation.navigate("Profissionais");
              }
        } catch (e) {
          console.log(e);
        }
  }

  useEffect(() => {
      addVet()
  },[isFocused])

    return(
        <ScrollView style = {styles.container} >
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
            <TouchableOpacity style={styles.containerbutton}  
            onPress={() => 
               addVet()
              } >
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>
        </ScrollView>
    );
}