import React ,{useState} from 'react';
import { StyleSheet,Modal, StatusBar } from 'react-native';
import { Container, Header,Accordion,Content,Subtitle,Footer,Left,Body,Text, FooterTab,Right, Button, Icon, Title } from 'native-base';

export default function ModalBoxSearch ({ navigation }) {
    const [modalOpen,setModalOpen] = useState(false);
    _toggleModal = () =>{
        setModalOpen(!modalOpen);
    }
    return (
        <Modal visible={modalOpen}>
            <Container>
                    <Text>Hello Search</Text>
            </Container>
        </Modal>
        
    )
}
const styles = StyleSheet.create({
   
});