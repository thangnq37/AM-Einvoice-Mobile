import React ,{useState} from 'react';
import { StyleSheet, StatusBar,useWindowDimensions } from 'react-native';
import Modal, { ModalContent,ModalTitle,SlideAnimation,ModalFooter,ModalButton,modalStyle } from 'react-native-modals';
import { Container,Header,Accordion,Content,Subtitle,Footer,Input,List,Item,ListItem,Left,Body,Text, Card, CardItem, FooterTab,Right, Button, Icon, Title } from 'native-base';
import ModalBoxSearch from './includes/ModalBoxSearch';
import DatePicker from 'react-native-datepicker';
import styles from './styles/style';
const ScreenBillManagement = ({ navigation }) => {
    const width = useWindowDimensions().width;
    const [modalOpen,setModalOpen] = useState(false);
    const [dateBegin,setDateBegin] = useState('2020-01-01');
    const [dateEnd,setDateEnd] = useState('2020-01-01');

    _showModal = () =>{
        setModalOpen(!modalOpen);
    }
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
                        _showModal()
                        } transparent>
                        <Icon name='search' />
                    </Button>
                    <Button  transparent>
                        <Icon name='add' />
                    </Button>
                </Right>
            </Header>
            <List>
                <ListItem>
                <Text>Simon Mignolet</Text>
                </ListItem>
                <ListItem>
                <Text>Nathaniel Clyne</Text>
                </ListItem>
                <ListItem>
                <Text>Dejan Lovren</Text>
                </ListItem>
            </List>

            <Modal
                // modalStyle={{top:-100}}
                width={width-30}
                visible={modalOpen}
                onTouchOutside={() => {
                    // _showModal();
                }}
                modalTitle={<ModalTitle hasTitleBar={true} title="Tìm kiếm" />}
                modalAnimation={new SlideAnimation({initialValue: 0, // optional
                    useNativeDriver: true, // optional 
                })}
                footer={
                    <ModalFooter>
                      <ModalButton
                        style={{rolor:'red'}}
                        text="Hủy"
                        onPress={() => {_showModal()}}
                      />
                      <ModalButton
                        text="Tìm kiếm"
                        onPress={() => {}}
                      />
                    </ModalFooter>
                  }
                >
                <ModalContent>
                  
                    <DatePicker
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width:width-75,
                            marginVertical: 3,
                            paddingVertical: 3
                           
                        }}
                        date={dateBegin}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        // ... You can check the source to find the other keys.
                        }}
                        // onDateChange={(date) => {this.setState({date: date})}} 
                    />
                     <DatePicker
                        style={{
                            width:width-75,
                            justifyContent: "center",
                            alignItems: "center",
                            marginVertical: 3,
                            paddingVertical: 3
                           
                        }}
                        date={dateEnd}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        // ... You can check the source to find the other keys.
                        }}
                        // onDateChange={(date) => {this.setState({date: date})}} 
                    />
                   
                        
               
                    
                  
                </ModalContent>
            </Modal>
        </Container>
    );
};
export default ScreenBillManagement;
