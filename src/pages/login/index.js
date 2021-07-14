import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';


export default function Login({navigation}){
    return(
        <View style={{marginTop: 100}}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Drawer')
                }}
            >
                <Text>Clica em mim</Text>
            </TouchableOpacity>
        </View>
    );
}