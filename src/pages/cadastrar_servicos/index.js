import React, { useState, useEffect } from 'react';
import { Feather} from '@expo/vector-icons';
import { View, Image, Text, ScrollView, TouchableOpacity,TextInput} from "react-native";
import SelectDropdown from "react-native-select-dropdown"
import DropDownPicker from "react-native-dropdown-picker"

import styles from './styles';

import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function Servicos({navigation,route}){
    const [input, setInput] = useState("")
    const [hidePass, sethidePass] = useState(true)
    const [open, setOpen] = useState(false)  
    const [value, setValue] = useState(null)
  
    const isFocused = useIsFocused();
  
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [cost, setCost] = useState();
    const [indication, setIndication] = useState();
  
    async function addService() {
      const clinicId = await AsyncStorage.getItem('clinicId');

      data = {
        name,
        description,
        cost,
        indication,
        vet
      }

        try {
        const response = await api.post(`/${clinicId}`, data);

        console.log(response);
              if (response.data.data) {
              navigation.navigate("Servicos");
              }
        } catch (e) {
          console.log(e);
        }
  }

  useEffect(() => {
      addService()
  },[isFocused])

    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>

                    <View>
                    <Text style = {styles.inputTitle}  >Nome do Serviço:</Text>
                        <TextInput value={name} onChangeText={value => setName(value)} style={styles.input}  placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >Descrição:</Text>
                        <TextInput value={description} onChangeText={value => setDescription(value)} style={styles.input} placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >Custo:</Text>
                        <TextInput  value={cost} onChangeText={value => setCost(value)} style ={styles.input}  placeholder="R$" keyboardType="numbers-and-punctuation" placeholderTextColor="gray"></TextInput>
                        <Text style = {styles.inputTitle}  >Indicações:</Text>
                        <TextInput  value={indication} onChangeText={value => setIndication(value)} style = {styles.input} placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >Profissional Responsável:</Text>
                        <DropDownPicker
                         //   value = {type}
                          //  setValue={setType}
                         //   open = {openType}
                          //  setOpen = {setOpenType}
                            items={[
                            { label: "Cachorro", value: "Cachorro" },
                            { label: "Gato", value: "Gato" },
                            { label: "Peixe", value: "Peixe" },
                            { label: "Pássaro", value: "Pássaro" },
                            { label: "Coelho", value: "Coelho" },
                            ]}
                            style={styles.selector}
                            placeholder="Selecione"
                            containerStyle={{ height: 50, borderRadius: 10, width: 320 }}
                          //  onChangeItem={value => setType(value)}
                      />
                    </View>

                </View>

            </View>
            <TouchableOpacity style={styles.containerbutton}   onPress = { () => addService()}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>

        </ScrollView>
    );
}