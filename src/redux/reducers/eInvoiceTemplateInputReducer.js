import { eInvoiceTemplateInputTypes } from "../types/eInvoiceTemplateInputType";

const INITIAL_STATE = {
    templatesAll: null,
    templateByID: null,
    reportTemplate: null,
    loading: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case eInvoiceTemplateInputTypes.GET_ALL_EINVOICE_TEMPLATE:
            return {
                ...state,
                templatesAll: action.templatesAll,
                loading: action.loading
            };
        case eInvoiceTemplateInputTypes.GET_BY_ID_EINVOICE_TEMPLATE:
            return {
                ...state,
                templateByID: action.templateByID,
                loading: action.loading
            };
        case eInvoiceTemplateInputTypes.GET_REPORT_TEMPLATE:
            return {
                ...state,
                reportTemplate: action.reportTemplate,
                loading: action.loading
            };
        default:
            return state;
    }
};