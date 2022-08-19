import { SET_WORKSPACE_DETAILS } from "../constants/workspaceDetailsConstants"

export const setWorkspaceDetails = (workspaceName, displayName) => (dispatch) => {
    dispatch({
        type: SET_WORKSPACE_DETAILS,
        payload: {workspaceName, displayName}
    })
}
