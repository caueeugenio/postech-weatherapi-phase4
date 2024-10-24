import { View, StyleSheet, Text } from 'react-native'

export default function Header() {
  return (
    <View>
      <View>
        <Text style={styles.headerText}>Clima Tempo</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'transparent',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    textAlign: 'center',
  },
})
