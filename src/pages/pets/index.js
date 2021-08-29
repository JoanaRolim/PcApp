import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';

import icone from '../../assets/icon.jpg';
import styles from './styles';

export default function Pets({navigation}){
    return(
        <ScrollView  style = {styles.container} >
            <View>
            <Image source = {icone} style = {styles.perfil} />
                <Text style = {styles.headerText}>
                    Pepita
                </Text>
                <Text style = {styles.headerBellow}>
                   Cachorro
                </Text>
            </View>
            <View style = {styles.descricao}>
                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.raca}>Raça: Vira-lata</Text>
                        <Text style = {styles.idade}>Idade: 5 anos</Text>
                        <Text style = {styles.peso}>Peso: 3 kg</Text>
                        <Text style = {styles.altura}>Altura: 50 cm</Text>
                        <Text style = {styles.alergia}>Alergias: Ibuprofeno</Text>
                        <Text style = {styles.castracao}>Castração: Sim</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style = {styles.icone} 
                        onPress ={()=>{}} 
                    >
                        <Feather name = "edit" size = {24} color = "#000000" />
                   </TouchableOpacity>
                   </View>
                   </View>

         <View style = {styles.vacinas}>
                <View>
                    <Text style = {styles.text_vacina} >
                        Vacinas
                    </Text>
                </View>
                <View style = {styles.list}>
                    <TouchableOpacity onPress = { () => {navigation.navigate("Vacinas")} }>
                    <Feather  style = {styles.icone} name="more-vertical" size={21} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style = {styles.historico}>
                <View>
                    <Text style = {styles.text_historico} >
                        Histórico
                    </Text>
                </View>
                <View style = {styles.list}>
                    <TouchableOpacity onPress = { () => {navigation.navigate("Consultas")} }>
                    <Feather style = {styles.iconeconsulta} name="more-vertical" size={21} color="black" />
                        </TouchableOpacity>
                </View>
            </View>

            <View>
                <View style = {styles.detalhes_consulta}>  
                    <View>
                        <Text style = {styles.text_consultas}>Próximas consultas:</Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    );
}