import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    const fetchWeatherInfo = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=fe14a288d35ede0a0f95bc8e570dd41b`
      );
      const data = await response.json();
      setWeatherInfo(data);
    };
    fetchWeatherInfo();
    // console.log(JSON.stringify(weatherInfo, null, 2))
  }, []);
  useEffect(() => {
    console.log(JSON.stringify(weatherInfo, null, 2));
  }, [weatherInfo]);
  
  return (
    <div>
      {weatherInfo ? (
        <Wrapper>
          <p>Current temperature in {weatherInfo.name} is {Math.round(weatherInfo.main.temp - 273.15)}°C</p>
          <IconWrapper>
            <span>{weatherInfo.weather[0].description}</span>
            <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt='weather icon'/>
          </IconWrapper>             
        </Wrapper>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
const Wrapper = styled.div`
  padding: 8px;
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;  
`


export default Weather;