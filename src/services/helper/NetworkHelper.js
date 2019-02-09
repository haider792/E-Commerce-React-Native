import axios from 'axios'

class NetworkHelper {

  static requestPost(url, params) {
    return NetworkHelper.requestHttp('POST', url, params)
  }

  static requestGet(url) {
    return NetworkHelper.requestHttp('GET', url, null)
  }

  static requestPut(url, params) {
    return NetworkHelper.requestHttp('PUT', url, params)
  }

  static requestPatch(url, params) {
    return NetworkHelper.requestHttp('PATCH', url, params)
  }

  static requestDelete(url, params) {
    return NetworkHelper.requestHttp('DELETE', url, params)
  }

  static requestHttp(method, url, params) {
    return new Promise((resolve, reject) => {
      var options = {
        method,
        url,
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
      if (params) {
      
        options.data = params
      }
      axios(options)
      .then((response)=>{
       
        resolve({ statusCode: response.status, body: response.data })
      })
      .catch((error)=>{
        if (error.response != undefined) {
          
          resolve({ statusCode: error.response.status, body: error.response.data })
        }else{
         
          reject("Can not connect to server")
        }
      })
    });
  }
}

export default NetworkHelper
