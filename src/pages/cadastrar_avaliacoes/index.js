import React, {useState, useEffect} from 'react';
import { Feather} from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons"
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground, TextInput} from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/core';
import api from '../../services/api';

import styles from "./styles"

export default function CadastrarAvaliacoes({navigation,route}){
  const isFocused = useIsFocused();

  const [text, setText] = useState();
  const [rating, setRating] = useState();


  async function addReview() {
    const user = await AsyncStorage.getItem('id');
    const clinicId = await AsyncStorage.getItem('clinicId')

    data = {
      text,
      rating,
      user
    }

      try {
      const response = await api.post(`review/${clinicId}`, data);
            if (response.data) {
            navigation.navigate("Avaliacoes")
            }
      } catch (e) {
        console.log(e);
      }
}

  useEffect(() => {
    addReview()
  },[isFocused])

    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                 <View style = {styles.detalhes}>
                    <View>
                        <Text style = {styles.inputTitle}>Avaliação:</Text>
                        <TextInput value={text} onChangeText={value => setText(value)}  style={styles.inputText} />

                        <Text style = {styles.inputTitle}>Nota:</Text>
                        <TextInput value={rating} onChangeText={value => setRating(value)}  style={styles.input} placeholder="1...10" placeholderTextColor="gray" keyboardType="numeric" />

                        </View>

                </View>
                </View>
                <TouchableOpacity style={styles.containerbutton}   onPress = { () => {addReview()}}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>
        </ScrollView>
    );
}