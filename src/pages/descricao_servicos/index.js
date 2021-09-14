import React from "react"
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { View, Image, Text, ScrollView, TouchableOpacity, ImageBackground, ScrollViewComponent } from "react-native"

import styles from "./styles"

export default function DescricaoServicos({ navigation }) {
  return (
    <ScrollView  style = {styles.containerClinica} >

    <View style = {styles.container_eco}>
        <Text style = {styles.headerText}>
            Ecografia
        </Text>
            <TouchableOpacity style = {styles.icone} onPress ={()=>{navigation.navigate("")}} >
                <Feather name = "edit" size = {19} color = "#000000" />
        </TouchableOpacity>
    </View>
      
      <View style={styles.detalhes}>
        
        <View>
          <Text style = {styles.infos}>Profissionais responsáveis:</Text>
          <Text style = {styles.descricao}>Marcia Rodriguez Kuntz </Text>
          <Text style = {styles.descricao}>Marcela Rocha</Text>
      </View>

        <View>
          <Text style = {styles.infos}>Informações adicionais:</Text>
          <Text style = {styles.descricao}>Técnica de avaliação do organismo. Utilizamos equipamentos de alta tecnologia.</Text>
      </View>

        <View>
          <Text style = {styles.infos}>Indicações:</Text>
          <Text style = {styles.descricao}>É recomendável que o pet esteja em jejum de água e alimentos por no mínimo 2 horas.</Text>
      </View>

    </View>

    <View style = {styles.top}>
      <View style = {styles.agendamento}>
                <View >
                <TouchableOpacity onPress = { () => {navigation.navigate("")} }>
                <FontAwesome style = {styles.icone_calendar} name="calendar" size={20} color="black"/>
                </TouchableOpacity>
                    <Text style = {styles.text} >
                        Agendamento
                    </Text>
                </View>
                <View style = {styles.list}>
                    <TouchableOpacity onPress = { () => {navigation.navigate("Profissionais")} }>
                        <View style = {styles.icone_info} >
                            <Feather name="more-vertical" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            </View>
    </ScrollView>
  )
}
