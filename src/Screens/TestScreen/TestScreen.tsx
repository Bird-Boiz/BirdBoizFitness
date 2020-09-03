import React from "react";
import { StatusBar } from "react-native";
import {
  Container, Header, Content, Card, CardItem, Thumbnail, Text, Button,
  Icon, Left, Body, Right, Title, Image
} from 'native-base';

export default function TestScreen({ navigation }) {
  return (
    <Container>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Test</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://justbirding.com/wp-content/uploads/2019/01/facts-about-inca-terns.jpg' }} />
              <Body>
                <Text>Franz</Text>
                <Text note>Leet SQL Designer</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://animals.sandiegozoo.org/sites/default/files/inline-images/emu_face.jpg' }} />
              <Body>
                <Text>Tom</Text>
                <Text note>Comes in 'running'</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://thumbs-prod.si-cdn.com/pJr3bbcye9mBiE910wovzd0Yakk=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/96/ea/96ea3332-4453-4baf-9e8a-b187cdbe3eaf/penguin_42-55455098.jpg' }} />
              <Body>
                <Text>Chris</Text>
                <Text note>idk might do stuff maybe... who?</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
