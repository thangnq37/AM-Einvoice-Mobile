import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

import { formOfInvoicesTypes } from '../types/formOfInvoicesType';
import api from '../../api/api';

export const getAll_EInvoiceTemplate = () => {
    return async dispatch => {
        const storageData = await AsyncStorage.getItem("userData");
        const test = JSON.parse(storageData);
        const accessToken = test.accessToken;
        const config = {
            headers: {
                'Authorization': `BEARER ${accessToken}`,
                'Content-Type': 'application/json'
            }
        };
        const body = { Lag: "VIET", TemplateCD: "4854-419", s_FORM_NM: "A4_EInvoice_GTTT01_2019" };
        try {
            const result = await axios.post(api.root + api.formOfInvoices + "/getAll", JSON.stringify(body), config);
            dispatch({ type: formOfInvoicesTypes.GET_ALL_EINVOICE_TEMPLATE, templatesAll: result.data.result });
        } catch (error) {
            throw new Error(error);
        }
    }
}
export const getByID_EInvoiceTemplate = () => {
    return async dispatch => {
        const storageData = await AsyncStorage.getItem("userData");
        const test = JSON.parse(storageData);
        const accessToken = test.accessToken;
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        };
        const body = { Lag: "VIET", TemplateCD: "", s_FORM_NM: "" };
        try {
            const result = await axios.post(api.root + api.formOfInvoices + "/getByID", JSON.stringify(body), config);
            console.log(result);
            dispatch({ type: formOfInvoicesTypes.GET_BY_ID_EINVOICE_TEMPLATE });
        } catch (error) {
            throw new Error("An Error has occurred!");
        }
    }
}
export const getReportTemplate = () => {
    return async dispatch => {
        const storageData = await AsyncStorage.getItem("userData");
        const test = JSON.parse(storageData);
        const accessToken = test.accessToken;
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        };
        const body = { Lag: "viet" };
        try {
            const result = await axios.post(api.root + api.formOfInvoices + "/getReportTemplate", JSON.stringify(body), config);
            dispatch({ type: formOfInvoicesTypes.GET_REPORT_TEMPLATE, reportTemplate: result.data.result });
        } catch (error) {
            throw new Error("An Error has occurred!");
        }
    }
}