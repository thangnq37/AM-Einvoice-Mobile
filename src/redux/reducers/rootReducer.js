import {combineReducers} from 'redux';
import userReducer from './userReducer';
import billInfoEInvoiceReducer from './billInfoEInvoiceReducer';
const rootReducer = combineReducers({
    user: userReducer,
    billInfoEInvoiceReducer: billInfoEInvoiceReducer,
});
export default rootReducer;