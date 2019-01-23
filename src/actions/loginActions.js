export const loginAction = () =>{
    return {
        type : 'login'
    };
}

export const signUpAction = (messagee) =>{
    return {
        type : 'signUp',
        payload : messagee
    };
}

export const signUpShutter = (messagee) =>{
    return {
        type : 'signUpShutter',
        payload : messagee
    };
}

export const loginShutter = (messagee) =>{
    return {
        type : 'loginShutter',
        payload : messagee
    };
}