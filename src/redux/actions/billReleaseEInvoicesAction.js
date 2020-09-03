import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import axiosClient from '../../axios/axiosClient';
import {billReleaseEInvoicesType} from '../types/billReleaseEInvoicesType';
import api from '../../api/api';

export const getAll_BillReleaseEInvoices = (Lag, IsWindowsMode) => {
  return async (dispatch) => {
    dispatch({
      type: billReleaseEInvoicesType.GET_ALL,
      loading: true,
    });
    const params = {Lag, IsWindowsMode};
    // const params1={Lag};
    try {
      const result = await axiosClient.get(api.billReleaseEIvoices.getAll, {
        params,
      });
      // const result1 = await axiosClient.get(api.billReleaseEIvoices.getBillKind, {
      //   params1,
      // });
      if (result.numberStatus == 1) {
        dispatch({
          type: billReleaseEInvoicesType.GET_ALL,
          result: result,
          loading: false,
        });
        // dispatch({
        //   type: billReleaseEInvoicesType.BILL_KIND,
        //   result: result1,
        //   loading: false,
        // });
      } else {
        console.log('failed');
      }
    } catch (error) {
      throw new Error('An Error has occurred!');
    }
  };
};
export const getBillKind_BillReleaseEInvoices = (Lag) => {
  return async (dispatch) => {
    dispatch({
      type: billReleaseEInvoicesType.BILL_KIND,
      loading: true,
    });
    const params = {Lag};
    try {
      const result = await axiosClient.get(api.billReleaseEIvoices.getBillKind, {
        params,
      });
      if (result.numberStatus == 1) {
        dispatch({
          type: billReleaseEInvoicesType.BILL_KIND,
          result: result,
          loading: false,
        });
      } else {
        console.log('failed');
      }
    } catch (error) {
      throw new Error('An Error has occurred!');
    }
  };
};
