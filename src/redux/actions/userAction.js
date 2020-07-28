import axios from "axios";
import { userTypes } from "../types/loginType";

export const loginStart = (companyID, userName, password) =>{
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body= {username:"admin", password: "123456", companyID: "1483", Lag:"VIET"};
	// const body= {username:userName, password: password, companyID: companyID, Lag:"VIET"};
	axios.post("http://118.69.170.50/API/api/login", JSON.stringify(body), config).
		then((response)=>{
			console.log(response);
			dispatch(loginSuccess(info));
		}).catch((error)=>{
			dispatch(loginFail(error));
		});
}

export const loginSuccess = (info) => ({
	type: userTypes.LOGIN_SUCCESS,
	payload: info
})

export const loginFail = (error) => ({
	type: userTypes.LOGIN_FAIL,
	payload: error,
});
export const logoutStart = () => ({
	type: userTypes.LOGOUT,
});

export const logoutSuccess = () => ({
	type: userTypes.LOGOUT_SUCCESS,
});

export const logoutFailure = (error) => ({
	type: userTypes.LOGOUT_FAIL,
	payload: error,
});