import { Text, View, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient'
import Header  from '../../../components/shared/Header'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const [user , setUser] = useState('')
  const [password , setPassword] = useState('')
  const navigation = useNavigation()
  const handleInputChange = ( inputText: any ) =>{
    setText(inputText)
  }

  const handleButtonPress = () => {
    Alert.alert(
      'Credenciais Digitadas',
      `Usuário: ${user}
Senha: ${password}`,
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'cancel',
          accessibilityLabel: 'Fechar Alerta',
        },
      ],
      { cancelable: true }
    ); 

    navigation.navigate('screens/Home/index',{userName: user})
  }

  return (
    <LinearGradient
     style={styles.container}
    colors={['#87CEEB','#FFFFFF']} 

    >
    <Header/>
    <View style={styles.content}>    
    <Text>Clima Tempo</Text>
    <Text>Digite seu usuário</Text>
    <TextInput style={styles.input}
      onChangeText={(inputText)=>{setUser(inputText)}}
      value={user}
      />
    <Text>Digite sua senha</Text>
    <TextInput/>
    <TextInput style={styles.input}
      onChangeText={(inputText)=>{setPassword(inputText)}}
      value={password}
      />
    <StatusBar style="auto" />
    <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
      <Text>Enviar</Text>
    </TouchableOpacity>
    </View>
  </LinearGradient>
  );
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',  
  },
  content:{
    flex:1,    
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius:25,
  },
  button:{
    backgroundColor:'inherit',
    borderColor:'grey',
    borderWidth:1,
    width:'50%',
    alignItems:'center',
    padding:5,
  }
})