import { useEffect, useState } from "react";
import {styled,keyframes} from "styled-components";
import { Default, Desktop, Mobile, Tablet } from "../media";

const WeatherBox = styled.div`
    width: 150px;
    height: 150px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: -30px;
    text-align: center;
    padding-top: 35px;
    animation: shake-horizontal 4s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite;
    & p{
        margin-top: 0;
        text-align: center;
    }
    & .d-flex{
        justify-content: center;
    }
    & .d-flex img{
       position: absolute;
       left: 50%;
       bottom:-10px;
       transform: translateX(-50%);
    }
    &::after{
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        border:1px solid #95CE9E;
       
    }

    @keyframes shake-horizontal {
        0%,
        100% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
        }
        50% {
            -webkit-transform: translateX(-15px);
                    transform: translateX(-15px);
        }
        }
        @media (max-width:1400px) {
            left: 0px;
            width: 60px;
            height: 60px;
            padding-top: 0;
            margin-left: auto;
            & img{
                width: 60px;
            }
            
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
        <WeatherBox>
        {loading ? (
            <p>Loading</p>
        ) : (
            <>
            <Desktop>
                <div>
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
                </div>
            </Desktop>
            <Tablet>
                <div>
                        {Array.isArray(WeatherD) && WeatherD.length > 0 ? (
                            WeatherD.map((item) => 
                            (
                                <ul className="mobile" key={item.weather[0].id}>
                                        <li>
                                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].main} />
                                        </li>
                                </ul>
                            
                            ))
                        ) : (
                            <p>No weather data available</p>
                        )}
                    </div>
            </Tablet>
            </>
        )}
    </WeatherBox>
    );
}
export default Weather;