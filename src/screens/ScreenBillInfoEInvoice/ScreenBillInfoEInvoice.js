/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import React ,{useState,useRef} from 'react';
import ContentLoader,  {Instagram,BulletList, Facebook } from 'react-content-loader/native'
import { StyleSheet,TouchableOpacity, StatusBar,useWindowDimensions ,FlatList } from 'react-native';
import { 
    Icon,
    Container,
    Header,
    Body,
    Button,
    Title,
    Left,
    Right,
    Footer,
    FooterTab,
    Input,
    Item,
    Text,
    Content,
    Badge,
    SwipeRow,
    View
} from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';
import ModalSearch from './includes/ModalSearch';
import ListBillItem from './includes/ListBillItem';
import Modal, { ModalContent ,SlideAnimation,ModalTitle} from 'react-native-modals';
import styles from './styles/style';
import { connect } from "react-redux";
import {getBillCount,getAll,searchAll} from './../../redux/actions/billInfoEInvoiceAction';
const ScreenBillInfoEInvoice = (props) => {
    const navigation = useNavigation();
    const width = useWindowDimensions().width;
    const [modalShowCountBill,setModalShowCountBill] = useState(false);
    const [showInputSeach,setShowInputSeach] = useState(true);
    const [textSearch,setTextSearch] = useState('');
    const [bodySearch,setDateBegin] = useState({
        DateBegin:'20200101',
        DateEnd:'20201231',
        DCWayCode:'ALL'
    });
    _showBillCount=()=>{
        setModalShowCountBill(!modalShowCountBill);
    }
    _showModalSearch= () => {
        alert();
    }
    _onRefresh = () =>{
        props.getBillCount();
        props.getAll(bodySearch);
    }
    _showInputSearch = () =>{
        setShowInputSeach(!showInputSeach);
      
    }
    _onChangeTextSearch = (text) =>{
        setTextSearch(text);
        props.searchAll(props.getAllData, textSearch);
    }
    React.useEffect(()=>{
        _onRefresh();
    },[]);  
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
                        <Input onChangeText={(text) => {_onChangeTextSearch(text) }}  placeholder="Tìm kiếm" />
                        <Icon style={styles.ionClose} type="FontAwesome" onPress={()=>_showInputSearch()}  name="close" />
                    </Item>
                </Header>
            )}
            {props.loading?
            <Content style={{padding:25}}>
                   <Facebook  />
                   <Facebook />
                   <Facebook />
                   <Facebook />
                   <Facebook />
                   <Facebook />
                   <Facebook />
                   <Facebook />
            </Content>: 
            <Content>
                <SwipeListView
                    data={props.searchAllData==null?props.getAllData:props.searchAllData}
                    renderItem={ (data, rowMap) => (
                        <ListBillItem 
                                     CUSTOMER_NM={data.item.CUSTOMER_NM}
                                     FORM_SYMBOL={data.item.FORM_SYMBOL}
                                     BILL_SYMBOL={data.item.BILL_SYMBOL}
                                     BILL_YMD={data.item.BILL_YMD}
                                     BILL_NO={data.item.BILL_NO}
                                     CURRENCY_TYPE={data.item.CURRENCY_TYPE}
                                     COMPANY_TAX_CD={data.item.COMPANY_TAX_CD}
                                     PAYMENT_AMOUNT_AND_FC={data.item.PAYMENT_AMOUNT_AND_FC}                    
                                 />  
                    )}
                    renderHiddenItem={ (data, rowMap) => (
                        <View style={styles.rowBack}>
                            <TouchableOpacity style={[styles.backLeftBtn, styles.backLeftBtnLeft]}>
                                <Text style={styles.backTextWhite}>Ký</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}>
                                <Text style={styles.backTextWhite}>Xóa</Text>
                            </TouchableOpacity>
                            
                        </View>
                        
                    )}
                    leftOpenValue={0}
                    rightOpenValue={0}
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
            {/* <ModalSearch ref={childRef} ></ModalSearch> */}
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
        getAll:(params)=>dispatch(getAll(params)),
        searchAll:(data,textSearch)=>dispatch(searchAll(data,textSearch)),
    }
}
function mapStateToProps(state) {
    return {
        getAllData: state.billInfoEInvoiceReducer.getAllData,
        billCount: state.billInfoEInvoiceReducer.billCount,
        loading: state.billInfoEInvoiceReducer.loading,
        searchAllData: state.billInfoEInvoiceReducer.searchAllData,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ScreenBillInfoEInvoice);
