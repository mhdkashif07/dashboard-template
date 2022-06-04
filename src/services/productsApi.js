import axios from "axios";

// root url
const rootUrl = 'https://api.jetali.uk/api/v1';

//adding the endpoints to the root url 
const createProductUrl = rootUrl + "/product"
const getProductsUrl = rootUrl + "/product"
const updateProductUrl = rootUrl + "/product"
const deleteProductUrl = rootUrl + "/product"



//this is addCategory api
export const createProduct = (formData) => {
const tokenStr = sessionStorage.getItem("accessJWT")
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.post("https://api.jetali.uk/api/v1/product", formData, {
                headers: {
                // "Content-Type": "multipart/form-data",
                // "Content-Type": "application/json; charset=utf-8",
                "Authorization" : `Bearer ${tokenStr}` 
            }}
            );
            console.log(tokenStr);
            console.log(res)
        

            resolve(res.data)
           
        } catch(error){
            console.log(error.message);
            reject(error)
        }
    });
};


//get all products
export const getAllProducts = () => {
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.get(getProductsUrl);
            console.log(res)

            resolve(res.data)
           
        } catch(error){
            console.log(error.message);
            reject(error)
        }
    });
};


//get a single product by id
export const getUpdateProduct = (id) => {
    
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.get(`https://api.jetali.uk/api/v1/product/${id}`);
            console.log(res)

            resolve(res.data)
           
        } catch(error){
            console.log(error.message);
            reject(error)
        }
    });
};

//update the single product
export const updateProduct = (formData,id) => {
    const tokenStr = sessionStorage.getItem("accessJWT")
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.patch(`https://api.jetali.uk/api/v1/product/${id}`, formData, { 
            headers: {
            // "Content-Type": "multipart/form-data",
            // "Content-Type": "application/json; charset=utf-8",
            "Authorization" : `Bearer ${tokenStr}` 
        }});
            console.log(res)

            resolve(res.data)
           
        } catch(error){
            console.log(error.message);
            reject(error)
        }
    });
};


//delete a single product
export const deleteProduct = (id) => {
    const tokenStr = sessionStorage.getItem("accessJWT")
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.delete(`${deleteProductUrl}/${id}`, { 
                headers: {
                // "Content-Type": "multipart/form-data",
                // "Content-Type": "application/json; charset=utf-8",
                "Authorization" : `Bearer ${tokenStr}` 
            }});
            console.log(res)

            resolve(res.data)
           
        } catch(error){
            console.log(error.message);
            reject(error)
        }
    });
};



