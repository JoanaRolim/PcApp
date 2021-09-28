import React, {useEffect, useState} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import icone from '../../assets/icono-de-perfil.jpg';
import styles from './styles';
import api from '../../services/api';
import { useIsFocused } from '@react-navigation/core';

export default function Perfil({navigation}){
    const [token, setToken] = useState('');
    const [id, setId] = useState('');
    const [pets, setPets] = useState([ ]);
    const [name, setName] = useState('');
    const [load, setLoad] = useState(true);
    const [role, setRole] = useState()
   

    async function onInit(){
      const storageToken = await AsyncStorage.getItem('token');
      setToken(storageToken);

      const role = await AsyncStorage.getItem('role');
      setRole(role);

      await getPets();
}

    async function getPets(){
        const storageId = await AsyncStorage.getItem('id');
        setId(storageId);

        const user = await AsyncStorage.getItem('name');
        setName(user)
        
        try{
            const response = await api.get(`user/${storageId}/pets`)

            setPets(response.data.data)

        }catch(e){
          console.log(e.response.data);
        }
        setLoad(false)
    }

    async function openPetInfo(id){
        await AsyncStorage.setItem('petId', id);
      

        navigation.navigate("Pets")
    }


    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", ()=> {onInit()}); 
        
     },[navigation])


    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress = {()=>{navigation.navigate("Infos", {teste:null} )}} style={{ paddingRight: 20 }}>
                  <Feather name="plus-circle" size={27} color="#ffffffff" />
                </TouchableOpacity>
              )
        })
    },[navigation])

    return(
        <ScrollView  style = {styles.container} >

 { load ? <ActivityIndicator size="large" style={{marginTop: 10}} /> :
<View>
            <View style={styles.containerFoto}>
                <Image source={icone} style={styles.foto} />
            </View> 
            <View style = {styles.nome_usuario} >
                <Text style = {styles.text_nome_usuario} >{name}</Text>
            </View>

          <View style = {styles.menu} >
                <TouchableOpacity>
                    <Text style = {styles.text_menu} >Pets</Text>
                </TouchableOpacity>
               {role === 'clinicOwner' ? 
               ( <TouchableOpacity onPress = { () => {navigation.navigate("Clinicas_perfil")} } >
                    <Text style = {styles.text_menu} >Clínicas</Text>
                </TouchableOpacity> ) : <Text></Text>}
            </View>

         {pets.length > 0 ? pets.map(pet=> (
         <View key={pet._id} style = {styles.pets}>
           
           <View style = {styles.pets_text} >
               <Text style = {styles.text_nome} >
                {pet.name}
               </Text>
               <Text style = {styles.text_idade}>
                  {pet.breed} 
               </Text>
           </View>
           <View style = {styles.list}>
               <TouchableOpacity onPress = {() => openPetInfo(pet._id)} >
                   <View style = {styles.icone} >
                       <Feather name="more-vertical" size={23} color="black" />
                   </View>
               </TouchableOpacity>
           </View>
       </View>)) : <Text style = {styles.list}> Sem pets cadastrados.</Text> }

       </View> }

        </ScrollView>
    );
}