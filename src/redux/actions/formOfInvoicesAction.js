import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

import { formOfInvoicesTypes } from '../types/formOfInvoicesType';
import api from '../../api/api';

export const getAll_EInvoiceTemplate = () => {
    return async dispatch => {
        const storageData = await AsyncStorage.getItem("userData");
        const accessToken = storageData.accessToken;
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        };
        const body = { lag: "VIET", DCWayCode: "Local", DateBegin: "", DateEnd: "", InvoiceStatus: "all", IsSendMail: "0" };
        try {
            const result = await axios.post(api.root + api.login, JSON.stringify(body), config);
            console.log(result);
            dispatch({ type: formOfInvoicesTypes.GET_ALL_EINVOICE_TEMPLATE });
        } catch (error) {
            throw new Error("An Error has occurred!");
        }
    }
}
export const getAll_EInvoiceTemplateInput = () => {
    const storageData = await AsyncStorage.getItem("userData");
    const accessToken = storageData.accessToken;
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    };
    const body = { Lag: "VIET" };
    try {
        const result = await axios.post(api.root + api.login, JSON.stringify(body), config);
        console.log(result);
        dispatch({ type: formOfInvoicesTypes.GET_ALL_EINVOICE_TEMPLATE_INPUT });
    } catch (error) {
        throw new Error("An Error has occurred!");
    }
}
export const getByID_EInvoiceTemplate = () => {
    const storageData = await AsyncStorage.getItem("userData");
    const accessToken = storageData.accessToken;
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    };
    const body = { Lag: "VIET", TemplateCD: "", s_FORM_NM: "" };
    try {
        const result = await axios.post(api.root + api.login, JSON.stringify(body), config);
        console.log(result);
        dispatch({ type: formOfInvoicesTypes.GET_BY_ID_EINVOICE_TEMPLATE });
    } catch (error) {
        throw new Error("An Error has occurred!");
    }
}