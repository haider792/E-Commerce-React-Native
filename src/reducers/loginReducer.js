export default (state = {} , action) => {
    switch(action.type){
        case 'login':
          return{
            ...state,
            isRequesting : false,
            message : action.message,
            body : action.body
          }
        case 'loginFailed':
          return{
            ...state,
            isRequesting : true,
            message : action.message,
          }  
        case 'loginShutter':
          return {...state,
          loginShutter : action.payload 
          };
        default : 
            return {
              ...state,
              payload : 'message'
            };

    }
} 