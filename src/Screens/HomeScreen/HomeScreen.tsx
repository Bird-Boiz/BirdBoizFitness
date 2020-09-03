import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

export default function HomeScreen({ navigation }) {
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
           <Title>HomeScreen</Title>
         </Body>
         <Right />
       </Header>
       <Content padder>
         <Card>
           <CardItem>
             <Body>
               <Text>Chat App to talk some awesome people!</Text>
             </Body>
           </CardItem>
         </Card>
       </Content>
     </Container>
  );
}
