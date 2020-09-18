import { eInvoiceTemplateInputTypes } from "../types/eInvoiceTemplateInputType";

const INITIAL_STATE = {
    templatesAllDefault: null,
    templatesAll: null,
    templateByID: null,
    reportTemplate: null,
    loading: true,
    isSearch: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case eInvoiceTemplateInputTypes.GET_ALL_EINVOICE_TEMPLATE:
            return {
                ...state,
                templatesAllDefault: action.templatesAllDefault,
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
        case eInvoiceTemplateInputTypes.DATA_SEARCH:
            return {
                ...state,
                templatesAll: action.templatesAll
            };
        default:
            return state;
    }
};