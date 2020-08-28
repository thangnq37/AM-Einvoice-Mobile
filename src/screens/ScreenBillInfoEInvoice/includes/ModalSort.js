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
const ModalSort = forwardRef((props, ref) => {
    const width = useWindowDimensions().width;
    const lang = 'vi';
    const [modalOpen,setModalOpen] = useState(false);
    const _toggleModalSort=()=>{
        setModalOpen(!modalOpen);
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
                      />
                      <ModalButton
                        text="Sắp Xếp"
                        onPress={() => {}}
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
export default ModalSort;
