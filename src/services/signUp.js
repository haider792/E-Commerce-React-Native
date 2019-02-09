import wservice from './helper/WService';

export const signUpCustomer = (email,name,password) => {
    return new Promise((resolve, reject) => {
          wservice.signUp(email,name,password)
            .then((response) => {
              if (response.statusCode == 201) {
                resolve(response.body)
              } else {
                reject(response.body.message)
              }
            })
            .catch(reject)
        })
}