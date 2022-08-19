import { SET_DETAILS } from "../constants/basicDetailsConstants"

export const setBasicDetails = (fullName, displayName) => (dispatch) => {
    dispatch({
        type: SET_DETAILS,
        payload: {fullName, displayName}
    })
}
