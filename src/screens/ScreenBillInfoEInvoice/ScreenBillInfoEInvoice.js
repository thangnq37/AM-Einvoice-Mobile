/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import React ,{useState,useRef} from 'react';
import ContentLoader,  {Instagram,BulletList, Facebook } from 'react-content-loader/native'
import { StyleSheet,TouchableOpacity, StatusBar,useWindowDimensions ,FlatList } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { 
    Card,
    CardItem,
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
import ModalSort from './includes/ModalSort';
import ListBillItem from './includes/ListBillItem';
import Modal, { ModalContent ,SlideAnimation,ModalTitle} from 'react-native-modals';
import styles from './styles/style';
import { connect } from "react-redux";
import {
    getBillCount,
    getBillData,
    searchData,
    sortData
} from './../../redux/actions/billInfoEInvoiceAction';
const ScreenBillInfoEInvoice = (props) => {
    const [bodySearch,setDateBegin] = useState({
        DateBegin:'20200101',
        DateEnd:'20201231',
        DCWayCode:'ALL'
    });
    const myRefSort = useRef();
    const myRefSearch = useRef();
    const navigation = useNavigation();
    const width = useWindowDimensions().width;
    const [modalShowCountBill,setModalShowCountBill] = useState(false);
    const [showInputSeach,setShowInputSeach] = useState(true);
    const [textSearch,setTextSearch] = useState('');
    // Show from input search
    _showInputSearch = () =>{
        setShowInputSeach(!showInputSeach);
        props.searchData(props.billDataDefault,'');
    }
    //  Show modal bill count 
    _showBillCount=()=>{
        setModalShowCountBill(!modalShowCountBill);
    }
    // Sort data
    _sortData = (key,order) => {
        props.sortData(props.billData==null?props.billDataDefault:props.billData,key,order);
    }
    // On Refresh
    _onRefresh = () =>{
        props.getBillCount();
        props.getBillData(bodySearch);
    }
    // on change text search input
    _onChangeSeach = (text) =>{
        setTextSearch(text);
        props.searchData(props.billDataDefault,text);
    }
    _goBackHome=()=>{
        navigation.goBack();
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
                    <Button transparent onPress={()=>myRefSort.current._toggleModalSort()}>
                        <Icon style={styles.colorIconEllipsis}  type="MaterialCommunityIcons" name='sort'  />
                    </Button>
                    
                    <Button transparent onPress={()=>myRefSearch.current._toggleModalSearch()}>
                        <Icon style={styles.colorIconEllipsis}  type="FontAwesome" name='gears'  />
                    </Button>
                </Right>
            </Header >
            ):(
                <Header  searchBar rounded>
                     <Item>
                         <Icon style={styles.ionClose} type="FontAwesome" onPress={()=>_showInputSearch()}  name="close" />
                         <Input onChangeText={(text) => {_onChangeSeach(text) }}  placeholder="Tìm kiếm" />
                         <Icon type="FontAwesome"   name="search" />
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
                {props.iSearch==false?
                <SwipeListView
                    data={props.billData==null?props.billDataDefault:props.billData}
                    renderItem={ (data, rowMap) => (
                        <ListBillItem 
                                     CUSTOMER_NM={data.item.CUSTOMER_NM}
                                     FORM_SYMBOL={data.item.FORM_SYMBOL}
                                     BILL_SYMBOL={data.item.BILL_SYMBOL}
                                     BILL_YMD={data.item.BILL_YMD}
                                     BILL_NO={data.item.BILL_NO}
                                     VAT = {data.item.VAT}
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
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />
                :
                <Button block danger>
                    <Text>Không tìm thấy dữ liệu với từ khóa : {textSearch}</Text>
                </Button>
                }
     
            </Content>
            }
            <Footer >
                <FooterTab style={styles.footer}>
                    <Button  onPress={() =>_goBackHome()}  vertical>
                    <Icon style={styles.icon}  type="Ionicons" name="ios-arrow-back" />
                    <Text style={styles.textIconFooter}>Quay lại</Text>
                    </Button>
                    <Button badge vertical   onPress={() =>_showBillCount()}>
                    <Badge ><Text>{props.billCount}</Text></Badge>
                    <Icon style={styles.icon} type="FontAwesome"   name="file-text" />
                    <Text style={styles.textIconFooter}>Hóa đơn</Text>
                    </Button>

                    <Button vertical onPress={()=>_onRefresh()}>
                    <Icon style={styles.colorIconRefresh}  type="FontAwesome" name="refresh" />
                    <Text style={styles.textIconFooter}>Làm mới</Text>
                    </Button>
                    </FooterTab>
            </Footer>
            <ModalSearch ref={myRefSearch} />
            <ModalSort onPress={(key,order)=>_sortData(key,order)} ref={myRefSort}/>
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
        getBillData:(params)=>dispatch(getBillData(params)),
        sortData:(data,key,order)=>dispatch(sortData(data,key,order)),
        searchData:(data,query)=>dispatch(searchData(data,query)),
    }
}
function mapStateToProps(state) {
    return {
        billDataDefault: state.billInfoEInvoiceReducer.billDataDefault,
        billData: state.billInfoEInvoiceReducer.billData,
        billCount: state.billInfoEInvoiceReducer.billCount,
        loading: state.billInfoEInvoiceReducer.loading,
        iSearch:state.billInfoEInvoiceReducer.iSearch,
    }    
}
export default connect(mapStateToProps, mapDispatchToProps)(ScreenBillInfoEInvoice);
