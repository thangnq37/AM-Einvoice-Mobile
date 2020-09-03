import React,{useState} from 'react';

import { useTheme } from '@react-navigation/native';
import { Container, Header, Content, Button, ListItem, Text, Icon,Item,List, Left, Body, Right,Form, Switch,Picker  } from 'native-base';
const ScreenSetting = ({navigation}) => {
   const [valueLang,setValueLang]= useState('VIET');
   const _onChangeValueLang=(value)=>{
        alert(value);
        setValueLang(value);
   }
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
              <Button style={{ backgroundColor: "black" }}>
                <Icon type="EvilIcons" active name="user" />
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
                <Icon type="FontAwesome" active name="language" />
              </Button>
            </Left>
            <Body>
              <Text>Ngôn ngữ</Text>
            </Body>
            <Right >
            <Text>Tiếng việt</Text>
              <Icon active name="arrow-forward" />
            </Right>
              
           
       
           
          </ListItem>
          <ListItem itemDivider>
              <Text>Thông tin</Text>
          </ListItem> 
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "green" }}>
                <Icon type="Octicons" active name="versions" />
              </Button>
            </Left>
            <Body>
              <Text>Phiên bản</Text>
            </Body>
            <Right>
              <Text>version 1.0.1</Text>
              
            </Right>
          </ListItem>
        </List>
        </Content>
      </Container>
    );
};
export default ScreenSetting;

