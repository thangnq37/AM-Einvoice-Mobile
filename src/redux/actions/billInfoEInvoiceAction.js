/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import axiosClient from "../../axios/axiosClient";
import AsyncStorage from '@react-native-community/async-storage';
import { billInfoEInvoiceType } from "../types/billInfoEInvoiceType";
import api from '../../api/api';
export const getAll = (DateBegin, DateEnd, DCWayCode) => {
    return async dispatch => {
        dispatch({ type: billInfoEInvoiceType.GET_ALL,getAllData:null ,loading:true});
        const params ={DateBegin,DateEnd,DCWayCode,'Lag':'VIET'}
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
export const searchAll = (getAllData,keySearch) => {
   
    return async dispatch => {
        console.log(getAllData);
    }
}