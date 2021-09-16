import React, { useState } from "react"
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Feather } from "@expo/vector-icons"
import { View, TextInput, Text, ScrollView, Button, Image, TouchableOpacity } from "react-native"

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

import styles from "./styles"
import { add } from "react-native-reanimated";

export default function Infos({ navigation }) {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [breed, setBreed] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [allergy, setAllergy] = useState();
  const [castracao, setCastracao] = useState();


  async function addPet() {
    try {
     const response = await api.post('pet/create');
           if (response.data) {
            await AsyncStorage.setItem('id', response.data.id);
            await AsyncStorage.setItem('token', response.data.token);
    
           navigation.navigate("Drawer");
           }

    } catch (e) {
      console.log('Erro ao tentar cadastrar pet! Por favor, tente novamente.');
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastrar Pet</Text>
      </View>

        <View style={styles.descricao}>
                <Text style={styles.containerinput}>Nome:</Text>
                <TextInput value={name} onChangeText={value => setName(value)} style={styles.input} placeholder="Exemplo: Pepita, Bolinha..." keyboardType="email-address" />

                <Text style={styles.containerinput}>Tipo:</Text>
                <TextInput value={type} onChangeText={value => setType(value)} style={styles.input} placeholder="Exemplo: cachorro, gato, coelho..." keyboardType="email-address" />

                <Text style={styles.containerinput}>Raça:</Text>
                <TextInput value={breed} onChangeText={value => setBreed(value)}  style={styles.input} placeholder="Exemplo: vira-lata, pinscher..."  keyboardType="email-address" />

                <Text style={styles.containerinput}>Idade:</Text>
                <TextInput value={age} onChangeText={value => setAge(value)}  style={styles.input} placeholder="Idade do seu pet"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Peso:</Text>
                <TextInput value={weight} onChangeText={value => setWeight(value)}  style={styles.input} placeholder="Peso em kg"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Altura:</Text>
                <TextInput value={height} onChangeText={value => setHeight(value)} style={styles.input} placeholder="Altura em cm"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Alergias:</Text>
                <TextInput value={allergy} onChangeText={value => setAllergy(value)}  style={styles.input} placeholder="Exemplo: ibuprofeno, dermatite atópica"  keyboardType="email-address" />

                <Text style={styles.containerinput}>Castração:</Text>
                <TextInput value={castracao} onChangeText={value => setCastracao(value)} style={styles.input} placeholder="Responda com Sim ou Não"  keyboardType="email-address" />
           
      <TouchableOpacity style={styles.containerbutton}  
            onPress={() => {
               addPet()
              }}
              type="submit">
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="black" />
          </TouchableOpacity>
          </View>
    </ScrollView>
  )
}
