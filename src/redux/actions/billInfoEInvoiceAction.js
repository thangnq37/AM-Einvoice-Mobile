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
                Authorization: `Bearer ${accessToken.access_token}`,
                'Content-Type': 'application/json'
            }
        };
        const body = { dateBegin, dateEnd, DCWayCode, Lag: "VIET" };
        try {
            const result = await axios.post(api.root + api.BillInfoEinvoice.getAll, JSON.stringify(body), config);
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
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken.access_token}`,
                'Content-Type': 'application/json'
            }
        };
        const body = { Lag: "VIET" };
        try {
            const result = await axios.post(api.root + api.BillInfoEinvoice.getBillCount, JSON.stringify(body), config);
            console.log(result);
            dispatch({ type: billInfoEInvoiceType.GET_BILL_COUNT });
        } catch (error) {
            throw new Error("An Error has occurred!");
        }
    }
}