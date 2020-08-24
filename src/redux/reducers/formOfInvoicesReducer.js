import { formOfInvoicesTypes } from "../types/formOfInvoicesType";

const INITIAL_STATE = {
    templatesAll: null,
    reportTemplate: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case formOfInvoicesTypes.GET_ALL_EINVOICE_TEMPLATE:
            return {
                ...state,
                templatesAll: action.templatesAll,
            };
        case formOfInvoicesTypes.GET_REPORT_TEMPLATE:
            return {
                ...state,
                reportTemplate: action.reportTemplate,
            };
        default:
            return state;
    }
};