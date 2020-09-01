import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import { userTypes } from "../types/userType";

import api from '../../api/api';
let _timer;
export const login = (username, password, companyID) => {
    return async dispatch => {
        dispatch({ type: userTypes.AUTHENTICATE,loading:true});
        const config = { headers: {'Content-Type': 'application/json'}};
        const body = { username, password, companyID, Lag: "VIET" };
        try {
            const result = await axios.post(api.root + api.login, JSON.stringify(body), config);
            // console.log(result);
            // axios.post(api.root + api.login,JSON.stringify(body),config)
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   }); 
            const data = result.data;
            if(data.numberStatus==1){
                dispatch({ type: userTypes.AUTHENTICATE,loading:false});
                dispatch(authenticate(data));
                dispatch(saveDataToStorage(data));
            }else{
                dispatch({
                    type:userTypes.AUTHENTICATE,
                    companyInfo: null, 
                    accessToken: null,
                    loading:false,
                    messages:data.messages
                });
            }
        } catch (error) {
            throw new Error("An Error has occurred!!");
        }
    }
}
export const authenticate = (data) => {
    return async dispatch => {
        dispatch(setLogoutTimer(data.expires_in));
        dispatch({ 
            type: userTypes.AUTHENTICATE, 
            companyInfo: data.companyInfo, 
            accessToken: data.access_token,
            loading:false,
            messages:data.messages
        });
    }
};
export const logout = () => {
    return async dispatch => {
        clearLogoutTimer();
        await AsyncStorage.removeItem('userData');
        dispatch({ type: userTypes.LOGOUT, loading:false });
    }
};
export const clearLogoutTimer = () => {
    if (_timer) {
        clearTimeout(_timer);
    }
};
const setLogoutTimer = (expirationTime) => {
    return async dispatch => {
        console.log("setLogoutTimer");
        const expirationTimer = new Date(new Date().getTime() + parseInt(expirationTime) * 1000);
        _timer = setTimeout(() => {
            dispatch(logout());
        }, expirationTime*1000);
    }
};
export const saveDataToStorage = async (data) => {
    try {
        const expirationTimer = new Date(new Date().getTime() + parseInt(data.expires_in) * 1000);
        await AsyncStorage.setItem('userData', JSON.stringify({ 
            companyInfo: data.companyInfo, 
            accessToken: data.access_token, 
            expirationTimer: expirationTimer.toISOString() }));
    } catch (error) {
        throw new Error("Something's wrong with AsyncStorage in action!");
    }
};
