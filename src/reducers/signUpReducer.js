export default (state = {} , action) => {
    switch(action.type){
        case 'signUp':
          return {
            ...state,
            payload : action.payload,
            message : 'Successfully Entered Thank you'
          };   
        case 'signUpFailed':
          return {
            ...state,
            payload : action.message
          };
        case 'signUpShutter':
          return {
            ...state,
            signUpShutter : action.payload
          };    
        default : 
            return {
              ...state,
              payload : 'message'
            };
             
    }
} 