import { SET_WORKSPACE_TYPE } from "../constants/workspaceTypeConstants"

export const setWorkspaceType = (type="myself") => (dispatch) => {
    dispatch({
        type: SET_WORKSPACE_TYPE,
        payload: {type}
    })
}
