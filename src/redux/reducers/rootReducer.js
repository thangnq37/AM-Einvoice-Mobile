import { combineReducers } from 'redux';
import userReducer from './userReducer';
import billInfoEInvoiceReducer from './billInfoEInvoiceReducer';
import formofInvoice from "./formOfInvoicesReducer";
import billReleaseEInvoicesReducer from './billReleaseEInvoicesReducer';
const rootReducer = combineReducers({
    user: userReducer,
    billReleaseEInvoicesReducer:billReleaseEInvoicesReducer,
    billInfoEInvoiceReducer: billInfoEInvoiceReducer,
    formOfInvoice: formofInvoice
});
export default rootReducer;