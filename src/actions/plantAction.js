import {
    PLANTS_REGISTER_REQUEST,
} from "../constants/plantConstant";

export const register = (name, description) => async (dispatch) => {
    dispatch({
        type: PLANTS_REGISTER_REQUEST,
        payload: {
            name,
            description,
        },
    });

};