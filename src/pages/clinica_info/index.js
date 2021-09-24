import React,{useEffect, useState} from "react"
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { View, Image, Text, ScrollView, TouchableOpacity, ImageBackground, ScrollViewComponent, Button } from "react-native"

import api from '../../services/api';
import styles from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function ClinicasInfo({ navigation }) {
    const [token, setToken] = useState('');
    const [clinica, setClinica] = useState([]);
    const isFocused = useIsFocused();
    const [name, setName] = useState('')

    async function onInit(){
      const storageToken = await AsyncStorage.getItem('token');
      setToken(storageToken);

      getClinica();
}

    async function getClinica(){
        const storageId = await AsyncStorage.getItem('clinicId');
    
        try{
            const response = await api.get(`clinic/${storageId}`)
            setClinica(response.data.data)

        }catch(e){
          console.log(e.response.data);
        }
    }

    async function openVetInfo(clinica){
        await AsyncStorage.setItem('clinicId', clinica._id);
        await AsyncStorage.setItem('clinicName', clinica.name);

        navigation.navigate("Profissionais")
    }

    useEffect(() => {
        onInit()
    },[isFocused])

  return (
    <ScrollView  style = {styles.containerClinica} >

    <View>
        <Text style = {styles.headerText}>
           {clinica.name}
            <TouchableOpacity style = {styles.icone} onPress ={()=>{navigation.navigate("EditarClinica")}} >
                        <Feather name = "edit" size = {24} color = "#000000" />
        </TouchableOpacity>
        </Text>
    </View>
      
      <View style={styles.detalhes}>
          <Text style = {styles.cnpj}>CNPJ: {clinica.cnpj}</Text>
          <Text style = {styles.endereco}>{clinica.address}, {clinica.cidade} - {clinica.estado}</Text>
          <Text style = {styles.telefone}>{clinica.phone} / {clinica.cellphone} </Text>
      </View>

      <View>
          <TouchableOpacity style = {styles.iconstar} onPress = { () => {navigation.navigate("Avaliacoes")}} >
          <FontAwesome name="star" size={23} color="gold" >
              {clinica.averageRating != null ? (   <Text style = {styles.avaliacao}>Avaliação: {clinica.averageRating}</Text>) : (   <Text style = {styles.avaliacao}>Avaliação: Sem avaliações</Text>)} 
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
                    <TouchableOpacity onPress = {() => openVetInfo(clinica)} >
                        <View style = {styles.icone} >
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
                        <View style = {styles.icone} >
                            <Feather name="more-vertical" size={23} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
          </View>

    </ScrollView>
  )
}
