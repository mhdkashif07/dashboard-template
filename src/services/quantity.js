import axios from "axios";

// root url
const rootUrl = 'https://api.jetali.uk/api/v1';

//adding the endpoints to the root url 
const createQuantityUrl = rootUrl + "/quantity_type"
const getQuantityUrl = rootUrl + "/quantity_type"
const updateQuantityUrl = rootUrl + "/quantity_type"
const deleteQuantityUrl = rootUrl + "/quantity_type"

const tokenStr = sessionStorage.getItem("accessJWT")

console.log(tokenStr);


//this is create new quantity type api
export const createQuantity = (formData) => {
    const tokenStr = sessionStorage.getItem("accessJWT")
    console.log(tokenStr);
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.post(createQuantityUrl, formData, {
                headers: {
                "Authorization" : `Bearer ${tokenStr}`,
                "Content-Type": "application/json", 
            }}
            );
            console.log(res)

            resolve(res.data)
            
           
        } catch(error){
            console.log(error.message);
            reject(error)
        }
    });
};


//this api end point will get all the quantity types
export const getQuantityTypes = () => {
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.get(getQuantityUrl);
            console.log(res)

            resolve(res.data)
           
        } catch(error){
            console.log(error.message);
            reject(error)
        }
    });
};


//this api will get the quantity by id
export const getQuantityType = (id) => {
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.get(`${updateQuantityUrl}/${id}`);
            console.log(res)

            resolve(res.data)
           
        } catch(error){
            console.log(error.message);
            reject(error)
        }
    });
};

//this api will update the quantity by id
export const updateQuantityType = (data, id) => {
    const tokenStr = sessionStorage.getItem("accessJWT")
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.patch(`${updateQuantityUrl}/${id}`, data, {
                    headers: {
                    "Authorization" : `Bearer ${tokenStr}`,
                    "Content-Type": "application/json", 
                }
            });
            console.log(res)

            resolve(res.data)
           
        } catch(error){
            console.log(error.message);
            reject(error)
        }
    });
};


//this api will delete the quantity type by id
export const deleteQuantityType = (id) => {
    const tokenStr = sessionStorage.getItem("accessJWT")
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.delete(`${deleteQuantityUrl}/${id}`, {
                headers: {
                "Authorization" : `Bearer ${tokenStr}`,
                "Content-Type": "application/json", 
            }}
            );
            console.log(res)

            resolve(res.data)
           
        } catch(error){
            console.log(error.message);
            reject(error)
        }
    });
};
