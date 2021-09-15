import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, TextInput,ImageBackground} from 'react-native';

import styles from './styles';

export default function EditarServico({navigation,route}){
React.useEffect(()=>{console.log(route.params.teste);},[])
    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>
                    
                    <View>
                        <TextInput style = {styles.nome}  placeholder= "Nome do Serviço:" placeholderTextColor="black"></TextInput>

                        <TextInput style = {styles.profissional}  placeholder= "Profissionais Responsáveis:" placeholderTextColor="black"></TextInput>

                        <TextInput style = {styles.infos}  placeholder= "Informações Adicionais: " placeholderTextColor="black"></TextInput>

                        <TextInput style = {styles.indicacao} placeholder= "Indicações:" placeholderTextColor="black"></TextInput>
                    </View>

                </View>

            </View>
            <TouchableOpacity style={styles.containerbutton}   onPress = { () => {navigation.navigate("Servicos")}}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>

        </ScrollView>
    );
}