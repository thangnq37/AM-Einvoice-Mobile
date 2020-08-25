import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import {billReleaseEInvoicesType} from '../types/billReleaseEInvoicesType';
import api from '../../api/api';

export const getAll_BillReleaseEInvoices = (Lag, IsWindowsMode) => {
  return async (dispatch) => {
    dispatch({
      type: billReleaseEInvoicesType.GET_ALL,
      loading: true,
    });
    const storageData = await AsyncStorage.getItem('userData');
    const accessToken = JSON.parse(storageData).accessToken;
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      params: {
        Lag,
        IsWindowsMode,
      },
    };
    // const body = ;
    // console.log(api.root + api.billReleaseEIvoices.getAll);
    try {
      const result = await axios
        .get(api.root + api.billReleaseEIvoices.getAll, config)
        .catch((err) => {
          console.log(err);
        });
      if (result.data.numberStatus == 1) {
        dispatch({
          type: billReleaseEInvoicesType.GET_ALL,
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
