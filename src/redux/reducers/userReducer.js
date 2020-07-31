import { userTypes } from "../types/loginType";
import AsyncStorage from '@react-native-community/async-storage';
const INITIAL_STATE = {
    number:0,
    userInfo: null,
    accessToken: null,
    info:null,
};
const loginReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case userTypes.ADD:
            return {
                ...state,
                number: number+1,
            }
        case userTypes.AUTHENTICATE:
            return {
                ...state,
                userInfo: action.userInfo,
                accessToken: action.accessToken,
            }
        case userTypes.LOGOUT:
            return {
                INITIAL_STATE
            }
        default:
            return state;
    }
}
export default loginReducer;