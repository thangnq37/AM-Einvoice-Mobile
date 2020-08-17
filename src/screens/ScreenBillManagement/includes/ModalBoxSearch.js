import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import Modal  from 'react-native-modalbox'
import { Container,Header,Accordion,Content,Subtitle,Footer,Left,Body,Text, FooterTab,Right, Button, Icon, Title } from 'native-base';
const showModalBoxSearch = function() {
    alert('hello');
}
const ModalBoxSearch = ({ navigation }) => {

    return (
        <Modal>
            <Container>
                    <Text>Hello Search</Text>
            </Container>
        </Modal>
        
    )
}
export default ModalBoxSearch;
const styles = StyleSheet.create({
   
});