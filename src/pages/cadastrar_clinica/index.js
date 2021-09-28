import React, { useState, useEffect } from "react"
import api from '../../services/api';
import { Feather } from "@expo/vector-icons"
import { View, TextInput, Text, ScrollView, Button, Image, TouchableOpacity, ActivityIndicator } from "react-native"

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

import styles from "./styles"

export default function CadastrarClinica({ navigation }) {
  const isFocused = useIsFocused();
  const user = AsyncStorage.getItem('id');

  const [name, setName] = useState();
  const [cnpj, setCnpj] = useState();
  const [address, setAddress] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [phone, setPhone] = useState();
  const [cellphone, setCellphone] = useState();
  const [email, setEmail] = useState();

  const [load, setLoad] = useState(true);


  async function onInit(){
    addClinic();
}
  

  async function addClinic() {
    data = {
      name,
      cnpj,
      address,
      cidade,
      estado,
      phone,
      cellphone,
      email,
      user
    }

        try {
        const response = await api.post('clinic/create', data);
              if (response.data) {
        
              navigation.navigate("Infos");
              }

        } catch (e) {
          console.log(e);
        }
        setLoad(false);

  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", ()=> {onInit()}); 
 },[navigation])

  return (
    <ScrollView style={styles.container}>
       { load ? <ActivityIndicator size="large" style={{marginTop: 10}} /> :
        <View>
          <View style={styles.descricao}>
            <View style={styles.detalhes}>
              <View>
                <Text style={styles.containerinput}>Nome da Clínica:</Text>
                <TextInput value={name} onChangeText={value => setName(value)}  style={styles.input} placeholder="Insira o nome da clínica..." keyboardType="default" />

                <Text style={styles.containerinput}>CNPJ:</Text>
                <TextInput value={cnpj} onChangeText={value => setCnpj(value)}  style={styles.input} placeholder="CPNPJ da clínica..." keyboardType="numeric" />

                <Text style={styles.containerinput}>Endereço:</Text>
                <TextInput value={address} onChangeText={value => setAddress(value)} style={styles.input} placeholder="Logradouro, Número - Bairro"  keyboardType="default" />

                <Text style={styles.containerinput}>Cidade:</Text>
                <TextInput value={cidade} onChangeText={value => setCidade(value)} style={styles.input} placeholder="Exemplo: Foz do Iguaçu, Curitiba..."  keyboardType="default" />

                <Text style={styles.containerinput}>Estado:</Text>
                <TextInput value={estado} onChangeText={value => setEstado(value)} style={styles.input} placeholder="Insira a sigla do estado. Exemplo: PR, MG..."  keyboardType="default" />

                <Text style={styles.containerinput}>Telefone Fixo:</Text>
                <TextInput value={phone} onChangeText={value => setPhone(value)} style={styles.input} placeholder="(XX) XXXX XXXX"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Telefone Celular:</Text>
                <TextInput value={cellphone} onChangeText={value => setCellphone(value)} style={styles.input} placeholder="(XX) XXXX XXXX"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Email:</Text>
                <TextInput value={email} onChangeText={value => setEmail(value)} style={styles.input} placeholder="exemplo@exemplo.com"  keyboardType="email-address" />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.containerbutton}  
          onPress={() => {
               addClinic()
              }}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="black" />
          </TouchableOpacity>
      </View> }
    </ScrollView>
  )
}
