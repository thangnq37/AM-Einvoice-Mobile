/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import {StyleSheet} from "react-native"
const styles = StyleSheet.create({
    ListItem:{
        backgroundColor:"#ffffff"
    },
    header:{
        backgroundColor:'#28333b'
    },
    footer:{
        backgroundColor:'#28333b'
    },
    colorIconRefresh:{
        color:'#dca008'
    },
    colorIconEllipsis:{
        color:'#ffffff'
    },
    IconRefresh: {
        transform: [{ rotate: '90deg'}],
        color:'#dca008'
    },
    icon:{
        color:'#ffffff'
    },
    textIconFooter:{
        color:'#ffffff'
    },
    ionClose:{
        color:'red'
    },
    iconSearch:{
        color:'#dca008'
    },
    textListNameCompany:{
        fontSize:12,
        fontWeight:'bold'
    },
    textListVat:{
        fontSize:11,
        fontWeight:'bold'
    },
    textListBillNumber:{
        fontSize:11,
        color:'red',
        fontWeight:'bold'
    },
    textListBillDate:{
        fontSize:11,
        color:'blue',
        fontWeight:'bold'
    },
    textCurrencyType:{
        fontSize:11,
        color:'blue',
        fontWeight:'bold'
    }, 
    textPayMent:{
        fontSize:11,
        color:'blue',
        fontWeight:'bold'
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        // backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    ////////////// RIGHT //////////////
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 150,
    },

    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    ////////////// LEFT //////////////
    backLeftBtn:{
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 150,
    },
    backLeftBtnLeft: {
        backgroundColor: 'green',
        left: 0,
    },
});
export default styles;