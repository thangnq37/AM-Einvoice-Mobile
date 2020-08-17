import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container,Header,Accordion,Content,Subtitle,Footer,Left,Body,Text, FooterTab,Right, Button, Icon, Title } from 'native-base';

import ModalBoxSearch from './includes/ModalBoxSearch';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];
const modalboxSearchClick = function() {
    this.refs.modalboxSearch.showModalboxSearch();
    alert("Tìm kiếm");
}
const ScreenBillManagement = ({ navigation }) => {

    return (
        <Container>
            <Header >
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>QUAN LÝ HÓA ĐƠN</Title>
                </Body>
                <Right>
                    <Button   onPress={() => 
                        modalboxSearchClick()
                        } transparent>
                        <Icon name='search' />
                    </Button>
                    <Button  transparent>
                        <Icon name='add' />
                    </Button>
                </Right>
            </Header>
            <Content padder>
            <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
            </Content>
            {/* <ModalBoxSearch></ModalBoxSearch> */}
        </Container>
    );
};
export default ScreenBillManagement;
const styles = StyleSheet.create({
   
});
