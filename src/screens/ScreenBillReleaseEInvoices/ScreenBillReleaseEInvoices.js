import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
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
  List,
  View,
} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';

import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {getAll_BillReleaseEInvoices} from '../../redux/actions/billReleaseEInvoicesAction';
import ContentLoader, {
  Instagram,
  BulletList,
  Facebook,
} from 'react-content-loader/native';
import ListBillReleaseItem from './includes/ListBillReleaseItem';
import ScreenAddUpdate from './includes/ScreenAddUpdate';
import styles from './styles/style';
const ScreenBillReleaseEInvoices = (props) => {
  const navigation = useNavigation();
  const initData = {
    Lag: 'VIET',
    IsWindowsMode: '0',
  };
  useEffect(() => {
    props.getAll_BillReleaseEInvoices(initData.Lag, initData.IsWindowsMode);
  }, []);
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      {props.loading ? (
        <Content style={{padding: 25}}>
          <Facebook />
          <Facebook />
          <Facebook />
          <Facebook />
          <Facebook />
          <Facebook />
          <Facebook />
          <Facebook />
        </Content>
      ) : (
        <Content>
          {/* {props.getAllData.result.map((row) => (
            
          ))} */}
          {console.log(props.getAllData.result)}
          <SwipeListView
            data={props.getAllData.result}
            renderItem={(data, rowMap) => (
              <ListBillReleaseItem
                BILLKIND_NM_VIET={data.item.BILLKIND_NM_VIET}
                FORM_SYMBOL={data.item.FORM_SYMBOL}
                BILL_SYMBOL={data.item.BILL_SYMBOL}
                FROM_NUM={data.item.FROM_NUM}
                TO_NUM={data.item.TO_NUM}
                RELEASE_COUNT={data.item.RELEASE_COUNT}
                USE_YMD={data.item.USE_YMD}
                TEMPLATE_NM_VIET={data.item.TEMPLATE_NM_VIET}
                // This Part just show image
                IS_CANCEL_RELEASE={data.item.IS_CANCEL_RELEASE}
                CANCEL_RELEASE_YMD={data.item.CANCEL_RELEASE_YMD}
                DATE_CANCEL={data.item.DATE_CANCEL}
              />
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.rowBack}>
                <TouchableOpacity
                  style={[styles.backLeftBtn, styles.backLeftBtnLeft]}
                  onPress={() => {
                    props.navigation.navigate(
                      'AddUpdateReleaseEInvoicesScreen',
                      data.item
                    );
                  }}>
                  <Text style={styles.backTextWhite}>Sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.backRightBtn, styles.backRightBtnRight]}
                  onPress={() => {
                    alert(data.item.BILL_RELEASE_CD);
                  }}>
                  <Text style={styles.backTextWhite}>Xóa</Text>
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Content>
      )}
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    getAllData: state.billReleaseEInvoicesReducer.dataAll,
    loading: state.billReleaseEInvoicesReducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAll_BillReleaseEInvoices: (Lag, IsWindowsMode) =>
      dispatch(getAll_BillReleaseEInvoices(Lag, IsWindowsMode)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScreenBillReleaseEInvoices);
