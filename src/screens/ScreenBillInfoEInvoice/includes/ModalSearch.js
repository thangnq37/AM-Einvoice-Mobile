/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import React ,{useState} from 'react';
import {useWindowDimensions} from 'react-native';
import Modal, { ModalContent,ModalTitle,SlideAnimation,ModalFooter,ModalButton,modalStyle} from 'react-native-modals';
import DatePicker from 'react-native-datepicker';
import styles from '../styles/style';
export default function ModalBoxSearch({ navigation }) {
    const width = useWindowDimensions().width;
    const lang = 'vi';
    const [modalOpen, setModalOpen] = useState(false);
    const [dateBegin, setDateBegin] = useState('2020-01-01');
    const [dateEnd, setDateEnd] = useState('2020-01-30');
    const _toggleModal = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <Modal
            width={width - 30}
            visible={modalOpen}
            onTouchOutside={() => {
                _toggleModal();
            }}
            modalTitle={<ModalTitle hasTitleBar={true} title="Tìm kiếm" />}
            modalAnimation={new SlideAnimation({
                initialValue: 0,
                useNativeDriver: true,
            })}
            footer={
                <ModalFooter>
                    <ModalButton
                        style={{ rolor: 'red' }}
                        text="Hủy"
                        onPress={() => { _toggleModal() }}
                    />
                    <ModalButton
                        text="Tìm kiếm"
                        onPress={() => { }}
                    />
                </ModalFooter>
            }
        >
            <ModalContent>
                <DatePicker
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: width - 75,
                        marginVertical: 3,
                        paddingVertical: 3

                    }}
                    date={dateBegin}
                    mode="date"
                    placeholder="Chọn ngày"
                    format="DD-MM-YYYY"
                    confirmBtnText="Xác nhận"
                    cancelBtnText="Hủy"
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
                    }}
                // onDateChange={(date) => {this.setState({date: date})}} 
                />
                <DatePicker
                    style={{
                        width: width - 75,
                        justifyContent: "center",
                        alignItems: "center",
                        marginVertical: 3,
                        paddingVertical: 3

                    }}
                    date={dateEnd}
                    mode="date"
                    placeholder="Chọn ngày"
                    format="DD-MM-YYYY"
                    confirmBtnText="Xác nhận"
                    cancelBtnText="Hủy"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36,
                            // marginVertical : 36
                        }
                    }}
                // onDateChange={(date) => {this.setState({date: date})}} 
                />
            </ModalContent>
        </Modal>
    )
}
