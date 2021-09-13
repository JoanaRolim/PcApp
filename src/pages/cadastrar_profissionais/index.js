import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground} from 'react-native';

import styles from './styles';

export default function CadastrarProfissionais({navigation}){
    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>
                    
                    <View>
                        <TextInput style = {styles.nome}  placeholder= "Nome do Profissional:" placeholderTextColor="black"></TextInput>

                        <TextInput style = {styles.crm}  placeholder= "CRM:" placeholderTextColor="black"></TextInput>
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