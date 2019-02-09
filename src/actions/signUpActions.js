import * as Services from '../services/index';

export const signUpAction = (email,name,password) => {
    return (dispatch, getState) => {
        dispatch({ type: 'signUp'})

        Services.signUpCustomer(email,name,password)
          .then((payload) => {
            dispatch({ type: 'signUp', payload })
          })
          .catch((errMsg) => {
            dispatch({ type: 'signUpFailed', message: errMsg })
          })
}}

export const signUpShutter = (messagee) =>{
    return {
        type : 'signUpShutter',
        payload : messagee
    };
}
