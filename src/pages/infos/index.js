import React, { useState } from "react"
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Feather } from "@expo/vector-icons"
import { View, TextInput, Text, ScrollView, Button, Image, TouchableOpacity } from "react-native"

import icone from "../../assets/icon.jpg"

import styles from "./styles"

export default function Infos({ navigation }) {
  const [name, setName] = useState();
  const [tipo, setTipo] = useState();
  const [raca, setRaca] = useState();
  const [idade, setIdade] = useState();
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [alergia, setAlergia] = useState();
  const [castracao, setCastracao] = useState();

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
     await api.post('pet/create', { name, tipo, raca, idade, peso, altura, alergia, castracao });
  
      alert('Pet Criado com sucesso!');
      

     // history.push('/newuser');
    try {
    } catch (e) {
      console.log('Erro ao tentar cadastrar novo pet! Por favor, tente novamente.');
    }
  }

  function test(){
    console.log( { name, tipo, raca, idade, peso, altura, alergia, castracao })
  }

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
                <TextInput value={tipo} onChangeText={value => setTipo(value)} style={styles.input} placeholder="Exemplo: cachorro, gato, coelho..." keyboardType="email-address" />

                <Text style={styles.containerinput}>Raça:</Text>
                <TextInput value={raca} onChangeText={value => setRaca(value)}  style={styles.input} placeholder="Exemplo: vira-lata, pinscher..."  keyboardType="email-address" />

                <Text style={styles.containerinput}>Idade:</Text>
                <TextInput value={idade} onChangeText={value => setIdade(value)}  style={styles.input} placeholder="Idade do seu pet"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Peso:</Text>
                <TextInput value={peso} onChangeText={value => setPeso(value)}  style={styles.input} placeholder="Peso em kg"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Altura:</Text>
                <TextInput value={altura} onChangeText={value => setAltura(value)} style={styles.input} placeholder="Altura em cm"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Alergias:</Text>
                <TextInput value={alergia} onChangeText={value => setAlergia(value)}  style={styles.input} placeholder="Exemplo: ibuprofeno, dermatite atópica"  keyboardType="email-address" />

                <Text style={styles.containerinput}>Castração:</Text>
                <TextInput value={castracao} onChangeText={value => setCastracao(value)} style={styles.input} placeholder="Responda com Sim ou Não"  keyboardType="email-address" />
                
              </View>
              <View style={styles.containericon}>
                <Text style={styles.containerinput}>Insira uma foto do seu Pet:</Text>
                <TouchableOpacity style={styles.icon} onPress={() => {}}>
                  <Feather name="plus-circle" size={21} color="#000000" />
                </TouchableOpacity>
              </View> 
            </View>
          </View>

          <View style={styles.containerfoto}>
            <Image source={icone} style={styles.foto} />
          </View>
        
          <TouchableOpacity style={styles.containerbutton} onPress = {() => navigation.navigate("Drawer")} type="submit">
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="black" />
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
