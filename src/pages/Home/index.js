import React from "react";

import { View, FlatList } from "react-native";
import Fetcher from "../../hooks/Fetcher";
import apisecret from "../../config/secret.json";
import apiadress from "../../config/adress.json";
import Icon from "react-native-vector-icons/AntDesign";

import {
  Container,
  ButtonLeft,
  Header,
  LeftContent,
  Logo,
  RightContent,
  Textleft,
  HeaderHome,
  HeaderHomeContent,
  HeaderTime,
  HeaderTitle,
  LinesHeader,
  ImageCard,
  Card,
  HeaderTimeText,
  CardHeadline,
} from "./styles";

import LoadMessage from "../../components/LoadMessage";

const Home = () => {
  const { data: main } = Fetcher(
    `q=news&section=global-development&${apisecret.key}&page-size=1&${apiadress.adress}`
  );

  const { data: subject } = Fetcher(
    `q=news&section=business&${apisecret.key}&page-size=2&${apiadress.adress}`
  );

  const { data: news } = Fetcher(
    `&${apisecret.key}&page-size=6&${apiadress.adress}`
  );

  if (!main || !subject || !news) return <LoadMessage />;

  return (
    <>
      <Container>
        <Header>
          <LeftContent>
            <ButtonLeft>
              <Icon name="arrowright" size={17} />
            </ButtonLeft>
            <Textleft>Support</Textleft>
            <Textleft>the Guardian</Textleft>
          </LeftContent>

          <RightContent>
            <Logo primary>The</Logo>
            <Logo>Guardian</Logo>
          </RightContent>
        </Header>
        <HeaderHome>
          <LinesHeader />
          <LinesHeader />
          <LinesHeader />

          <HeaderHomeContent>
            <HeaderTitle>Headlines</HeaderTitle>
            <HeaderTime>
              <Icon name="clockcircle" color="#999" size={17} />
              <HeaderTimeText>2m ago</HeaderTimeText>
            </HeaderTime>
          </HeaderHomeContent>
        </HeaderHome>
        
          <FlatList
            data={main}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MainNews item={item} />}
          />

          <FlatList
            data={subject}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <SubNews item={item} />}
          />

          <FlatList
            data={news}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ListNews item={item} />}
          />
      </Container>
    </>
  );
};

export default Home;

const MainNews = ({ item }) => (
  <Card main_card>
    <CardHeadline title>{item.webTitle}</CardHeadline>
    <CardHeadline text>{item.webTitle}</CardHeadline>
    <ImageCard image_main source={{ uri: item.fields.thumbnail }} />
  </Card>
);

const SubNews = ({ item }) => (
  <Card card>
    <CardHeadline title_2>{item.webTitle}</CardHeadline>
    <ImageCard image source={{ uri: item.fields.thumbnail }} />
  </Card>
);

const ListNews = ({ item }) => (
  <Card serveral_subjects>
    <CardHeadline serveral_subjects>{item.webTitle}</CardHeadline>
  </Card>
);
