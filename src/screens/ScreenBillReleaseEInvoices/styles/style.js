import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  ListItem: {
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#28333b',
  },
  footer: {
    backgroundColor: '#28333b',
  },
  colorIconRefresh: {
    color: '#dca008',
  },
  colorIconEllipsis: {
    color: '#ffffff',
  },
  IconRefresh: {
    transform: [{rotate: '90deg'}],
    color: '#dca008',
  },
  icon: {
    color: '#ffffff',
  },
  textIconFooter: {
    color: '#ffffff',
  },
  ionClose: {
    color: 'red',
  },
  iconSearch: {
    color: '#dca008',
  },
  textListNameCompany: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  textBlack: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  textRed: {
    fontSize: 11,
    color: 'red',
    fontWeight: 'bold',
  },
  textBlue: {
    fontSize: 11,
    color: 'blue',
    fontWeight: 'bold',
  },
  textPurple: {
    fontSize: 11,
    color: 'purple',
    fontWeight: 'bold',
  },
  textRed: {
    fontSize: 11,
    color: 'red',
    fontWeight: 'bold',
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
    width: 75,
  },

  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  ////////////// LEFT //////////////
  backLeftBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backLeftBtnLeft: {
    backgroundColor: 'blue',
    left: 0,
  },
});
export default styles;
