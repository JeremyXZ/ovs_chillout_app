import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    const fetchWeatherInfo = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Bournemouth&appid=fe14a288d35ede0a0f95bc8e570dd41b`
      );
      const data = await response.json();
      setWeatherInfo(data);
    };
    fetchWeatherInfo();
    // console.log(JSON.stringify(weatherInfo, null, 2))
  }, []);

  
  return (
    <Wrapper>
      <Title>Weather Condition:</Title>
      {weatherInfo ? (        
        <WeatherWrapper>
          <p>Current temperature in {weatherInfo.name} is {Math.round(weatherInfo.main.temp - 273.15)}°C</p>
          <IconWrapper>
            <span>{weatherInfo.weather[0].description}</span>
            <Icon src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt='weather icon'/>
          </IconWrapper>             
        </WeatherWrapper>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 150px;
  display: flex;    
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;  
  gap: 5px; 

  @media (min-width: 1024px) {
    height: 180px;
  }
`

const Title = styled.h4`
  color: blue;
  padding-right: 10px;
`

const WeatherWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  margin-left: 5px;
`;


export default Weather;