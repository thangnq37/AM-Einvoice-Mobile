import React ,{useState,useRef} from 'react';
import ContentLoader,  {Instagram,BulletList, Facebook } from 'react-content-loader/native'
import { StyleSheet, StatusBar,useWindowDimensions ,FlatList } from 'react-native';
import { Icon,Container,Header,Body,Button,Title,Left,Right,Footer,FooterTab,Input,Item,Text,Content,Badge} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import ModalSearch from './includes/ModalSearch';
import ListBillItem from './includes/ListBillItem';
import Modal, { ModalContent ,SlideAnimation,ModalTitle} from 'react-native-modals';
import styles from './styles/style';
import { connect } from "react-redux";
import {getBillCount,getAll} from './../../redux/actions/billInfoEInvoiceAction';
const ScreenBillInfoEInvoice = (props) => {
    const navigation = useNavigation();
    const width = useWindowDimensions().width;
    const [modalShowCountBill,setModalShowCountBill] = useState(false);
    const [showInputSeach,setShowInputSeach] = useState(true);
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
        props.getAll('20200101','20201231','ALL');
        
    }
    _showInputSearch = () =>{
        setShowInputSeach(!showInputSeach);
    }
    
    React.useEffect(()=>{
        props.getBillCount();
        props.getAll('20200101','20201231','ALL');
    },[]);  
    console.log(props.loading);
    return (
        <Container>
            {showInputSeach ? (
            <Header searchBar  style={styles.header}>
                <Left>
                    <Button transparent>
                        <Icon  type="FontAwesome"   name="file-text"   />
                    </Button>
                </Left>
                <Body>
                    <Title>QUAN LÝ HÓA ĐƠN</Title>
                </Body>
                <Right>
                    
                    <Button transparent  onPress={()=>_showInputSearch()} >
                        <Icon style={styles.iconSearch} type="FontAwesome"   name="search" />
                    </Button>
                    <Button transparent onPress={()=>_showModalSearch()}>
                        <Icon style={styles.colorIconEllipsis}  type="FontAwesome" name='ellipsis-v'  />
                    </Button>
                </Right>
            </Header >
            ):(
                <Header style={styles.header} searchBar rounded>
                    <Item>
                        <Icon type="FontAwesome"   name="search" />
                        <Input placeholder="Tìm kiếm" />
                        <Icon style={styles.ionClose} type="FontAwesome" onPress={()=>_showInputSearch()}  name="close" />
                    </Item>
                </Header>
            )}
            {props.loading?
            <Content style={{padding:30}}>
                   <Facebook  />
                   <Facebook />
                   <Facebook />
                   <Facebook />
                   <Facebook />
                   <Facebook />
                   <Facebook />
                   <Facebook />
            </Content>: 
            <Content >
                <FlatList
                    keyExtractor={item => item.BILL_CD}
                    data={props.getAllData}
                    renderItem={({ item }) => (
                        <ListBillItem 
                            CUSTOMER_NM={item.CUSTOMER_NM}
                            FORM_SYMBOL={item.FORM_SYMBOL}
                            BILL_SYMBOL={item.BILL_SYMBOL}
                            BILL_YMD={item.BILL_YMD}
                            BILL_NO={item.BILL_NO}
                            CURRENCY_TYPE={item.CURRENCY_TYPE}
                            COMPANY_TAX_CD={item.COMPANY_TAX_CD}
                            PAYMENT_AMOUNT_AND_FC={item.PAYMENT_AMOUNT_AND_FC}                    
                        />  
                    )}
            />
            </Content>
            }
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
                    <Button vertical onPress={()=>_onRefresh()}>
                    <Icon style={styles.colorIconRefresh}  type="FontAwesome" name="refresh" />
                    <Text style={styles.textIconFooter}>Làm mới</Text>
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
    return {
        getAllData: state.billInfoEInvoiceReducer.getAllData,
        billCount: state.billInfoEInvoiceReducer.billCount,
        loading: state.billInfoEInvoiceReducer.loading,
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(ScreenBillInfoEInvoice);
