import React from 'react';

import {
  Container,
  Title,
  Notification,
  WeatherContainer,
  WeatherIcon
  
} from './styles';

const Home: React.FC = () => {

  return(
    <Container>
      <Title />
      <Notification />
      <WeatherContainer>
        <WeatherIcon />
      </WeatherContainer>
    </Container>
  );
};

export default Home;