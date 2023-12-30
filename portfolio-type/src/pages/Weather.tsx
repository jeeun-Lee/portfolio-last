import { useEffect, useState } from "react";
import {styled,keyframes} from "styled-components";
import { Default, Desktop, Mobile, Tablet } from "../media";
const WeatherBox = styled.div`
    width: 150px;
    height: 100%;
    position: absolute;
    text-align: center;
    padding-top: 35px;
    & p{
        margin-top: 0;
    }
    & .d-flex img{
       position: absolute;
       left: 50%;
       bottom:-10px;
       transform: translateX(-50%);
    }
`
interface WeatherResponse {
    weather: {
        id: number;
        main : string;
        icon : string;
    }[];

}
function Weather(){
    const [loading, setLoading]  = useState(true);
    const [WeatherD,setWeatherD] = useState<WeatherResponse[]>([]);
    const date = new Date();

    const month = date.getMonth()+1;
    const day = date.getDate();


    const WeatherErr = () =>{
        alert("Not found")
    }

    
    const weatherData = async (lat: number, lng: number) =>{

            const WEATHER_KEY =process.env.REACT_APP_WEATHER_KEY;
            const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_KEY}&units=metric`;
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
            <p>Loading</p>
        ) : (
            <>
            <Desktop>
                <WeatherBox>
                    {Array.isArray(WeatherD) && WeatherD.length > 0 ? (
                        WeatherD.map((item) => 
                        (
                            <ul key={item.weather[0].id}>
                                    <li> <p className="en">Today {`${month} / ${day}`}</p></li>
                                    <li className="d-flex">
                                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].main} />
                                        <p className="en">
                                            {item.weather[0].main}
                                        </p>
                                    </li>
                            </ul>
                        
                        ))
                    ) : (
                        <p>No weather data available</p>
                    )}
                </WeatherBox>
            </Desktop>
            <Mobile>
                <div>
                        {Array.isArray(WeatherD) && WeatherD.length > 0 ? (
                            WeatherD.map((item) => 
                            (
                                <ul key={item.weather[0].id}>
                                        <li>
                                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].main} />
                                        </li>
                                </ul>
                            
                            ))
                        ) : (
                            <p>No weather data available</p>
                        )}
                    </div>
            </Mobile>
            </>
        )}
    </div>
    );
}
export default Weather;