import React ,{useState,useRef} from 'react';
import { StyleSheet, StatusBar,useWindowDimensions } from 'react-native';
import { Icon,Container,Header,Body,Button,Title,Left,Right,Footer,FooterTab,Input,Item,Spinner,Text,Content,Badge} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import ModalSearch from './includes/ModalSearch';
import Modal, { ModalContent ,SlideAnimation,ModalTitle} from 'react-native-modals';
import styles from './styles/style';
import { connect } from "react-redux";
import {getBillCount,getAll} from './../../redux/actions/billInfoEInvoiceAction';
const ScreenBillInfoEInvoice = (props) => {
    const navigation = useNavigation();
    const width = useWindowDimensions().width;
    const [modalShowCountBill,setModalShowCountBill] = useState(false);
    const childRef = useRef();
    _showBillCount=()=>{
        setModalShowCountBill(!modalShowCountBill);
    }
    _showModalSearch= () => {
        if(childRef.current) {
            alert();
            childRef.current._toggleModal();
        }else{
            alert();
        }
    }
    _onRefresh = () =>{
        props.getBillCount();
    }
    React.useEffect(()=>{
        props.getBillCount();
        props.getAll('20200101','20201231','ALL');
    },[]);
    return (
        <Container>
            <Header style={styles.header}>
                <Left>
                    <Button transparent>
                        <Icon type="FontAwesome"   name="file-text"   />
                    </Button>
                </Left>
                <Body>
                    <Title>QUAN LÝ HÓA ĐƠN</Title>
                </Body>
                <Right>
                    <Button  transparent>
                        <Icon style={styles.colorIconRefresh} onPress={()=>_onRefresh()} type="FontAwesome" name='refresh'  />
                    </Button>
                    <Button transparent>
                        <Icon style={styles.colorIconEllipsis} type="FontAwesome" name='ellipsis-v'  />
                    </Button>
                </Right>
            </Header>
            <Content >
            <Item>
            
                <Input placeholder="Nhập từ khóa tìm kiếm .... " />
                <Icon  type="Ionicons"    name="search-outline" />
            </Item>
            </Content>
            <Footer >
                <FooterTab style={styles.footer}>
                    <Button  onPress={() =>navigation.goBack()}  vertical>
                    <Icon style={styles.icon}  type="Ionicons" name="ios-arrow-back" />
                    <Text style={styles.textIconFooter}>Quay lại</Text>
                    </Button>
                    <Button badge vertical   onPress={() =>_showBillCount()}>
                    <Badge ><Text>{props.billCount}</Text></Badge>
                    <Icon style={styles.icon} type="FontAwesome"   name="file-text" />
                    <Text style={styles.textIconFooter}>Hóa đơn</Text>
                    </Button>
                    <Button vertical>
                    <Icon style={styles.icon} type="MaterialIcons" name="add-box" />
                    <Text style={styles.textIconFooter}>Thêm mới</Text>
                    </Button>
                    <Button vertical  onPress={()=>_showModalSearch()}
                    >
                    <Icon style={styles.icon} type="FontAwesome"   name="search" />
                    <Text style={styles.textIconFooter}>Tìm kiếm</Text>
                    </Button>
                    </FooterTab>
            </Footer>
            <ModalSearch ref={childRef} ></ModalSearch>
            <Modal
                width={width-30}
                visible={modalShowCountBill}
                modalAnimation={new SlideAnimation({
                    slideFrom: 'bottom',   
                })}
                onTouchOutside={() => {
                    _showBillCount();
                }}
                modalTitle={<ModalTitle hasTitleBar={false}  title="Thông báo" />}
            >
            <ModalContent>
                 <Text>Số lượng hóa đơn còn lại: {props.billCount} hóa đơn</Text>
            </ModalContent>
            </Modal>
        </Container>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        getBillCount: ()=> dispatch(getBillCount()),
        getAll:(dateBegin, dateEnd, DCWayCode)=>dispatch(getAll(dateBegin, dateEnd, DCWayCode)),
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
        billCount: state.billInfoEInvoiceReducer.billCount,
        getAll: state.billInfoEInvoiceReducer.getAll,
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(ScreenBillInfoEInvoice);
