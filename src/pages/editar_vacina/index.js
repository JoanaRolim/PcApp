import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground} from 'react-native';

import styles from './styles';

export default function EditarVacina({navigation,route}){
React.useEffect(()=>{console.log(route.params.teste);},[])
    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>
                    
                    <View>
                        <TextInput style = {styles.vacina}  placeholder= "Vacina: " placeholderTextColor="black"></TextInput>
                        <TextInput style = {styles.data}  placeholder= "Data: " placeholderTextColor="black"></TextInput>
                        <TextInput style = {styles.local}  placeholder= "Local: " placeholderTextColor="black"></TextInput>
                    </View>

                </View>
            </View>
            <TouchableOpacity style={styles.containerbutton}   onPress = { () => {navigation.navigate("Vacinas")}}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>

        </ScrollView>
    );
}