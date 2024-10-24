import React from 'react'
import {
  Alert,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '@/components/shared/Header'
export default function Index() {
  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleInputChange = (inputText: string) => {
    setText(inputText)
  }
  const handleButtonPress = () => {
    Alert.alert(`Usuário: ${user} - Senha: ${password}`)
  }
  return (
    <LinearGradient style={styles.container} colors={['#87CEEB', '#FFFFFF']}>
      <Header />
      <View style={styles.content}>
        <Text>Clima Tempo</Text>
        <Text>Digite seu usuário</Text>
        <TextInput
          style={styles.input}
          onChangeText={(inputText) => {
            setUser(inputText)
          }}
          value={user}
        />
        <Text>Digite sua senha</Text>
        <TextInput />
        <TextInput
          style={styles.input}
          onChangeText={(inputText) => {
            setPassword(inputText)
          }}
        />
        <StatusBar style='auto' />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
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
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  }
})
