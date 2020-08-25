import { combineReducers } from 'redux';
import userReducer from './userReducer';
import billInfoEInvoiceReducer from './billInfoEInvoiceReducer';
import eInvoiceTemplateInputReducer from "./eInvoiceTemplateInputReducer";
const rootReducer = combineReducers({
    user: userReducer,
    billInfoEInvoiceReducer: billInfoEInvoiceReducer,
    eInvoiceTemplateInput: eInvoiceTemplateInputReducer
});
export default rootReducer;