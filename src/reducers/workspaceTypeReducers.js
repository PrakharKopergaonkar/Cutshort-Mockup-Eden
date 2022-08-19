import { SET_WORKSPACE_TYPE } from "../constants/workspaceTypeConstants";

const initialState = {
    type: "myself",
};
export const workspaceTypeReducer = (state=initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case SET_WORKSPACE_TYPE:
            return payload
        default:
            return state
    }
}