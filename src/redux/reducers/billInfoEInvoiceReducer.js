/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import { billInfoEInvoiceType } from "../types/billInfoEInvoiceType";
const INITIAL_STATE = {
    billDataDefault:null,
    billData: null,
    billCount: null,
    loading:true,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case billInfoEInvoiceType.GET_ALL:
            return {
                ...state,
                billDataDefault: action.billDataDefault,
                billData: action.billData,
                loading: action.loading,
            };
        case billInfoEInvoiceType.SEARCH_DATA:
            return{
                ...state,
                billData: action.billData,
            }
        case billInfoEInvoiceType.SORT_DATA:
            return{
                ...state,
                billData: action.billData,
            }
        case billInfoEInvoiceType.GET_BILL_COUNT:
            return {
                ...state,
                billCount: action.billCount,
            };
        default:
            return state;
    }
};