import React ,{useState} from 'react';
import { StyleSheet, StatusBar,useWindowDimensions } from 'react-native';
import { Container,Header,Body,Button,Icon,Title,Left,Right,Footer,FooterTab,Text,Content,Badge} from 'native-base';
import ModalSearch from './includes/ModalSearch';
import Modal, { ModalContent ,SlideAnimation,ModalTitle} from 'react-native-modals';
import styles from './styles/style';
import { connect } from "react-redux";
// import { billInfoEInvoiceType } from '../../redux/types/billInfoEInvoiceType';
const ScreenBillInfoEInvoice = (props,{ navigation }) => {
    const width = useWindowDimensions().width;
    const [modalShowCountBill,setModalShowCountBill] = useState(false);
    _showCountBill=()=>{
        setModalShowCountBill(!modalShowCountBill);
    }
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>QUAN LÝ HÓA ĐƠN</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
            <Content >

            </Content>
            <Footer>
                <FooterTab>
                    <Button  onPress={() => navigation.navigate("ScreenHome")}  vertical>
                    <Icon   name="arrow-back" />
                    <Text>Quay lại</Text>
                    </Button>
                    <Button badge vertical   onPress={() =>_showCountBill()}>
                    <Badge ><Text>51</Text></Badge>
                    <Icon   name="navigate" />
                    <Text>Hóa đơn</Text>
                    </Button>
                    <Button vertical>
                    <Icon  name="add" />
                    <Text>Thêm mới</Text>
                    </Button>
                    <Button vertical
                    >
                    <Icon   name="search" />
                    <Text>Tìm kiếm</Text>
                    </Button>
                    </FooterTab>
            </Footer>
            {/* <ModalSearch ></ModalSearch> */}
            <Modal
                width={width-30}
                visible={modalShowCountBill}
                modalAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                onTouchOutside={() => {
                    _showCountBill();
                }}
                modalTitle={<ModalTitle hasTitleBar={false}  title="Thông báo" />}
            >
            <ModalContent>
                 <Text>Số lượng hóa đơn còn lại: 55 hóa đơn</Text>
            </ModalContent>
            </Modal>
        </Container>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        getBillCount: ()=> dispatch(getBillCount()),
    }
}
export default connect(null, mapDispatchToProps)(ScreenBillInfoEInvoice);
