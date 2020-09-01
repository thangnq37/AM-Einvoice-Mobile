/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import React ,{useState} from 'react';
import {useWindowDimensions} from 'react-native';
import Modal, { ModalContent,ModalTitle,SlideAnimation,ModalFooter,ModalButton,modalStyle} from 'react-native-modals';
import {Text} from "native-base"
import styles from '../styles/style';
const { forwardRef, useRef, useImperativeHandle } = React;
const ModalSearch = forwardRef((props, ref) => {
        const width = useWindowDimensions().width;
        const [modalOpen,setModalOpen] = useState(false);
        const [DateBegin,setDateBegin] = useState('20200101'); 
        const [DateEnd,setDateEnd] = useState('20201231');
        const _toggleModalSearch=()=>{
            setModalOpen(!modalOpen);
        }
        useImperativeHandle(ref, () => ({
          _toggleModalSearch(){
            setModalOpen(!modalOpen);
            }
         }));
    return (
        <Modal
                width={width-30}
                visible={modalOpen}
                onTouchOutside={() => {
                    _toggleModalSearch();
                }}
                modalTitle={<ModalTitle hasTitleBar={true} title="Tìm kiếm" />}
                modalAnimation={new SlideAnimation({
                    initialValue: 0, 
                    useNativeDriver: true,
                })}
                footer={
                    <ModalFooter>
                      <ModalButton
                        style={{rolor:'red'}}
                        text="Hủy"
                        onPress={() => {_toggleModalSearch()}}
                      />
                      <ModalButton
                        text="Tìm kiếm"
                        onPress={(event) => {props.onPress(DateBegin,DateEnd),_toggleModalSearch()}}
                      />
                    </ModalFooter>
                  }
                >
                <ModalContent>
                <Text>Hello</Text>
                </ModalContent>
            </Modal>
    )
});
export default ModalSearch;
