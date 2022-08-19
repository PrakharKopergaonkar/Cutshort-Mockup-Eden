import { SET_WORKSPACE_DETAILS } from "../constants/workspaceDetailsConstants"

export const setWorkspaceDetails = (workspaceName, workspaceUrl) => (dispatch) => {
    dispatch({
        type: SET_WORKSPACE_DETAILS,
        payload: {workspaceName, workspaceUrl}
    })
}
