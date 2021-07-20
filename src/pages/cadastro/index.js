import React from 'react';

import {View, Image, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import styles from './styles';
import background from '../../assets/image3.png';

export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.background}>
                <Image source = {background} style = {styles.fundo} />
            </View>

            <View style = {styles.fundocor}>

                <View style = {styles.containermsg}>
                    <Text style = {styles.mensagem}>Cadastro</Text>
                </View>

                <View style = {styles.containeremailsenha}>
                    <View style = {styles.containeremail}>
                        <Text style = {styles.email}>Email</Text>
                        <TextInput style = {styles.input}
                            keyboardType="email-address" />
                    </View>

                    <View style = {styles.containersenha} >
                        <Text style = {styles.senha}>Senha</Text>
                        <TextInput style = {styles.input}
                            secureTextEntry={true}
                            keyboardType="email-address" />

                    </View>
                </View>

                <View style = {styles.containerbutton}>
                    <Button
                        title="Avançar"
                        color="#000000"
                        onPress={() => {
                            navigation.navigate('Infos')
                            }}
                    />
                </View>

                
            </View>
        </View>
    );
}