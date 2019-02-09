import * as Services from '../services/index'

export const products = () => {
    return (dispatch, getState) => {
            dispatch({ type: 'product'})
        
            Services.getproducts()
              .then((payload) => {
                dispatch({ type: 'product', payload })
              })
              .catch((errMsg) => {
                dispatch({ type: 'productFailed', message: errMsg })
    })
}}

export const add = (name,image) => {
  return (dispatch, getState) => {
          dispatch({ type: 'addproduct'})
      
          Services.addproducts(name,image)
            .then((payload) => {
              dispatch({ type: 'addproduct', name : payload.productName , message : payload.message })
            })
            .catch((errMsg) => {
              dispatch({ type: 'addproductFailed', message: errMsg })
  })
}}




// import * as Services from '../services/index'
// import axios from 'axios';
// export const products = () => {
//     return (dispatch, getState) => {
//             dispatch({ type: 'product'})
        
//             Services.getproducts()
//               .then((payload) => {
//                 dispatch({ type: 'product', payload })
//               })
//               .catch((errMsg) => {
//                 dispatch({ type: 'productFailed', message: errMsg })
//     })
// }}

// export const add = (name,image) => {
//   return (dispatch, getState) => {
//           dispatch({ type: 'addproduct'})
      
//           var options = {
//             method : 'post',
//             url : 'http://192.168.8.102:3100/products/add',
//             headers:{
//               'Accept': 'application/json',
//               'Content-Type': 'multipart/form-data'
//             },
//             data : {
//               'name' : name,
//               'image': image
//             }
//           }
    
//           axios({
//             method : 'post',
//             url : 'http://192.168.8.102:3100/products/add',
//             headers:{
//               'Content-Type': 'multipart/form-data'
//             },
//             data : {
//               'name' : name,
//               'image': image
//             }
//           })
//             .then((payload) => {
//               dispatch({ type: 'addproduct', name : payload.productName , message : payload.message })
//             })
//             .catch((errMsg) => {
//               dispatch({ type: 'addproductFailed', message: errMsg })
//   })
// }}



// export const uploadImage = (name,image) => {
//   return (dispatch, getState) => {
//           dispatch({ type: 'imageUpload'})
      
//           var options = {
//             method : 'post',
//             url : 'http://192.168.8.102:3100/UploadImage/add',
//             headers:{
//               'Accept': 'application/json',
//               'Content-Type': 'multipart/form-data'
//             },
//             data : {
//               'name' : name,
//               'image': image
//             }
//           }
    
//           axios({
//             method : 'post',
//             url : 'http://192.168.8.102:3100/products/add',
//             headers:{
//               'Content-Type': 'multipart/form-data'
//             },
//             data : {
//               'name' : name,
//               'image': image
//             }
//           })
//             .then((payload) => {
//               dispatch({ type: 'imageUpload', name : payload.productName , message : payload.message })
//             })
//             .catch((errMsg) => {
//               dispatch({ type: 'imageUploadFailed', message: errMsg })
//   })
// }}