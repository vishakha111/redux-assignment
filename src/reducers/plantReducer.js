import {
    PLANTS_REGISTER_REQUEST,
    PLANTS_GET_REQUEST,

} from '../constants/plantConstant';

const initialState = {
    plantsInfo: []
}

export const plantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLANTS_REGISTER_REQUEST:
            return {
                loading: false, plantsInfo: [...state.plantsInfo, action.payload]
            };
        case PLANTS_GET_REQUEST:
            return {
                loading: false,
                plantsInfo: action.payload
            };
        default:
            return state;
    }
};