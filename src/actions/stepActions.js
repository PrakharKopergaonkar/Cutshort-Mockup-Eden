import { SET_STEP, INCREMENT_STEP } from "../constants/stepConstants";

export const setStep = (page) => (dispatch) => {
    if(page>=1 && page<=4) {
        dispatch({
            type: SET_STEP,
            payload: page
        })
    }
}

export const incrementStep = () => (dispatch) => {
    dispatch({
        type: INCREMENT_STEP,
        payload: null
    })
}
