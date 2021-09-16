import React, {useEffect, useState} from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';

import icone from '../../assets/perfil.png';

import styles from './styles';

import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../../services/api';
import { useIsFocused } from '@react-navigation/core';

export default function Perfil({navigation}){
    const [token, setToken] = useState('');
    const [id, setId] = useState('');
    const [clinicas, setClinicas] = useState([]);
    const isFocused = useIsFocused();

    async function onInit(){
      const storageToken = await AsyncStorage.getItem('token');
      setToken(storageToken);

      getClinicas();
}

    async function getClinicas(){
        const storageId = await AsyncStorage.getItem('id');
        setId(storageId);
        try{
            const response = await api.get(`user/${storageId}/clinics`)

            setClinicas(response.data.data)
            console.log(clinicas)
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
                <TouchableOpacity onPress = {()=>{navigation.navigate("CadastrarClinica", {teste:null} )}} style={{ paddingRight: 20 }}>
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
                <Text style = {styles.text_nome_usuario} >Lady Gaga</Text>
            </View>

            <View style = {styles.menu} >
                <TouchableOpacity>
                    <Text style = {styles.text_menu} >Clínicas</Text>
                </TouchableOpacity>
            </View>

           { clinicas.length > 0 ? clinicas.map(clinica=> ( 
           <View style = {styles.pets}>
                <View style = {styles.pets_text} >
                    <Text style = {styles.text_nome} >
                       {clinica.name}
                    </Text>
                    <Text style = {styles.text_infos}>
                       {clinica.address}
                    </Text>
                </View>
                <View >
                    <TouchableOpacity onPress = { () => {navigation.navigate("ClinicasInfo")} } >
                        <View style = {styles.list}>
                            <Feather style = {styles.icone} name="more-vertical" size={23} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View> 
            )) : <Text style = {styles.list}> Sem clínicas cadastradas.</Text> }


        </ScrollView>
    );
}