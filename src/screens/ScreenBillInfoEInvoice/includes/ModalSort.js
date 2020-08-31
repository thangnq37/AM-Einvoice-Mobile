/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import React ,{useState} from 'react';
import {useWindowDimensions} from 'react-native';
import Modal, { ModalContent,ModalTitle,SlideAnimation,ModalFooter,ModalButton,modalStyle} from 'react-native-modals';
import {Text,Form,Item,Picker,Icon} from "native-base";
import styles from '../styles/style';
const { forwardRef, useRef, useImperativeHandle } = React;
const ModalSort = forwardRef((props, ref) => {
    const width = useWindowDimensions().width;
    const [modalOpen,setModalOpen] = useState(false);
    const [selected2Name,setSelected2Name] = useState(undefined);
    const [selected2Sort,setSelected2Sort] = useState(undefined);
    const _toggleModalSort=()=>{
        setModalOpen(!modalOpen);
    }
    const _onValueChange2Name=(value)=>{
      setSelected2Name(value);
    }
    const _onValueChange2Sort=(value)=>{
      setSelected2Sort(value);
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
                        onPress={() => {}}
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
                      placeholder="Select your SIM"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={selected2Name}
                      onValueChange={()=>_onValueChange2Name()}
                    >
                      <Picker.Item label="Mẫu Số" value="key0" />
                      <Picker.Item label="Khách Hàng" value="key1" />
                      <Picker.Item label="Mã Số Thế" value="key2" />
                      <Picker.Item label="Thanh Toán" value="key3" />
                      <Picker.Item label="Tiền Tệ" value="key4" />
                    </Picker>
                  </Item>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: undefined }}
                      placeholder="Select your SIM"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={_onValueChange2Sort}
                      onValueChange={()=>_onValueChange2Sort()}
                    >
                      <Picker.Item label="Tăng" value="ASC" />
                      <Picker.Item label="Giảm" value="DESC" />
                     
                    </Picker>
                  </Item>
                </Form>
                </ModalContent>
            </Modal>
    )
});
export default ModalSort;
