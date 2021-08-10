import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { View, Image, Text, TextInput, TouchableOpacity, Button, Picker } from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import DropDownPicker from "react-native-dropdown-picker"
import styles from "./styles"
import background from "../../assets/icon.png"
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

export default function Cadastro({ navigation }) {
  const [input, setInput] = useState("")
  const [hidePass, sethidePass] = useState(true)
  const [open, setOpen] = useState(false)  
  const [value, setValue] = useState(null)

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
      await Axios.post('http://localhost:5000/api/v1/auth/register', { name, email, password, role });

      alert('Usuário Criado com sucesso!');

     // history.push('/newuser');
    try {
    } catch (e) {
      console.log('Erro ao tentar cadastrar novo usuário! Por favor, tente novamente.');
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={background} style={styles.fundo} />
      </View>

      <View style={styles.fundocor}>
        <View style={styles.containermsg}>
          <Text style={styles.mensagem}>Cadastro</Text>
        </View>

        <View onSubmit={handleSubmit} >
          <View style={styles.containeremailsenha}>
            <View style={styles.containeremail}>
              <Text style={styles.email}>Nome</Text>
              <View style={styles.input}>
                  <Feather name="user" size={21} color="black" />
                  <TextInput onChange={e => setName(e.target.value)} style={{flex: 1,  marginLeft: 5}} keyboardType="email-address" />
              </View>
            </View>

            <View style={styles.containeremail}>
              <Text style={styles.email}>Email</Text>
              <View style={styles.input}>
                  <Feather  name="mail" size={21} color="black" />
                  <TextInput onChange={e => setEmail(e.target.value)} style={{flex: 1,  marginLeft: 5}}  keyboardType="email-address" />
              </View>
            </View>

            <View style={styles.containersenha}>
              <Text style={styles.senha}>Senha</Text>
              <View style={styles.inputArea} keyboardType="password">
                  <View style={styles.input}>
                      <Feather name="lock" size={21} color="black" />
                      <TextInput onChange={e => setPassword(e.target.value)} style={{flex: 1,  marginRight: 5,marginLeft: 5}}  secureTextEntry={hidePass} />
                      <TouchableOpacity onPress={() => sethidePass(!hidePass)}>
                      {hidePass ? <Feather name="eye" size={21} color="black" /> : <Feather name="eye-off" size={21} color="black" />}
                      </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.containertipo}>
              <Text style={styles.tipo}>Tipo de Usuário</Text>
              <DropDownPicker
                value = {value}
                setValue = {setValue}
                onChange={e => setRole(e.target.value)}
                open = {open}
                setOpen = {setOpen}
                items={[
                  { label: "Usuário", value: "item1" },
                  { label: "Dono de Clínica", value: "item2" }
                ]}
                style={styles.selector}
                placeholder="Selecione"
                containerStyle={{ height: 30, borderRadius: 5 }}
                color="#DEF0F6"
                onChangeItem={item => console.log(item.label, item.value)}
              />
            </View>
          </View>

          <View style={styles.containerbutton}>
            <Button
              title="Avançar"
              color="#000000"
              type="submit"
              onPress={() => {
                navigation.navigate("Infos")
              }}
            />
          </View>
        </View>

      </View>
    </View>
  )
}
