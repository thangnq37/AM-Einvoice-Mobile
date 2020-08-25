import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {
  Icon,
  Container,
  Header,
  Body,
  // Button,
  Title,
  Left,
  Right,
  Footer,
  FooterTab,
  Input,
  Item,
  // Text,
  Content,
  Badge,
} from 'native-base';

import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {getAll_BillReleaseEInvoices} from '../../redux/actions/billReleaseEInvoicesAction';
const ScreenBillReleaseEInvoices = (props) => {
  const navigation = useNavigation();
  const initData = {
    Lag: 'VIET',
    IsWindowsMode: '1',
  };
  useEffect(() => {
    props.getAll_BillReleaseEInvoices(initData.Lag, initData.IsWindowsMode);
  }, []);
  console.log(props.loading);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {props.loading ? <Text>Loading...</Text> : <Text>Loaded</Text>}
      <Text>Hello, world! This is Mananger EInvoice</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
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
