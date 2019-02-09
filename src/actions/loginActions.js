import * as Services from '../services/index'

export const loginAction = (email,password) => {
    return (dispatch, getState) => {
        dispatch({ type: 'login'})

        Services.logIn(email,password)
          .then((payload) => {
            dispatch({ type: 'login', message: payload.message, body : payload.body.name })
          })
          .catch((errMsg) => {
            dispatch({ type: 'loginFailed', message: errMsg })
          })
}}

export const loginShutter = (messagee) =>{
    // return (dispatch, getState) => {
    //     dispatch({ type : 'loginShutter',
    //     payload : messagee })
    // }
    return {
        type : 'loginShutter',
        payload : messagee
    };
}