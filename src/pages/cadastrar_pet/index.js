import React, { useState, useEffect } from "react"
import api from '../../services/api';
import { Feather } from "@expo/vector-icons"
import { View, TextInput, Text, ScrollView, Button, Image, TouchableOpacity, ActivityIndicator} from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import DropDownPicker from "react-native-dropdown-picker"

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

import styles from "./styles"

import {
   KeyboardAvoidingView,
} from 'react-native';

export default function Infos({ navigation }) {
 // <KeyboardAvoidingView contentContainerStyle={styles.box} behavior="position" enabled>
  const [input, setInput] = useState("")
  const [hidePass, sethidePass] = useState(true)
  const [openType, setOpenType] = useState(false)  

  const [openCastracao, setOpenCastracao] = useState(false)  

  const [load, setLoad] = useState(true);

  const isFocused = useIsFocused();
  const user = AsyncStorage.getItem('id');
  const role = AsyncStorage.getItem('role')

  const [name, setName] = useState();
  const [type, setType] = useState();
  const [breed, setBreed] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [allergy, setAllergy] = useState();
  const [castracao, setCastracao] = useState();


  async function onInit(){
    addPet();
}
  

  async function addPet() {
    data = {
      name,
      type,
      breed,
      age,
      weight,
      height,
      allergy,
      castracao,
      user
    }
 
      try {
      const response = await api.post('pet/create', data);
            if (response.data) {
      
            navigation.navigate("Drawer");
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


      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastrar Pet</Text>
      </View>
      
      
        <View style={styles.descricao}>
                <Text style={styles.containerinput}>Nome:</Text>
                <TextInput value={name} onChangeText={value => setName(value)} style={styles.input} placeholder="Exemplo: Pepita, Bolinha..." keyboardType="email-address" />

                <Text style={styles.containerinput}>Tipo:</Text>
                <DropDownPicker
                value = {type}
                setValue={setType}
                open = {openType}
                setOpen = {setOpenType}
                items={[
                  { label: "Cachorro", value: "Cachorro" },
                  { label: "Gato", value: "Gato" },
                  { label: "Peixe", value: "Peixe" },
                  { label: "Pássaro", value: "Pássaro" },
                  { label: "Coelho", value: "Coelho" },
                ]}
                style={styles.selector}
                placeholder="Selecione"
                containerStyle={{ height: 30, borderRadius: 10, width: 365, marginLeft: 8 }}
                onChangeItem={value => setType(value)}
              />

                <Text style={styles.containerinput}>Raça:</Text>
                <TextInput value={breed} onChangeText={value => setBreed(value)}  style={styles.input} placeholder="Exemplo: vira-lata, pinscher..."  keyboardType="default" />

                <Text style={styles.containerinput}>Idade:</Text>
                <TextInput value={age} onChangeText={value => setAge(value)}  style={styles.input} placeholder="Idade do seu pet"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Peso:</Text>
                <TextInput value={weight} onChangeText={value => setWeight(value)}  style={styles.input} placeholder="Peso em kg"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Altura:</Text>
                <TextInput value={height} onChangeText={value => setHeight(value)} style={styles.input} placeholder="Altura em cm"  keyboardType="numeric" />

                <Text style={styles.containerinput}>Alergias:</Text>
                <TextInput value={allergy} onChangeText={value => setAllergy(value)}  style={styles.input} placeholder="Exemplo: ibuprofeno, dermatite atópica"  keyboardType="default" />

                <Text style={styles.containerinput}>Castração:</Text>
                <DropDownPicker
                value = {castracao}
                setValue={setCastracao}
                open = {openCastracao}
                setOpen = {setOpenCastracao}
                items={[
                  { label: "Sim", value: "Sim" },
                  { label: "Não", value: "Não" }
                ]}
                style={styles.selector}
                placeholder="Selecione"
                containerStyle={{ height: 30, borderRadius: 10, width: 365, marginLeft: 8 }}
                onChangeItem={value => setCastracao(value)}
              />
                </View>
         

      <TouchableOpacity style={styles.containerbutton}  
            onPress={() => {
               addPet()
              }}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="black" />
          </TouchableOpacity>

          </View> }
  </ScrollView>
    
  )
}
