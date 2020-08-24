import { combineReducers } from 'redux';
import userReducer from './userReducer';
import billInfoEInvoiceReducer from './billInfoEInvoiceReducer';
import formofInvoice from "./formOfInvoicesReducer";
const rootReducer = combineReducers({
    user: userReducer,
    billInfoEInvoiceReducer: billInfoEInvoiceReducer,
    formOfInvoice: formofInvoice
});
export default rootReducer;