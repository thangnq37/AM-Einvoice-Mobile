import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import { userTypes } from "../types/loginType";

import api from '../../api/api';

let _timer;
export const add=()=>{
	return {type: userTypes.ADD};
}
export const login = async (companyID, userName, password) =>{
	// return async dispatch => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const body= {username:userName, password: password, companyID: companyID, Lag:"VIET"};
		axios.post(api.root+api.login, JSON.stringify(body), config).
		then((response)=>{
			authenticate(response.data.companyInfo, response.data.access_token, response.data.expires_in);
			saveDataToStorage(response.data.companyInfo, response.data.access_token, response.data.expires_in);
		}).catch((error)=>{
			throw new Error("An Error has occurred!");
		});
	// };
}
export const authenticate = (userInfo, accessToken, expirationTime) => {
	setLogoutTimer(expirationTime);
	return { type: userTypes.AUTHENTICATE, userInfo: userInfo, accessToken: accessToken };
};
export const logout = () => {
	clearLogoutTimer();
	AsyncStorage.removeItem('userData');
	return { type: userTypes.LOGOUT };
};
export const clearLogoutTimer = () => {
	if (_timer) {
		clearTimeout(_timer);
	}
};
export const setLogoutTimer = (expirationTime) => {
		_timer = setTimeout(() => {
			logout();
		}, expirationTime);
};

export const saveDataToStorage = async (companyInfo, accessToken, expirationDate) => {
	try {
		const jsonValue = JSON.stringify({companyInfo: companyInfo, accessToken: accessToken, expirationDate: expirationDate});
		await AsyncStorage.setItem('userData', jsonValue);
	} catch (error) {
		throw new Error("Something's wrong with AsyncStorage in action!");
	}
	
};