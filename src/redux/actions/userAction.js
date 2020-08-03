import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import { userTypes } from "../types/userType";

import api from '../../api/api';

let _timer;

export const login = (info) => {
    return async dispatch => {
        console.log("logIN");
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        // const body = { username: userName, password: password, companyID: companyID, Lag: "VIET" };
        try {
            const result = await axios.post(api.root + api.login, JSON.stringify(info), config);
            console.log(result);

            dispatch(authenticate(result.data.companyInfo, result.data.access_token, result.data.expires_in));
            dispatch(saveDataToStorage(result.data.companyInfo, result.data.access_token, result.data.expires_in));
        } catch (error) {
            throw new Error("An Error has occurred!");
        }
    }
}
export const authenticate = (userInfo, accessToken, expirationTime) => {
    return async dispatch => {
        console.log("authenticate");
        dispatch(setLogoutTimer(expirationTime));
        dispatch({ type: userTypes.AUTHENTICATE, userInfo: userInfo, accessToken: accessToken });
    }
};
export const authenticateAction = (userInfo, accessToken) => {
    return { type: userTypes.AUTHENTICATE, userInfo: userInfo, accessToken: accessToken };
}
export const logout = () => {
    return dispatch => {
        console.log("logout");
        clearLogoutTimer();
        AsyncStorage.removeItem('userData');
        dispatch({ type: userTypes.LOGOUT });
    }
};

const clearLogoutTimer = () => {
    if (_timer) {
        clearTimeout(_timer);
    }
};

const setLogoutTimer = expirationTime => {
    return dispatch => {
        expirationTime = expirationTime * 1000;
        _timer = setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    };
};

export const saveDataToStorage = async (companyInfo, accessToken, expirationDate) => {
    console.log("saveDataToStorage");
    try {
        const jsonValue = JSON.stringify({ companyInfo: companyInfo, accessToken: accessToken });
        await AsyncStorage.setItem('userData', jsonValue);
    } catch (error) {
        throw new Error("Something's wrong with AsyncStorage in action!");
    }

};