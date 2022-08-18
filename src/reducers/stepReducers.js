import { INCREMENT_STEP, SET_STEP } from "../constants/stepConstants";

const initialState = {
    currentStep: 1,
    totalSteps : 4
};
export const stepReducer = (state=initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case SET_STEP:
            return {...state, currentStep: payload}
        case INCREMENT_STEP:
            return {...state, currentStep: state.currentStep+1}
        default:
            return state
    }
}