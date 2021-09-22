import React, {useEffect, useState} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import icone from '../../assets/perfil.png';
import styles from './styles';
import api from '../../services/api';
import { useIsFocused } from '@react-navigation/core';

export default function Perfil({navigation}){
    const [token, setToken] = useState('');
    const [id, setId] = useState('');
    const [pets, setPets] = useState([ ]);
    const isFocused = useIsFocused();
    const [name, setName] = useState('');

    async function onInit(){
      const storageToken = await AsyncStorage.getItem('token');
      setToken(storageToken);

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
            console.log(response.data);

        }catch(e){
          console.log(e.response.data);
        }
    }

    useEffect(() => {
        onInit()
    },[isFocused])

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
                <TouchableOpacity onPress = { () => {navigation.navigate("Clinicas_perfil")} } >
                    <Text style = {styles.text_menu} >Clínicas</Text>
                </TouchableOpacity>
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
               <TouchableOpacity onPress = { () => {navigation.navigate("Pets")} } >
                   <View style = {styles.icone} >
                       <Feather name="more-vertical" size={23} color="black" />
                   </View>
               </TouchableOpacity>
           </View>
       </View>)) : <Text style = {styles.list}> Sem pets cadastrados.</Text> }


        </ScrollView>
    );
}