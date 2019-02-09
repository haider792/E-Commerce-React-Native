import wservice from './helper/WService';

export const logIn = (email,password) => {
    return new Promise((resolve, reject) => {
          wservice.LogIn(email,password)
            .then((response) => {
              if (response.statusCode == 200) {
                resolve(response.body)
              } else {
                reject(response.body.message)
              }
            })
            .catch(reject)
        })
}