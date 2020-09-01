/** 
 * Auth : Đinh Văn Lành 
 * ID : 073
 * Email : 073@amnote.com.vn
*/
import axios from 'axios';
import queryString from 'query-string';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../api/api'
const axiosClient = axios.create({
    baseURL: api.root,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    const storageData = await AsyncStorage.getItem("userData");
    const accessToken = JSON.parse(storageData);
    config.headers.Authorization = `Bearer ${accessToken.accessToken}`;
    console.log(config);
    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    if (error && error.response) {
        return error.response.data;
    }
    return error;
});
export default axiosClient;