export default (state = {} , action) => {
    switch(action.type){
        case 'login':
          return{
            ...state,
            isRequesting : false
          }
        case 'loginFailed':
          return{
            ...state,
            isRequesting : true
          }  
    }
} 