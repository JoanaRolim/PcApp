import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground} from 'react-native';

import styles from './styles';

export default function EditarProfissional({navigation,route}){
React.useEffect(()=>{console.log(route.params.teste);},[])
    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.inputTitle}  >Nome do Profissional:</Text>
                        <TextInput style = {styles.input}   placeholderTextColor="black"></TextInput>
                        <Text style = {styles.inputTitle}  >CRM:</Text>
                        <TextInput style = {styles.input}   placeholderTextColor="black"></TextInput>
                    </View>

                </View>

            </View>
            <TouchableOpacity style={styles.containerbutton}   onPress = { () => {navigation.navigate("Profissionais")}}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>
        </ScrollView>
    );
}