import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

import styles from './styles';

export default function Vacinas({navigation}){
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress = {()=>{navigation.navigate("CadastrarVacinas", {teste:null} )}} style={{ paddingRight: 20 }}>
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
                        <Text style = {styles.vacina}>Vacina: Raiva</Text>
                        <Text style = {styles.data}>Data: 07/02/2020</Text>
                        <Text style = {styles.local}>Local: Clínica Amiguinhos</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress = { () => {navigation.navigate("CadastrarVacinas", {teste:"teste"} )}}
                    >
                        <Feather name = "edit" size = {24} color = "#000000" />
                    </TouchableOpacity>

                </View>


                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.vacina}>Vacinas: Raiva</Text>
                        <Text style = {styles.data}>Data:  07/02/2020</Text>
                        <Text style = {styles.local}>Local: Clínica Amiguinhos</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress = { () => {navigation.navigate("CadastrarVacinas")}}
                    >
                        <Feather name = "edit" size = {24} color = "#000000" />
                    </TouchableOpacity>

                </View>

            </View>
        </ScrollView>
    );
}