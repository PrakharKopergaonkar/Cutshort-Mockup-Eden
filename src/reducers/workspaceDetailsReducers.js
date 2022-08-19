import { SET_WORKSPACE_DETAILS } from "../constants/workspaceDetailsConstants";

const initialState = {
    workspaceName: "",
    displayName:""
};
export const workspaceDetailsReducer = (state=initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case SET_WORKSPACE_DETAILS:
            return payload
        default:
            return state
    }
}