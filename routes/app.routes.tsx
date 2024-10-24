import Home from '@/app/screens/Home'
import Login from '@/app/screens/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()
export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='screens/Login/index' component={Login}></Screen>
      <Screen name='screens/Home/index' component={Home}></Screen>
    </Navigator>
  )
}
