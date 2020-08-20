import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import { billInfoEInvoiceType } from "../types/billInfoEInvoiceType";
import api from '../../api/api';
export const getAll = (dateBegin, dateEnd, DCWayCode) => {
    return async dispatch => {
        const storageData = await AsyncStorage.getItem("userData");
        const accessToken = JSON.parse(storageData);
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken.accessToken}`,
                'Content-Type': 'application/json'
            }
        };
        const body = { dateBegin, dateEnd, DCWayCode, Lag: "VIET" };
        try {
            const result = await axios.post(api.root + api.BillInfoEinvoice.getAll,config,JSON.stringify(body));
            console.log(result);
            dispatch({ type: billInfoEInvoiceType.GET_ALL });
        } catch (error) {
            throw new Error("An Error has occurred!");
        }
    }
}
export const getBillCount = () => {
    return async dispatch => {
        const storageData = await AsyncStorage.getItem("userData");
        const accessToken = JSON.parse(storageData);
        console.log(accessToken.accessToken);
        const config = {
            headers: {
                'Authorization': `Bearer ${accessToken.accessToken}`,
                'Content-Type': 'application/json'
            }
        };
        const body = { Lag: "VIET" };
       
        try {
            const billCount = await axios.get(api.root + api.BillInfoEinvoice.getBillCount,config,JSON.stringify(body));
            console.log(billCount);
            dispatch({ type: billInfoEInvoiceType.GET_BILL_COUNT , billCount:billCount.data.result.textBillCount});
        } catch (error) {
            throw new Error("An Error has occurred!");
        }
    }
}