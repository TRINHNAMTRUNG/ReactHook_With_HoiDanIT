
import { FETCH_USER_LOGIN_SUCCESS } from "../action/userAction";
const INITIAL_STATE = {
    account: {
        access_token: "",
        refresh_token: "",
        username: "",
        image: "",
        role: ""
    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            console.log("check action: ", action);
            return {
                ...state,
                account: {
                    access_token: action?.data?.DT?.access_token,
                    refresh_token: action?.data?.DT?.refresh_token,
                    username: action?.data?.DT?.username,
                    image: action?.data?.DT?.image,
                    role: action?.data?.DT?.role
                },
                isAuthenticated: true
            };
        default: return state;
    }
};

export default userReducer;