import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

import styles from './styles';

export default function Profissionais({navigation}){
React.useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress = {()=>{navigation.navigate("CadastrarProfissionais", {teste:null} )}} style={{ paddingRight: 20 }}>
              <Feather name="plus-circle" size={27} color="#ffffffff" />
            </TouchableOpacity>
          )
    })
},[navigation])

    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.nome}>Marcela Rocha</Text>
                        <Text style = {styles.crm}>CRM: 1234567890</Text>
                        <Text style = {styles.local}>Clínica 4 Patas</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress = { () => {navigation.navigate("CadastrarProfissionais", {teste:"teste"} )}} 
                    >
                        <Feather name = "edit" size = {24} color = "#000000" />
                    </TouchableOpacity>

                </View>

                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.nome}>Rodrigo Martelli de Souza</Text>
                        <Text style = {styles.crm}>CRM: 1234567890</Text>
                        <Text style = {styles.local}>Clínica Latidos e Miados</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress = { () => {navigation.navigate("CadastrarProfissionais")}} 
                    >
                        <Feather name = "edit" size = {24} color = "#000000" />
                    </TouchableOpacity>

                </View>

                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.nome}>Alice Rodrigues Morati</Text>
                        <Text style = {styles.crm}>CRM: 1234567890</Text>
                        <Text style = {styles.local}>PetShop Animais Amigos</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress = { () => {navigation.navigate("CadastrarProfissionais")}}
                    >
                        <Feather name = "edit" size = {24} color = "#000000" />
                    </TouchableOpacity>

                </View>


            

            </View>
        </ScrollView>
    );
}