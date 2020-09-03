/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import axiosClient from "../../axios/axiosClient";
import AsyncStorage from '@react-native-community/async-storage';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { billInfoEInvoiceType } from "../types/billInfoEInvoiceType";
import {compareValues} from './../../Helpers/Helpers';
import api from '../../api/api';
export const getBillData = (params) => {
    return async dispatch => {
        dispatch({ 
            type: billInfoEInvoiceType.GET_ALL,
            billDataDefault:null,
            billData:null,
            loading:true,
            iSearch:false});
        params.Lag="VIET";
        try {
            const result = await axiosClient.get( api.BillInfoEinvoice.getAll,{params});
            if(result.numberStatus==1){
                dispatch({ 
                    type: billInfoEInvoiceType.GET_ALL ,
                    billDataDefault:result.result.BILL,
                    billData:null,
                    loading:false,
                    iSearch:false
                });
            }else{
                console.log(result);
            }
        } catch (error) {
            throw new Error("An Error has occurred! => getAll");
        }
    }
}
export const sortData = (data,key,order) => {
    return async dispatch => {
        try {
            const result = await data.sort(compareValues(key,order));
            dispatch({ 
                type: billInfoEInvoiceType.SORT_DATA,
                billData:result
            });
        } catch (error) {
            throw new Error("An Error has occurred! => sortData");
        }
    }
}
export const searchData = (data,text) => {
    return async dispatch => {
        try {
            const KEYS_TO_FILTERS = ['CUSTOMER_NM', 'COMPANY_TAX_CD','FORM_SYMBOL','CURRENCY_TYPE','BILL_YMD','BILL_NO','BILL_SYMBOL','PAYMENT_AMOUNT_AND_FC','VAT'];
            const result =  await data.filter(createFilter(text, KEYS_TO_FILTERS));
            if(result.length>0){
                dispatch({
                    type:billInfoEInvoiceType.SEARCH_DATA,
                    billData:result,
                    iSearch:false
                });
            }else{
                dispatch({
                    type:billInfoEInvoiceType.SEARCH_DATA,
                    billData:result,
                    iSearch:true
                });
            }
            
        } catch (error) {
            throw new Error("An Error has occurred! => searchData");
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
