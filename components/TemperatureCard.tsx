import Feather from '@expo/vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, StyleSheet } from 'react-native'
export function TemperatureCard({ temperature }) {
  const actualDate = new Date()

  return (
    <LinearGradient
      style={styles.container}
      colors={['#87CEEB', '#ff23']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.weather}>
        <Feather name='sun' size={50} color={'#fff'} />
        <Text style={styles.weatherText}>{temperature}</Text>
      </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '45%',
  },
  weather: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
})
