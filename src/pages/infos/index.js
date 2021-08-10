import React, { useState } from "react"
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
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
      await Axios.post('http://localhost:5000/api/v1/auth/register', { name, tipo, raca, idade, peso, altura, alergia, castracao });

      alert('Pet Criado com sucesso!');

     // history.push('/newuser');
    try {
    } catch (e) {
      console.log('Erro ao tentar cadastrar novo pet! Por favor, tente novamente.');
    }
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
                <TextInput onChange={e => setName(e.target.value)} style={styles.input} placeholder="Exemplo: Pepita, Bolinha..." keyboardType="email-address" />

                <Text style={styles.containerinput}>Tipo:</Text>
                <TextInput  onChange={e => setTipo(e.target.value)}  style={styles.input} placeholder="Exemplo: cachorro, gato, coelho..." keyboardType="numeric" />

                <Text style={styles.containerinput}>Raça:</Text>
                <TextInput  onChange={e => setRaca(e.target.value)}  style={styles.input} placeholder="Exemplo: vira-lata, pinscher..."  keyboardType="numeric" />

                <Text style={styles.containerinput}>Idade:</Text>
                <TextInput  onChange={e => setIdade(e.target.value)}  style={styles.input} placeholder="Idade do seu pet"  keyboardType="email-address" />

                <Text style={styles.containerinput}>Peso:</Text>
                <TextInput  onChange={e => setPeso(e.target.value)}  style={styles.input} placeholder="Peso em kg"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Altura:</Text>
                <TextInput  onChange={e => setAltura(e.target.value)} style={styles.input} placeholder="Altura em cm"  keyboardType="email-address" />

                <Text style={styles.containerinput}>Alergias:</Text>
                <TextInput  onChange={e => setAlergia(e.target.value)}  style={styles.input} placeholder="Exemplo: ibuprofeno, dermatite atópica"  keyboardType="email-address" />

                <Text style={styles.containerinput}>Castração:</Text>
                <TextInput  onChange={e => setCastracao(e.target.value)} style={styles.input} placeholder="Responda com Sim ou Não"  keyboardType="email-address" />
                
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
        
          <TouchableOpacity style={styles.containerbutton} onPress = { () => {navigation.navigate("Drawer")} } type="submit">
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="black" />
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
