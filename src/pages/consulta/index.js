import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { View, Image, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native";

import styles from "./styles"


export default function Consultas({ navigation }) {
  return (
    <ScrollView style={styles.containerConsulta}>
      <View style={styles.descricao}>
        <View style={styles.detalhes}>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="map-pin" size={25} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome name="whatsapp" size={25} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="instagram" size={25} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome name="calendar" size={25} color="#000000" />
          </TouchableOpacity>
          <View>
            <Text style={styles.nomeconsulta}>Clínica Veterinária Pequenos Amigos</Text>
            <Text style={styles.data}>Data: 15/07/2021</Text>
            <Text style={styles.horario}>Horário: 11:45</Text>
            <Text style={styles.descricaoconsulta}>Descrição: Retirar pontos</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
