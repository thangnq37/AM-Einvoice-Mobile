/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import React ,{useState} from 'react';
import {useWindowDimensions} from 'react-native';
import Modal, { ModalContent,ModalTitle,SlideAnimation,ModalFooter,ModalButton,modalStyle} from 'react-native-modals';
import {Text,Form,Item,Picker,Icon, Right, Left} from "native-base";
import styles from '../styles/style';
const { forwardRef, useRef, useImperativeHandle } = React;
const ModalSort = forwardRef((props, ref) => {
    const width = useWindowDimensions().width;
    const [modalOpen,setModalOpen] = useState(false);
    const [selected2Key,setselected2Key] = useState('BILL_YMD');
    const [selected2Order,setSelected2Order] = useState('asc');
    const _toggleModalSort=()=>{
        setModalOpen(!modalOpen);
    }
    const _onSetselected2Key=(value)=>{
      setselected2Key(value);
    }
    const _onSelected2Order=(value)=>{
      setSelected2Order(value);
    }
    useImperativeHandle(ref, () => ({
        _toggleModalSort(){
            setModalOpen(!modalOpen);
        }
     }));
    return (
        <Modal
                width={width-30}
                visible={modalOpen}
                onTouchOutside={() => {
                    _toggleModalSort();
                }}
                modalTitle={<ModalTitle hasTitleBar={true} title="Sắp Xếp" />}
                modalAnimation={new SlideAnimation({
                    initialValue: 0, 
                    useNativeDriver: true,
                })}
                footer={
                    <ModalFooter>
                      <ModalButton
                        style={{rolor:'red'}}
                        text="Hủy"
                        onPress={() => {_toggleModalSort()}}
                      ></ModalButton>
                      <ModalButton
                        text="Sắp Xếp"
                        onPress={(event) => {props.onPress(selected2Key,selected2Order),_toggleModalSort()}}
                      />
                    </ModalFooter>
                  }
                >
                <ModalContent>
                <Form>
                  
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: undefined }}
                      placeholder="Chọn trường"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={selected2Key}
                      onValueChange={(e)=>_onSetselected2Key(e)}
                    >
                      <Picker.Item label="Ngày" value="BILL_YMD" />
                      <Picker.Item label="Khách Hàng" value="CUSTOMER_NM" />
                      <Picker.Item label="Mã số thuế" value="COMPANY_TAX_CD" />
                      
                      <Picker.Item label="Ký hiệu" value="BILL_SYMBOL" />
                      <Picker.Item label="Ký hiệu hóa đơn" value="FORM_SYMBOL" />
                      <Picker.Item label="Tiền tệ" value="CURRENCY_TYPE" />
                      <Picker.Item label="Thuế" value="VAT" />
                      <Picker.Item label="Thanh toán" value="PAYMENT_AMOUNT_AND_FC" />
                    </Picker>
                  </Item>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: undefined }}
                      placeholder="Sắp xếp"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={selected2Order}
                      onValueChange={(e)=>_onSelected2Order(e)}
                    >
                      <Picker.Item label="Tăng dần" value="asc" />
                      <Picker.Item label="Giảm dần" value="desc" />
                     
                    </Picker>
                  </Item>
                </Form>
                </ModalContent>
            </Modal>
    )
});
export default ModalSort;
