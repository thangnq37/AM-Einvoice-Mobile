import { combineReducers } from 'redux';
import userReducer from './userReducer';
import formofInvoice from "./formOfInvoicesReducer";
const rootReducer = combineReducers({
    user: userReducer,
    formOfInvoice: formofInvoice
});
export default rootReducer;