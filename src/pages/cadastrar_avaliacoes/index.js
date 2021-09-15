import React from 'react';
import { Feather} from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons"
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground, TextInput} from 'react-native';

import styles from './styles';

export default function CadastrarAvaliacoes({navigation,route}){
React.useEffect(()=>{console.log(route.params.teste);},[])
    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                 <View style = {styles.detalhes}>
                    <View>
                        <TextInput style = {styles.avaliacao} placeholder= "Avaliação:" placeholderTextColor="black" >
                        </TextInput>
                        
                        <TextInput style = {styles.nota} placeholder="Nota:" placeholderTextColor="black"> 
                        </TextInput>
                        </View>

                </View>
                </View>
                <TouchableOpacity style={styles.containerbutton}   onPress = { () => {navigation.navigate("Avaliacoes")}}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>
        </ScrollView>
    );
}