import {View, Text, StyleSheet} from "react-native";
import { WeatherCardInfo } from '../../../components/WeatherCardInfo'
import { TemperatureCard } from '../../../components/TemperatureCard'
import { SetStateAction, useEffect, useState } from "react";
import getWeather from "@/api/weatherapi";

const weather = {
    "coord": {
      "lon": 10.99,
      "lat": 44.34
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 298.48,
      "feels_like": 298.74,
      "temp_min": 297.56,
      "temp_max": 300.05,
      "pressure": 1015,
      "humidity": 64,
      "sea_level": 1015,
      "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.62,
      "deg": 349,
      "gust": 1.18
    },
    "rain": {
      "1h": 3.16
    },
    "clouds": {
      "all": 100
    },
    "dt": 1661870592,
    "sys": {
      "type": 2,
      "id": 2075663,
      "country": "IT",
      "sunrise": 1661834187,
      "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
  };
  
export default function Home({route}){
  const [currentTemperature, setCurrentTemperature] = useState<number | undefined>(undefined)
  const [temperatureMin, setTemperatureMin] = useState<number | undefined>(undefined)
  const [temperatureMax, setTemperatureMax] = useState<number | undefined>(undefined)
  const [feelsLike, setFeelsLike] = useState<number | undefined>(undefined)
  const [selectedState, setSelectedState] = useState('São Paulo');
  const [wind, setWind] = useState()
  const [pressure, setPressure] = useState()
  const [humidity, setHumidity] = useState()

  const handleStateChange = (newState: string) => {    
    setSelectedState(newState);    
  };

  useEffect(() =>{
    fetchData()
  },[])

  useEffect(() =>{
    fetchData()
  },[selectedState])

  function convertKelvinToC(kelvin: number){
    return parseInt((kelvin - 273).toString())
  }
  const { userName } = route.params

  async function fetchData(){
    try{
        const currentWeather = await getWeather(selectedState);
        console.log(currentWeather)
        if(currentWeather !== null){
            setTemperatureMin(convertKelvinToC(currentWeather[0]));
            setTemperatureMax(convertKelvinToC(currentWeather[1]));
            setWind(currentWeather[2])
            setHumidity(currentWeather[3])
            setCurrentTemperature(convertKelvinToC(currentWeather[4]));
            setFeelsLike(convertKelvinToC(currentWeather[5]));
            setPressure(currentWeather[6]) 
        }
    }catch(error){
        console.log('Error fetching weather data: ', error)
    }
  }
    return(
        <View style={styles.homeContainer}>
            <WeatherCardInfo user={userName} temperature={`${currentTemperature}º`} 
            selectedState={selectedState} onStateChange={handleStateChange}/>
            <View style={styles.otherTemperatures}>
                <TemperatureCard temperature={`${temperatureMin}°`}/>
                <TemperatureCard temperature={`${temperatureMax}°`}/>
            </View>
            <View style={styles.infoField}>
          <Text style={styles.infoText}>Mais Detalhes</Text>
          <View style={[styles.detailsContent, { borderTopStartRadius: 8, borderTopEndRadius: 8 }]}>
            <View style={styles.details}>
              <Text style={styles.descriptionTitle}>Vel. Vento</Text>
              <Text>{wind}</Text>
            </View>          
            <View style={styles.details}>
              <Text style={styles.descriptionTitle}>Umidade</Text>
              <Text>{humidity}%</Text>
            </View>
          </View>
          <View style={[styles.detailsContent, { borderBottomStartRadius: 8, borderBottomEndRadius: 8 }]}>
            <View style={styles.details}>
              <Text style={styles.descriptionTitle}>Sensação Térmica</Text>
              <Text>{feelsLike}%</Text>
            </View>          
            <View style={styles.details}>
              <Text style={styles.descriptionTitle}>Pressão Atmosferica</Text>
              <Text>{pressure}%</Text>
            </View>
          </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer:{
      flex:1
    },
    otherTemperatures:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',    
      marginTop: 20
    },
    infoField:{    
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'100%',      
      marginTop:10    
    },
    infoText:{
      fontSize:14,
      fontWeight:'bold',
    },
    detailsContent:{
      display:'flex',
      width:'80%',
      flexDirection: 'row',
      justifyContent:'space-between',
      backgroundColor:'#87CEEB',        
    },
    details:{
      width:'50%',    
      padding: 5
    },
    descriptionTitle:{
      fontSize:14,
      fontWeight:'bold',
    },  
  })