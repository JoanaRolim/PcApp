import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';

import icone from '../../assets/perfil.png';
import petCat from '../../assets/cat.png';
import petDog from '../../assets/dog.png';

import styles from './styles';


//  fotos do caes
//<Image source={petDog} style={styles.fotoPet} />
//<Image source={petCat} style={styles.fotoPet} />

export default function Perfil({navigation}){
    return(
        <ScrollView  style = {styles.container} >
            <View style={styles.containerfoto}>
            <Image source={icone} style={styles.foto} />
          </View> 
            <View style = {styles.nome_usuario} >
                <Text style = {styles.text_nome_usuario} >Lady Gaga</Text>
            </View>

            <View style = {styles.menu} >
                <TouchableOpacity>
                    <Text style = {styles.text_menu} >Pets</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = { () => {navigation.navigate("Clinicas_perfil")} } >
                    <Text style = {styles.text_menu} >Clínicas</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.pets}>
           
                <View style = {styles.pets_text} >
                    <Text style = {styles.text_nome} >
                        Pepita
                    </Text>
                    <Text style = {styles.text_idade}>
                        5 anos
                    </Text>
                </View>
                <View style = {styles.list}>
                    <TouchableOpacity onPress = { () => {navigation.navigate("Pets")} } >
                        <View style = {styles.icone} >
                            <Feather name="more-vertical" size={23} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style = {styles.pets}>
            
                <View style = {styles.pets_text} >
                    <Text style = {styles.text_nome} >
                        Simba
                    </Text>
                    <Text style = {styles.text_idade}>
                        3 anos
                    </Text>
                </View>
                <View style = {styles.list}>
                    <TouchableOpacity onPress = { () => {navigation.navigate("Pets")} }>
                        <View style = {styles.icone} >
                            <Feather name="more-vertical" size={23} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}