import { userTypes } from "../types/userType";

const INITIAL_STATE = {
    userInfo: null,
    accessToken: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.AUTHENTICATE:
            return {
                ...state,
                userInfo: action.userInfo,
                accessToken: action.accessToken
            };
        case userTypes.LOGOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
};