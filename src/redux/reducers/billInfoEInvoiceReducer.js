import { billInfoEInvoiceType } from "../types/billInfoEInvoiceType";
const INITIAL_STATE = {
    getAll: null,
    billCount: null,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case billInfoEInvoiceType.GET_ALL:
            return {
                ...state,
                getAll: action.getAll,
               
            };
        case billInfoEInvoiceType.GET_BILL_COUNT:
            return {
                ...state,
                billCount: action.billCount,
               
            };
        default:
            return state;
    }
};