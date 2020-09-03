import { combineReducers } from 'redux';
import userReducer from './userReducer';
import billInfoEInvoiceReducer from './billInfoEInvoiceReducer';
import eInvoiceTemplateInputReducer from "./eInvoiceTemplateInputReducer";
import billReleaseEInvoicesReducer from './billReleaseEInvoicesReducer';
const rootReducer = combineReducers({
    user: userReducer,
    billReleaseEInvoicesReducer: billReleaseEInvoicesReducer,
    billInfoEInvoiceReducer: billInfoEInvoiceReducer,
    eInvoiceTemplateInput: eInvoiceTemplateInputReducer
});
export default rootReducer;