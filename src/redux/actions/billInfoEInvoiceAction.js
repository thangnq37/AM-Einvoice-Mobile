import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import { billInfoEInvoiceType } from "../types/billInfoEInvoiceType";
import api from '../../api/api';
export const getAll = (DateBegin, DateEnd, DCWayCode) => {
    return async dispatch => {
        dispatch({ type: billInfoEInvoiceType.GET_ALL,getAllData:null ,loading:true});
        const storageData = await AsyncStorage.getItem("userData");
        const accessToken = JSON.parse(storageData);
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken.accessToken}`,
                'Content-Type': 'application/json'
            },
            params:{ DateBegin, DateEnd, DCWayCode, Lag: "VIET" }
        };
     
        try {
            const result = await axios.get(api.root + api.BillInfoEinvoice.getAll,config);
            if(result.data.numberStatus==1){
                dispatch({ type: billInfoEInvoiceType.GET_ALL ,getAllData:result.data.result.BILL,loading:false});
            }else{
                console.log(result);
            }
        } catch (error) {
            throw new Error("An Error has occurred! => getAll");
        }
    }
}
export const getBillCount = () => {
    return async dispatch => {
        const storageData = await AsyncStorage.getItem("userData");
        const accessToken = JSON.parse(storageData);
        const config = {
            headers: {
                'Authorization': `Bearer ${accessToken.accessToken}`,
                'Content-Type': 'application/json'
            },
            params:{
                Lag: "VIET"
            }
        };
        try {
            const result = await axios.get(api.root + api.BillInfoEinvoice.getBillCount,config);
            if(result.data.numberStatus==1){
                dispatch({ type: billInfoEInvoiceType.GET_BILL_COUNT , billCount:result.data.result.textBillCount});
            }else{
                console.log(result);
            }
           
        } catch (error) {
            throw new Error("An Error has occurred! => getBillCount");
        }
    }
}
export const searchAll = (getAllData,keySearch) => {
   
    return async dispatch => {
        console.log(getAllData);
    }
}