import { useEffect, useState } from "react";

interface WeatherResponse {
    weather: {
        id: number;
        main : string;
        icon : string;
    }[];

}
interface GeolocationPosition {
    coords: GeolocationCoordinates;
    timestamp: number;
}


function Weather(){
    const [loading, setLoading]  = useState(true);
    const [WeatherD,setWeatherD] = useState<WeatherResponse[]>([]);
    


    const WeatherErr = () =>{
        alert("Not found")
    }

    
    const weatherData = async (lat: number, lng: number) =>{

            const WEATHER_KEY =process.env.REACT_APP_WEATHER_KEY;
            const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_KEY}&units=metric`;
            console.log(weather_url)
            const response = await fetch(weather_url);
            const json = await response.json();
            setWeatherD([json]);
            setLoading(false)

    }
   

    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            weatherData(lat, lng);
          },WeatherErr);

          
    },[])
    return (
        <div>
        {loading ? (
            <h1>Loading</h1>
        ) : (
            <div>
                {Array.isArray(WeatherD) && WeatherD.length > 0 ? (
                    WeatherD.map((item) => (
                        <div key={item.weather[0].id}>{item.weather[0].main}, <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].main} /></div>
                    ))
                ) : (
                    <p>No weather data available</p>
                )}
            </div>
        )}
    </div>
    );
}
export default Weather;