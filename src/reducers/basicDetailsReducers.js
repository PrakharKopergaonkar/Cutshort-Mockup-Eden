import { SET_DETAILS } from "../constants/basicDetailsConstants";

const initialState = {
    fullName: "",
    displayName:""
};
export const basicDetailsReducer = (state=initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case SET_DETAILS:
            return payload
        default:
            return state
    }
}