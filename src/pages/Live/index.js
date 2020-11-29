import React from 'react';

import Fetcher from '../../hooks/Fetcher';
import apisecret from '../../config/secret.json'
import apiadress from '../../config/adress.json'
import weatherImage from '../../assets/weather.png'

import { 
  Container, 
  Header, 
  ImageWeather, 
  TextTopHeader, 
  HeaderNav,
  Card,
  TextCard 
} from './styles';
import LoadMessage from '../../components/LoadMessage';

const Live = () => {
  const { data } = Fetcher(
    `q=debates&section=politics&${apisecret.key}&page-size=6&${apiadress.adress}`
  );

  if(!data) return <LoadMessage />

  return (
    <Container>
      <Header>
        <TextTopHeader title>Live</TextTopHeader>
        <TextTopHeader mintext>Updade 18m ago</TextTopHeader>
      </Header>
      <HeaderNav>
        <TextTopHeader navs>News</TextTopHeader>
        <TextTopHeader navs>Sports</TextTopHeader>
      </HeaderNav>
      <ImageWeather source={weatherImage}/>
      
      {data.map((item, index) => (
        <Card key={index}>
          <TextCard>{item.webTitle}</TextCard>
        </Card>
      ))}
    </Container>
  );
};

export default Live;
