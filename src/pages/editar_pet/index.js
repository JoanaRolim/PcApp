import React,{useEffect, useState} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground, ActivityIndicator} from 'react-native';
import SelectDropdown from "react-native-select-dropdown"
import DropDownPicker from "react-native-dropdown-picker"

import styles from './styles';
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';


export default function EditarPet({ navigation }) {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [breed, setBreed] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [allergy, setAllergy] = useState();
  const [castracao, setCastracao] = useState();

  const [pet, setPet] = useState();
  const [load, setLoad] = useState(true);
  const [input, setInput] = useState("")
  const [hidePass, sethidePass] = useState(true)
  const [openType, setOpenType] = useState(false)  

  const [openCastracao, setOpenCastracao] = useState(false)  


  async function onInit(){
    getPetInfo();
}
  
  
      async function getPetInfo(){
        const storageId = await AsyncStorage.getItem('petId');
    
        try{
            const response = await api.get(`pet/${storageId}`)
 
            setName(response.data.data.name)
            setType(response.data.data.type)
            setBreed(response.data.data.breed)
            setAge(response.data.data.age)
            setWeight(response.data.data.weight)
            setHeight(response.data.data.height)
            setAllergy(response.data.data.allergy)
            setCastracao(response.data.data.castracao)

        }catch(e){
          console.log(e.response.data);
        }
        setLoad(false);

    }
  
      async function updatePet(){
          const id = await AsyncStorage.getItem('petId');
      
           const data = {
              name,
              type,
              breed,
              age,
              weight,
              height,
              allergy,
              castracao,
              id
          }
  
          console.log(data);
          try{
              const response = await api.put(`/pet/${id}/update`, data)
              console.log('teste');
              console.log(response.data.data);
  
              if(response.data){
                 navigation.navigate("Pets");
              }
          }catch(e){
            console.log(e.response.data);
          }
  
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
                <Text style={styles.containerinput}>Nome:</Text>
                <TextInput value={name} onChangeText={value => setName(value)} style={styles.input} placeholder="Exemplo: Pepita, Bolinha..." keyboardType="default" />

                <Text style={styles.containerinput}>Tipo:</Text>
                <TextInput value={type} onChangeText={value => setType(value)} style={styles.input} placeholder="Exemplo: cachorro, gato, coelho..." keyboardType="default" />

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
              
            </View>
          </View>
           
          <TouchableOpacity style={styles.containerbutton} onPress = {() => updatePet()}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="black" />
          </TouchableOpacity>

    
      </View>}
    </ScrollView>
  )
}
