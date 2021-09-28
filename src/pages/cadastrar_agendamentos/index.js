import React, { useState, useEffect } from 'react';
import { Feather} from '@expo/vector-icons';
import { View, Image, Text, ScrollView, TouchableOpacity, TextInput, ActivityIndicator} from "react-native";
import SelectDropdown from "react-native-select-dropdown"
import DropDownPicker from "react-native-dropdown-picker"
import {Picker} from '@react-native-picker/picker';

import styles from './styles';

import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function CadastrarAgendamento({navigation,route}){
    const [input, setInput] = useState("")
    const [hidePass, sethidePass] = useState(true)
    const [openType, setOpenType] = useState(false)  

    const [service, setService] = useState([]);
    const [clinicName, setClinicName] = useState('') 
    const [token, setToken] = useState('')
    const [load, setLoad] = useState(true);
    const [type, setType] = useState();

    const [pet, setPet] = useState('');
    const [pets, setPets] = useState([]);
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');

    async function addAgendamentos() {
      const clinicId = await AsyncStorage.getItem('clinicId');
      const userId = await AsyncStorage.getItem('id');
      const serviceId = await AsyncStorage.getItem('serviceId');

       const params = {
        data,
        horario,
        user: userId,
        pet,
        service: serviceId,
        clinic: clinicId
      }

      console.log('teste');
      console.log(params);

        try {
        const response = await api.post('/agendamento', params);

        console.log(response);
        console.log('testess');
              if (response.data.data) {
                await AsyncStorage.setItem('petId', pet)
              navigation.navigate("Drawer");
              }
        } catch (e) {
          console.log(e);
        }
  }

  async function onInit(){
    getPets();
}

    async function getPets(){
        const storageId = await AsyncStorage.getItem('id');
        
        try{
            const response = await api.get(`user/${storageId}/pets`)

            setPets(response.data.data)
            console.log(response.data);

        }catch(e){
        console.log(e.response.data);
        }
        setLoad(false);
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", ()=> {onInit()}); 
        
     },[navigation])

    return(
        <ScrollView style = {styles.container} >
             { load ? <ActivityIndicator size="large" style={{marginTop: 10}} /> :
             <View>
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>

                    <View>
                        <Text style = {styles.inputTitle}  >Data:</Text>
                        <TextInput  value={data} onChangeText={value => setData(value)} style ={styles.input}  placeholder="dd/mm/aaaa" placeholderTextColor="gray"></TextInput>
                        <Text style = {styles.inputTitle}  >Horário:</Text>
                        <DropDownPicker
                value = {horario}
                setValue={setHorario}
                open = {openType}
                setOpen = {setOpenType}
                items={[
                  { label: "09:00", value: "09:00" },
                  { label: "10:00", value: "10:00" },
                  { label: "11:00", value: "11:00" },
                  { label: "14:00", value: "14:00" },
                  { label: "15:00", value: "15:00" },
                ]}
                style={styles.selector}
                placeholder="Selecione um horário"
                containerStyle={{ height: 30, borderRadius: 10, width: 365, marginLeft: 8 }}
                onChangeItem={value => setType(value)}
              />
                        <Text style = {styles.inputTitle}  >Pet:</Text>
                        <Picker
                        selectedValue={pet}
                        onValueChange={(itemValue, itemIndex) =>
                          setPet(itemValue)
                        }>
                        
                       { pets.map(pet => (
                       <Picker.Item key={pet._id} label={pet.name} value={pet._id} />
                       ))}
                        <Picker.Item label={''} value={''} />
                        </Picker>
                     
                    </View>

                </View>

            </View>
            <TouchableOpacity style={styles.containerbutton}   onPress = { () => addAgendamentos()}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>
          </View> }
        </ScrollView>
    );
}