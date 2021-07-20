import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

import styles from './styles';

export default function Vacinas({navigation}){
    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>
                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.vacina}>Vacinas: Raiva</Text>
                        <Text style = {styles.data}>Data:  07/02/2020</Text>
                        <Text style = {styles.local}>Local: Clinica Amiguinhos</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress ={()=>{}} 
                    >
                        <Feather name = "edit" size = {20} color = "#000000" />
                    </TouchableOpacity>

                </View>


                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.vacina}>Vacinas: Raiva</Text>
                        <Text style = {styles.data}>Data:  07/02/2020</Text>
                        <Text style = {styles.local}>Local: Clinica Amiguinhos</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress ={()=>{}} 
                    >
                        <Feather name = "edit" size = {20} color = "#000000" />
                    </TouchableOpacity>

                </View>

                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.vacina}>Vacinas: Raiva</Text>
                        <Text style = {styles.data}>Data:  07/02/2020</Text>
                        <Text style = {styles.local}>Local: Clinica Amiguinhos</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress ={()=>{}} 
                    >
                        <Feather name = "edit" size = {20} color = "#000000" />
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    );
}