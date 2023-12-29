import { useEffect, useState } from "react";

interface WeatherResponse {
    weather: {
        id: number;

    }[];

}
interface GeolocationPosition {
    coords: GeolocationCoordinates;
    timestamp: number;
}


function Weather(){
    const [loading, setLoading]  = useState(true);
    const [WeatherD,setWeatherD] = useState<WeatherResponse[]>([]);
    
    const WeatherData = async(position : GeolocationPosition) =>{
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const WEATHER_KEY =process.env.REACT_APP_WEATHER_KEY;
        const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_KEY}&units=metric`;
    
        try {
            const response = await fetch(weather_url);
            const json = await response.json();
            setWeatherD(json);
            setLoading(false)
        
        }catch (error) {
            console.error("Error fetching weather data:", error);
        }
        
      
    }
    const WeatherErr = () =>{
        alert("Not found")
    }

        
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(WeatherData,WeatherErr);

    },[])
    return (
        <div>
            {loading ? (<div>{loading ? (<h1>Loading</h1>) : WeatherD.length > 0 ? (
                <div>
                    {WeatherD.map((item) => (
                        <p key={item.weather[0].id}>{item.weather[0].id}</p>
                    ))}
                </div>
            ) : (
                <p>No weather data available</p>
            )}
        </div>
    );
}
export default Weather;