import React from "react"
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { View, Image, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native"

import styles from "./styles"
import icone from "../../assets/icon.jpg"
import fundoImg from "../../assets/image.png"

export default function Clinicas({ navigation }) {
  return (
    <ScrollView style={styles.containerClinica}>
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
          <View>
            <Text style={styles.nomeclinica}>Nome da Clínica / Profissional:</Text>
            <Text style={styles.endereco}>Endereço: </Text>
            <Text style={styles.fone}>Telefone: </Text>
          </View>

          <TouchableOpacity style={styles.icone} onPress={() => {}}>
            <Feather name="edit" size={25} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

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
          <View>
            <Text style={styles.nomeclinica}>Nome da Clínica / Profissional: </Text>
            <Text style={styles.endereco}>Endereço: </Text>
            <Text style={styles.fone}>Telefone:</Text>
          </View>
          <TouchableOpacity style={styles.icone} onPress={() => {}}>
            <Feather name="edit" size={25} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
