import {
    USER_REGISTER_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
} from "../constants/userConstant";
import storage from "../storage";

export const register = (name, username, password, dob) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: {
            name,
            username,
            password,
            dob,
        },
    });
};

export const signin = (userInfo, username, password) => (dispatch) => {
    // find user details exist
    // if founddispatch sign in success
    // else signin fail
    let user = userInfo.find(user => user.username === username && user.password === password);

    if (user) {
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: {
                name: user.name,
                username: user.username,
                dob: user.dob
            },
        });
    } else {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: "user details not found"
        });
    }
};

export const signout = () => (dispatch) => {
    storage.session.removeItem("authenticatedUser");
    dispatch({
        type: USER_SIGNOUT,
        payload: ""
    });
};