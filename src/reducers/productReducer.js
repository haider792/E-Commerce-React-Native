export default (state = {} , action) => {
    switch(action.type){
        case 'product':
          return {
            ...state,
            productPayload : action.payload
          };   
        case 'productFailed':
          return {
            ...state,
            productPayload : action.message
          };
          case 'addproduct':
          return {
            ...state,
            name : action.name,
            message : action.message
          };   
        case 'addproductFailed':
          return {
            ...state,
            message : action.message
          };
        default : 
            return {
              ...state,
              payload : 'message'
            };

    }
} 