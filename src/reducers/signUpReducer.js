export default (state = {} , action) => {
    switch(action.type){
        case 'signUp':
          return {
            ...state,
            payload : action.payload
          };   
        case 'signUpFailed':
          return {...state,
          payload : "failed"
          };
        case 'loginShutter':
          return {...state,
          loginShutter : action.payload 
          };
        case 'signUpShutter':
          return {...state,
          signUpShutter : action.payload
          };    
        default : 
            return {
              ...state,
              payload : 'message'
            };
             
    }
} 