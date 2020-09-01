import React from 'react';

import { useTheme } from '@react-navigation/native';
import { Container, Header, Content, Button, ListItem, Text, Icon,List, Left, Body, Right, Switch } from 'native-base';
const ScreenSetting = ({navigation}) => {
    return (
      <Container>
       
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Cài đặt chung</Text>
            </ListItem>   
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active type="MaterialCommunityIcons" name="home-city" />
              </Button>
            </Left>
            <Body>
              <Text>Thông tin công ty</Text>
            </Body>
            <Right>
              <Text></Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Thông tin người dùng</Text>
            </Body>
            <Right>
            <Text></Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Ngôn ngữ</Text>
            </Body>
            <Right>
              <Text></Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem itemDivider>
              <Text>Thông tin</Text>
          </ListItem> 
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>Phiên bản</Text>
            </Body>
            <Right>
              <Text>0.0.1</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
        </Content>
      </Container>
    );
};
export default ScreenSetting;

