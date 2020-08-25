import { eInvoiceTemplateInputTypes } from "../types/eInvoiceTemplateInputType";

const INITIAL_STATE = {
    templatesAll: null,
    reportTemplate: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case eInvoiceTemplateInputTypes.GET_ALL_EINVOICE_TEMPLATE:
            return {
                ...state,
                templatesAll: action.templatesAll,
            };
        case eInvoiceTemplateInputTypes.GET_REPORT_TEMPLATE:
            return {
                ...state,
                reportTemplate: action.reportTemplate,
            };
        default:
            return state;
    }
};