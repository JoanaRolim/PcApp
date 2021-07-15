import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';

import fundoImg from '../../assets/image.png';
import icone from '../../assets/icon.jpg';

import styles from './styles';


export default function Perfil({navigation}){
    return(
        <ScrollView  style = {styles.container} >
            <View style = {styles.headerTop}>
                {/* <Image source = {fundoImg} style = {styles.backgroundImage} /> */}
                <View style={styles.imageperfil}>
                    <Image source = {icone} style = {styles.perfil} />
                </View>
                <View style = {styles.header}>
                    <Text style = {styles.headerText}>
                        Pepita
                    </Text>
                    <Text style = {styles.headerBellow}>
                        9 anos
                    </Text>
                </View>
            </View>
            <View style = {styles.descricao}>
                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.peso}>Peso: 4 kg</Text>
                        <Text style = {styles.alergia}>Alergias: Ibuprofeno</Text>
                        <Text style = {styles.altura}>Altura: 70 cm</Text>
                        <Text style = {styles.castracao}>Castração: Sim</Text>
                        <Text style = {styles.dono}>Dono(a): Maria Alvarenga</Text>
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