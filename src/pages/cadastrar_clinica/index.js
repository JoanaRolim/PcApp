import React, { useState } from "react"
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Feather } from "@expo/vector-icons"
import { View, TextInput, Text, ScrollView, Button, Image, TouchableOpacity } from "react-native"

import styles from "./styles"

export default function CadastrarClinica({ navigation }) {

  return (
    <ScrollView style={styles.container}>

        <View>
          <View style={styles.descricao}>
            <View style={styles.detalhes}>
              <View>
                <Text style={styles.containerinput}>Nome da Clínica:</Text>
                <TextInput style={styles.input} placeholder="Insira o nome da clínica..." keyboardType="email-address" />

                <Text style={styles.containerinput}>CNPJ:</Text>
                <TextInput style={styles.input} placeholder="CPNPJ da clínica..." keyboardType="email-address" />


                <Text style={styles.containerinput}>Endereço:</Text>
                <TextInput style={styles.input} placeholder="Logradouro, Número - Bairro"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Cidade:</Text>
                <TextInput style={styles.input} placeholder="Exemplo: Foz do Iguaçu, Curitiba..."  keyboardType="numeric" />

                <Text style={styles.containerinput}>Estado:</Text>
                <TextInput style={styles.input} placeholder="Insira a sigla do estado. Exemplo: PR, MG..."  keyboardType="numeric" />

                <Text style={styles.containerinput}>Telefone Fixo:</Text>
                <TextInput style={styles.input} placeholder="(XX) XXXX XXXX"  keyboardType="email-address" />

                <Text style={styles.containerinput}>Telefone Celular:</Text>
                <TextInput style={styles.input} placeholder="(XX) XXXX XXXX"  keyboardType="email-address" />

                <Text style={styles.containerinput}>Email:</Text>
                <TextInput style={styles.input} placeholder="exemplo@exemplo.com"  keyboardType="email-address" />
                
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
