import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import { createFilter } from 'react-native-search-filter';
import axiosClient from "../../axios/axiosClient";
import { eInvoiceTemplateInputTypes } from '../types/eInvoiceTemplateInputType';
import api from '../../api/api';

export const getAll_EInvoiceTemplate = () => {
    return async dispatch => {
        dispatch({ type: eInvoiceTemplateInputTypes.GET_ALL_EINVOICE_TEMPLATE, loading: true });
        const params = { Lag: "VIET" };
        try {
            const result = await axiosClient.post(api.EInvoiceTemplateInput.getAll, params);
            if (result.numberStatus == 1) {
                dispatch({ type: eInvoiceTemplateInputTypes.GET_ALL_EINVOICE_TEMPLATE, templatesAllDefault: result.result, loading: false });
            }
            else {
                console.log("error in getAll", result);
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}
export const getByID_EInvoiceTemplate = (templateCD, formName, logoName, backgroundName) => {
    return async dispatch => {
        dispatch({ type: eInvoiceTemplateInputTypes.GET_BY_ID_EINVOICE_TEMPLATE, loading: true });
        let templateResult = null;
        try {
            const result = await axiosClient.post(api.EInvoiceTemplateInput.getByID, { Lag: "VIET", TemplateCD: templateCD, s_FORM_NM: formName });
            const resultComboBox = await axiosClient.post(api.EInvoiceTemplateInput.getComboBox, { Lag: "VIET" });
            if (result.numberStatus == 1) {
                if (resultComboBox.numberStatus == 1) {
                    for (let i = 0; i < resultComboBox.result.Logo.length; i++) {
                        if (resultComboBox.result.Logo[i]["LOGO_NM"] == logoName) {
                            templateResult = result.result.toString().replace(`<img id="logo" style="max-width:150px; max-height:150px;" src="data:image/png;base64,">`, `<img id="logo" style="max-width:150px; max-height:150px;" src="data:image/png;base64,${resultComboBox.result.Logo[i]["LOGO"]}">`)
                            break;
                        }
                    }
                    for (let i = 0; i < resultComboBox.result.Background.length; i++) {
                        if (resultComboBox.result.Background[i]["BACKGROUND_NM"] == backgroundName) {
                            templateResult = await templateResult.toString().replace(`<div id="background" class="background-cv" style="  background-image:  url('data:image/png;base64,');">`, `<div id="background" class="background-cv" style="  background-image:  url('data:image/png;base64,${resultComboBox.result.Background[i]["BACKGROUND"]}');" > `)
                            break;
                        }
                    }
                    const regex = /"/gi;
                    templateResult = await templateResult.toString().replace(regex, "&quot;");
                    console.log("result after replace in getByID_EInvoiceTemplate", templateResult);
                    dispatch({ type: eInvoiceTemplateInputTypes.GET_BY_ID_EINVOICE_TEMPLATE, templateByID: templateResult, loading: false });
                } else {
                    console.log("error in resultComboBox", resultComboBox);
                }
            }
            else {
                console.log("error in getID", result);
            }
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
            dispatch({ type: eInvoiceTemplateInputTypes.GET_REPORT_TEMPLATE, reportTemplate: result.data.result });
        } catch (error) {
            throw new Error("An Error has occurred!");
        }
    }
}
export const updateEInvoiceTemplate = (data, templateCD, formName) => {
    return async dispatch => {
        dispatch({ type: eInvoiceTemplateInputTypes.UPDATE_EINVOICE_TEMPLATE, loading: true });
        const body = {
            Lag: "VIET", TEMPLATE_CD: templateCD, FORM_NM: formName, TEMPLATE_NM_VIET: data.TEMPLATE_NM_VIET,
            TEMPLATE_NM_ENG: data.TEMPLATE_NM_ENG, TEMPLATE_NM_KOR: data.TEMPLATE_NM_KOR,
            LOGO: "", LOGO_NM: "", BACKGROUND: "", BACKGROUND_NM: ""
        };
        console.log("body in update", body);
        try {
            const result = await axiosClient.post(api.EInvoiceTemplateInput.update, body);
            console.log("result in try", result);
        } catch (error) {
            throw new Error("An Error has occurred in updateEInvoiceTemplate!", error);
        }
    }
}
export const searchData = (data, text) => {
    return async dispatch => {
        try {
            const keysToFilter = ['TEMPLATE_CD', 'TEMPLATE_NM_VIET', 'TEMPLATE_NM_ENG', 'TEMPLATE_NM_KOR', 'TEMPLATE_NM_VIET', 'USERID_ADD', 'USERID_EDIT'];
            const result = await data.filter(createFilter(text, keysToFilter));
            console.log("result after filter", result);
            if (result.length > 0) {
                dispatch({
                    type: eInvoiceTemplateInputTypes.DATA_SEARCH,
                    templatesAll: result,
                    isSearch: false
                });
            } else {
                dispatch({
                    type: eInvoiceTemplateInputTypes.DATA_SEARCH,
                    templatesAll: result,
                    isSearch: true
                });
            }

        } catch (error) {
            throw new Error("An Error has occurred in searchData!");
        }
    }
}
