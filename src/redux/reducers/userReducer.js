import { userTypes } from "../types/userType";

const INITIAL_STATE = {
    companyInfo: null,
    accessToken: null,
    loading:false,
    messages:null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.AUTHENTICATE:
            return {
                ...state,
                companyInfo: action.companyInfo,
                accessToken: action.accessToken,
                loading:action.loading,
                messages:action.messages
            };
        case userTypes.LOGOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
};