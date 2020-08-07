import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import { userTypes } from "../types/userType";

import api from '../../api/api';

let _timer;

export const login = (username, password, companyID) => {
    return async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = { username, password, companyID, Lag: "VIET" };
        try {
            const result = await axios.post(api.root + api.login, JSON.stringify(body), config);
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
    return async dispatch => {
        console.log("logout");
        clearLogoutTimer();
        await AsyncStorage.removeItem('userData');
        dispatch({ type: userTypes.LOGOUT });
    }
};

export const clearLogoutTimer = () => {
    if (_timer) {
        clearTimeout(_timer);
    }
};

const setLogoutTimer = expirationTime => {
    return dispatch => {
        console.log("setLogoutTimer");
        expirationTime = expirationTime * 1000;
        _timer = setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    };
};

export const saveDataToStorage = async (companyInfo, accessToken, expirationDate) => {
    try {
        console.log("saveDataToStorage");
        const jsonValue = JSON.stringify({ companyInfo: companyInfo, accessToken: accessToken });
        await AsyncStorage.setItem('userData', jsonValue);
    } catch (error) {
        throw new Error("Something's wrong with AsyncStorage in action!");
    }

};
