/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import axiosClient from "../../axios/axiosClient";
import AsyncStorage from '@react-native-community/async-storage';
import { billInfoEInvoiceType } from "../types/billInfoEInvoiceType";
import SearchInput, { createFilter } from 'react-native-search-filter';
import api from '../../api/api';
export const getAll = (params) => {
    return async dispatch => {
        dispatch({ type: billInfoEInvoiceType.GET_ALL,getAllData:null ,loading:true});
        params.Lag="VIET";
        try {
            const result = await axiosClient.get( api.BillInfoEinvoice.getAll,{params});
            if(result.numberStatus==1){
                dispatch({ type: billInfoEInvoiceType.GET_ALL ,getAllData:result.result.BILL,loading:false});
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
        const params ={'Lag':'VIET'}
        try {
            const result = await axiosClient.get(api.BillInfoEinvoice.getBillCount,{params});
            if(result.numberStatus==1){
                dispatch({ type: billInfoEInvoiceType.GET_BILL_COUNT , billCount:result.result.textBillCount});
            }else{
                console.log(result);
            }
           
        } catch (error) {
            throw new Error("An Error has occurred! => getBillCount");
        }
    }
}
export const searchAll = (data,textSearch)=>{
    const KEYS_TO_FILTERS = ['CUSTOMER_NM', 'COMPANY_TAX_CD','FORM_SYMBOL','CURRENCY_TYPE','BILL_YMD','BILL_NO','BILL_SYMBOL','PAYMENT_AMOUNT_AND_FC'];
    const result =   data.filter(createFilter(textSearch, KEYS_TO_FILTERS));
    console.log(result);
    return result;
}