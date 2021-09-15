import React, { useState } from "react"
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Feather } from "@expo/vector-icons"
import { View, TextInput, Text, ScrollView, Button, Image, TouchableOpacity } from "react-native"

import icone from "../../assets/icon.jpg"

import styles from "./styles"

export default function Infos({ navigation }) {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [breed, setBreed] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [allergy, setAllergy] = useState();
  const [castracao, setCastracao] = useState();

  const history = useHistory();
 // const token = localStorage.getItem('token');

  async function handleSubmit(e) {
    e.preventDefault();
     await api.post('pet/create', { name, type, breed, age, weight, height, allergy, castracao }, {
   /*  headers: {
      Authorization: 'Bearer ' + token
     } */
    });
      alert('Pet cadastrado com sucesso!');
      
     // history.push('/newuser');
    try {
    } catch (e) {
      console.log('Erro ao tentar cadastrar pet! Por favor, tente novamente.');
    }
  }

  /*function test(){
    console.log( { name, type, breed, age, weight, height, allergy, castracao })
  }*/

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastrar Pet</Text>
      </View>

        <View onSubmit={handleSubmit}>
          <View style={styles.descricao}>
            <View style={styles.detalhes}>
              <View>
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
                
              </View>
              
            </View>
          </View>
           
          <TouchableOpacity style={styles.containerbutton} onPress = {() => navigation.navigate("Drawer")} type="submit">
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="black" />
          </TouchableOpacity>

    
      </View>
    </ScrollView>
  )
}
