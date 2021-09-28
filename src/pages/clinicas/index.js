import React, {useEffect, useState} from "react";
import { Feather } from "@expo/vector-icons";
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator
} from "react-native";

import styles from "./styles";
import icone from '../../assets/perfil.png';

import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../../services/api';
import { useIsFocused } from '@react-navigation/core';

export default function Clinicas({ navigation }) {
    const [token, setToken] = useState('');
    const [id, setId] = useState('');
    const [clinicas, setClinicas] = useState([]);
    const isFocused = useIsFocused();
    const [name, setName] = useState('')
    const [load, setLoad] = useState(true);

    async function onInit(){
      const storageToken = await AsyncStorage.getItem('token');
      setToken(storageToken);

      getClinicas();
}

    async function getClinicas(){
        const storageId = await AsyncStorage.getItem('id');
        setId(storageId);

        try{
            const response = await api.get('/clinic')
            
            setClinicas(response.data.data)

        }catch(e){
          console.log(e.response.data);
        }
        setLoad(false);
    }

    async function openClinicInfo(id){
        await AsyncStorage.setItem('clinicId', id);
      

        navigation.navigate("ClinicasInfo")
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", ()=> {onInit()}); 
        
     },[navigation])

    return (
        <ScrollView style={styles.container}>

 { load ? <ActivityIndicator size="large" style={{marginTop: 10}} /> :
            <View style={styles.descricao}>
                { clinicas.length > 0 ? clinicas.map(clinica=> ( 
                    <View key={clinica._id} style={styles.detalhes}>
                    <View>
                        <Text style={styles.nome}> {clinica.name} </Text>
                        <Text style={styles.local}>
                        {clinica.address}{","} {clinica.cidade}{","} {clinica.estado} {'   '}
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.icone}
                        onPress={() => 
                            openClinicInfo(clinica._id)
                        }
                    >
                        <Feather
                            name="more-vertical"
                            size={24}
                            color="#000000"
                        />
                    </TouchableOpacity>
                </View> )) : <Text style = {styles.list}> Sem clínicas cadastradas no sistema.</Text> } 
            </View>}
        </ScrollView>
    );
}
