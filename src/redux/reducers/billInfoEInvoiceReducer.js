/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import { billInfoEInvoiceType } from "../types/billInfoEInvoiceType";
const INITIAL_STATE = {
    getAllData: null,
    billCount: null,
    loading:true,
    searchAllData:null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case billInfoEInvoiceType.GET_ALL:
            return {
                ...state,
                getAllData: action.getAllData,
                loading: action.loading,
               
            };
        case billInfoEInvoiceType.GET_BILL_COUNT:
            return {
                ...state,
                billCount: action.billCount,
               
            };
        case billInfoEInvoiceType.SEARCH_ALL:
                return {
                ...state,
                searchAllData: action.searchAllData,
                   
            };
        default:
            return state;
    }
};