import React from "react"
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { View, Image, Text, ScrollView, TouchableOpacity, ImageBackground, ScrollViewComponent } from "react-native"

import styles from "./styles"

export default function Clinicas({ navigation }) {
  return (
    <ScrollView  style = {styles.containerClinica} >

    <View>
        <Text style = {styles.headerText}>
            Clínica 4 Patas  {" "}
            <TouchableOpacity style = {styles.icone} onPress ={()=>{navigation.navigate("")}} >
                        <Feather name = "edit" size = {24} color = "#000000" />
        </TouchableOpacity>
        </Text>
    </View>
      
      <View style={styles.detalhes}>
          <Text style = {styles.cnpj}>CNPJ: 123456789-0</Text>
          <Text style = {styles.endereco}>Av. República Argentina, 54 - Vila Militar, Foz do Iguaçu - PR</Text>
          <Text style = {styles.telefone}>(45) 3525-1604/ (45) 99985-7891 </Text>
      </View>

      <View>
          <TouchableOpacity style = {styles.iconstar} onPress = { () => {navigation.navigate("Avaliacoes")}} >
          <FontAwesome name="star" size={23} color="gold" >
          <Text style = {styles.avaliacao}>Avaliação: 8.4</Text>
            </FontAwesome>
            </TouchableOpacity>
      </View>

    <View style = {styles.top}>
      <View style = {styles.infos}>
                <View >
                    <Text style = {styles.text} >
                        Profissionais
                    </Text>
                </View>
                <View style = {styles.list}>
                    <TouchableOpacity onPress = { () => {navigation.navigate("Profissionais")} }>
                        <View style = {styles.icone_info} >
                            <Feather name="more-vertical" size={23} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style = {styles.infos}>
                <View >
                    <Text style = {styles.text} >
                        Serviços
                    </Text>
                </View>
                <View style = {styles.list}>
                    <TouchableOpacity onPress = { () => {navigation.navigate("Servicos")} }>
                        <View style = {styles.icone_info} >
                            <Feather name="more-vertical" size={23} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
          </View>

    </ScrollView>
  )
}
