import React from "react";

import { FlatList } from "react-native";
import Fetcher from "../../hooks/Fetcher";

import apisecret from "../../config/secret.json";
import apiadress from "../../config/adress.json";
import {
  Container,
  Header,
  TextHeader,
  Card,
  ImageContainer,
  CardTextsContainer,
  CardHeadLine,
} from "./styles";
import LoadMessage from "../../components/LoadMessage";

const Discover = () => {
  const { data: games } = Fetcher(
    `q=culture&section=games&${apisecret.key}&page-size=5&${apiadress.adress}`
  );

  if (!games) return <LoadMessage />

  return (
    <Container>
      <Header>
        <TextHeader>Discover</TextHeader>
        <TextHeader text>Updade 2h ago</TextHeader>
      </Header>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card>
            <ImageContainer source={{ uri: item.fields.thumbnail }} />
            <CardTextsContainer>
              <CardHeadLine>{item.webTitle}</CardHeadLine>
            </CardTextsContainer>
          </Card>
        )}
      />
    </Container>
  );
};

export default Discover;
