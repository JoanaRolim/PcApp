import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { View, TextInput, Text, ScrollView, Button, Image, TouchableOpacity } from "react-native"

import icone from "../../assets/icon.jpg"

import styles from "./styles"

export default function Infos({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro</Text>
      </View>

      <View style={styles.descricao}>
        <View style={styles.detalhes}>
          <View>
            <Text style={styles.containerinput}>Nome do Pet:</Text>
            <TextInput style={styles.input} keyboardType="email-address" />

            <Text style={styles.containerinput}>Tipo do Pet:</Text>
            <TextInput style={styles.input} keyboardType="numeric" />

            <Text style={styles.containerinput}>Raça:</Text>
            <TextInput style={styles.input} keyboardType="numeric" />

            <Text style={styles.containerinput}>Idade do Pet:</Text>
            <TextInput style={styles.input} keyboardType="email-address" />

            <Text style={styles.containerinput}>Peso:</Text>
            <TextInput style={styles.input} keyboardType="numeric" />

            <Text style={styles.containerinput}>Altura:</Text>
            <TextInput style={styles.input} keyboardType="email-address" />

            <Text style={styles.containerinput}>Alergias:</Text>
            <TextInput style={styles.input} keyboardType="email-address" />

            <Text style={styles.containerinput}>Castração:</Text>
            <TextInput style={styles.input} keyboardType="email-address" />
            
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

      <View style={styles.containerbutton}>
        <Feather style={styles.chevron} name="chevron-right" size={40} color="white" />
        <Button
          style={styles.button}
          title="Salvar"
          color="#ffffff"
          onPress={() => {
            navigation.navigate("Drawer")
          }}
        />
      </View>
    </ScrollView>
  )
}
