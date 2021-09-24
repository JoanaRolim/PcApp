import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { View, Image, Text, TextInput, TouchableOpacity, Button, Picker } from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import DropDownPicker from "react-native-dropdown-picker"
import styles from "./styles"
import background from "../../assets/icon.png"
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Cadastro({ navigation }) {
  const [input, setInput] = useState("")
  const [hidePass, sethidePass] = useState(true)
  const [open, setOpen] = useState(false)  
  const [value, setValue] = useState(null)

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  async function handleSubmit() {
    try {
       const response = await api.post('auth/register', { name, email, password, role });

      AsyncStorage.setItem('id', response.data.id)
      AsyncStorage.setItem('name', response.data.name);
      AsyncStorage.setItem('email', response.data.email);
      AsyncStorage.setItem('role', response.data.role);
      AsyncStorage.setItem('token', response.data.token);

      navigation.navigate("Drawer");

    } catch (e) {
      console.log(e);
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
                  <TextInput value={name} onChangeText={value => setName(value)} style={{flex: 1,  marginLeft: 5}} keyboardType="email-address" />
              </View>
            </View>

            <View style={styles.containeremail}>
              <Text style={styles.email}>Email</Text>
              <View style={styles.input}>
                  <Feather  name="mail" size={21} color="black" />
                  <TextInput value={email} onChangeText={value => setEmail(value)} style={{flex: 1,  marginLeft: 5}}  keyboardType="email-address" />
              </View>
            </View>

            <View style={styles.containersenha}>
              <Text style={styles.senha}>Senha</Text>
              <View style={styles.inputArea} keyboardType="password">
                  <View style={styles.input}>
                      <Feather name="lock" size={21} color="black" />
                      <TextInput value={password} onChangeText={value => setPassword(value)} style={{flex: 1,  marginRight: 5,marginLeft: 5}}  secureTextEntry={hidePass} />
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
                setValue={setValue}
                open = {open}
                setOpen = {setOpen}
                items={[
                  { label: "Usuário", value: "user" },
                  { label: "Dono de Clínica", value: "clinicOwner" }
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
                handleSubmit()
               }}
            />
          </View>
        </View>

      </View>
    </View>
  )
}
