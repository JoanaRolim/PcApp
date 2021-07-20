import React, {useState} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import styles from './styles';
import background from '../../assets/image3.png';
import { Feather} from '@expo/vector-icons';

export default function Login({navigation}){
    const[input, setInput] = useState('');
    const[hidePass, sethidePass] = useState(true);

    return(
        <View style={styles.container}>
            <View style={styles.background}>
                <Image source = {background} style = {styles.fundo} />
            </View>

            <View style = {styles.fundocor}>

                <View style = {styles.containermsg}>
                    <Text style = {styles.mensagem}>Bem Vindo!</Text>
                </View>

                <View style = {styles.containeremailsenha}>
                    <View style = {styles.containeremail}>
                        <Text style = {styles.email}>Email</Text>
                        <TextInput style = {styles.input}
                            keyboardType="email-address" />
                    </View>

                    <View style = {styles.containersenha} >
                        <Text style = {styles.senha}>Senha</Text>

                        <View style = {styles.inputArea}>
                            <TextInput 
                                style = {styles.input}
                                value = {input}
                                onChange={ (texto) =>setInput(texto) }s
                                secureTextEntry = {hidePass}
                            />
                            <TouchableOpacity syle = {styles.icon} onPress = { () => sethidePass(!hidePass) }>
                                { hidePass ?
                                    <Feather name = "eye" size = {20} color = "#ffffffff" />
                                    :
                                    <Feather name = "eye-off" size = {20} color = "#ffffffff" />

                                }
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style = {styles.containerbutton}>
                    <Button
                        title="Entrar"
                        color="#000000"
                        onPress={() => {
                            navigation.navigate('Drawer')
                            }}
                    />
                </View>

                <View style = {styles.containercadastro}>
                    <TouchableOpacity
                        style = {styles.cadastro} 
                        onPress={() => {
                        navigation.navigate('Cadastro')
                        }}
                    >
                       <Text style = {styles.cadastrotext}>Você é novo por aqui? Faça seu cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}