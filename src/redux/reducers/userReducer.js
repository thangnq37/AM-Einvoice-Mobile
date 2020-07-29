import { userTypes } from "../types/loginType";
import AsyncStorage from '@react-native-community/async-storage';
const INITIAL_STATE = {
    currentUser: null,
    token: null,
    info:null,
	error: null,
};
const loginReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case userTypes.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser:action.payload,
                token: action.payload.access_token,
                error: null,
            }
        case userTypes.LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}
export default loginReducer;