import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
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
                dispatch({ type: eInvoiceTemplateInputTypes.GET_ALL_EINVOICE_TEMPLATE, templatesAll: result.result, loading: false });
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
                    for (let i = 0; i <= resultComboBox.result.Logo.length; i++) {
                        console.log("inside for");
                        if (resultComboBox.result.Logo[i]["LOGO_NM"] == logoName) {
                            templateResult = await result.result.toString().replace(`<img id="logo" style="max-width:150px; max-height:150px;" src="data:image/png;base64,">`, `<img id="logo" style="max-width:150px; max-height:150px;" src="data:image/png;base64,${resultComboBox.result.Logo[i]["LOGO"]}">`)
                        }
                        if (resultComboBox.result.Logo[i]["LOGO_NM"] == backgroundName) {
                            templateResult = await templateResult.toString().replace(`<div id="background" class="background-cv" style="  background-image:  url('data:image/png;base64,');">`, `<div id="background" class="background-cv" style="  background-image:  url('data:image/png;base64,${resultComboBox.result.Logo[i]["LOGO"]}');" > `)
                            break;
                        }
                    }
                    const regex = /"/gi;
                    templateResult = templateResult.toString().replace(regex, "&quot;");
                    console.log("result after replace", templateResult);
                    dispatch({ type: eInvoiceTemplateInputTypes.GET_BY_ID_EINVOICE_TEMPLATE, templateByID: templateResult, loading: false });
                } else {
                    console.log("error in resultComboBox", resultComboBox);
                }
                // console.log("result before replace", result.result);

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