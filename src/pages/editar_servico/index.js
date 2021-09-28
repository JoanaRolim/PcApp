import React,{useEffect, useState} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground, ActivityIndicator} from 'react-native';
import SelectDropdown from "react-native-select-dropdown"
import DropDownPicker from "react-native-dropdown-picker";
import {Picker} from '@react-native-picker/picker';

import styles from './styles';
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';

export default function EditarServico({navigation,route}){
    const isFocused = useIsFocused();

    const [vets, setVets] = useState([]);
    const [clinicName, setClinicName] = useState('') 
    const [service, setService] =  useState('')
    const [token, setToken] = useState('')
    
    const [vet, setVet] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState();
    const [indications, setIndications] = useState('');

    const [load, setLoad] = useState(true);

    async function onInit(){
        getServiceInfo();
    }
    
        async function getServiceInfo(){
            const storageId = await AsyncStorage.getItem('serviceId');
            const storageClinic = await AsyncStorage.getItem('clinicId')
        
            try{
                const response = await api.get(`service/${storageId}`)
                console.log(response.data.data);
                setVet(response.data.data.vet)
                setName(response.data.data.name)
                setDescription(response.data.data.description)
                setCost(response.data.data.cost)
                console.log(cost);
                console.log('teste');
                console.log(response.data.data.cost);
                setIndications(response.data.data.indications)

               const res = await api.get(`clinic/${storageClinic}/vets`)
               console.log(res.data.data);
                setVets(res.data.data)
    
            }catch(e){
              console.log(e.response.data);
            }
            setLoad(false);
        } 
      
          async function updateService(){
              const id = await AsyncStorage.getItem('serviceId');
              
          
               const data = {
                name,
                description,
                cost,
                indications,
                vet,
                id
               }
      
              console.log(data);
              try{
                  const response = await api.put(`/service/${id}`, data)
      
                  if(response.data){
                     navigation.navigate("DescricaoServicos");
                  }
              }catch(e){
                console.log(e.response.data);
              }
             
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
                        <Text style = {styles.inputTitle}  >Nome do Serviço:</Text>
                            <TextInput value={name} onChangeText={value => setName(value)} style={styles.input}  placeholderTextColor="black"></TextInput>
                            <Text style = {styles.inputTitle}  >Descrição:</Text>
                            <TextInput value={description} onChangeText={value => setDescription(value)} style={styles.input} placeholderTextColor="black"></TextInput>
                            <Text style = {styles.inputTitle}  >Custo:</Text>
                            <TextInput  value={cost} onChangeText={value => setCost(value)} style ={styles.input}  placeholder="R$" keyboardType="numbers-and-punctuation" placeholderTextColor="gray"></TextInput>
                            <Text style = {styles.inputTitle}  >Indicações:</Text>
                            <TextInput  value={indications} onChangeText={value => setIndications(value)} style = {styles.input} placeholderTextColor="black"></TextInput>
                            <Text style = {styles.inputTitle}  >Profissional Responsável:</Text>
                            <Picker
                            selectedValue={vet}
                            onValueChange={(itemValue, itemIndex) =>
                              setVet(itemValue)
                            }>
                            
                           { vets.map(vet => (
                           <Picker.Item key={vet._id} label={vet.name} value={vet._id} />
                           ))}
                            <Picker.Item label={''} value={''} />
                            </Picker>
                         
                        </View>
    
                    </View>
    
                </View> 
                <TouchableOpacity style={styles.containerbutton}   onPress = { () => updateService()}>
                <Text style={styles.button} >Salvar</Text>
                <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
              </TouchableOpacity>
    
              </View> }
    
            </ScrollView>
    );
}