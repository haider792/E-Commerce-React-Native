import wservice from './helper/WService';


export const getproducts = () => {
    return new Promise((resolve , reject) => {
        wservice.getProducts().then( response => {
            if(response.statusCode == 200){
                resolve(response.body)
            }if(response.statusCode == 500){
                reject(response.body.message)
            }
        })
        .catch(reject)
    })
}

export const addproducts = (name,image) => {
    return new Promise((resolve , reject) => {
        fetch('http://192.168.0.106:3100/products/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              image: image,
              name: name 
            }),
            }).then( response => {
            if(response.statusCode == 200){
                resolve(response.body)
            }if(response.statusCode == 500){
                reject(response.body.message)
            }
        })
        .catch(reject)
    })
}