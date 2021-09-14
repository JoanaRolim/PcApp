import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

import styles from './styles';

export default function Servicos({navigation}){
    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.nome}>Vacina contra raiva</Text>
                        <Text style = {styles.local}>Clínica Animais Amigos</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress = { () => {navigation.navigate("DescricaoServicos")}}
                    >
                        <Feather name = "more-vertical" size = {24} color = "#000000" />
                    </TouchableOpacity>

                </View>

                    <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.nome}>Ecografia</Text>
                        <Text style = {styles.local}>Clínica 4 Patas</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress = { () => {navigation.navigate("DescricaoServicos")}} 
                    >
                        <Feather name = "more-vertical" size = {24} color = "#000000" />
                    </TouchableOpacity>
                    </View>

                 <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.nome}>Banho e tosa</Text>
                        <Text style = {styles.local}>Clínica Latidos e Miados</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress = { () => {navigation.navigate("CadastrarServicos")}}
                    >
                        <Feather name = "more-vertical" size = {24} color = "#000000" />
                    </TouchableOpacity>
    
                 </View>     

            </View>
        </ScrollView>
    );
}