import axios from "axios";

// root url
const rootUrl = 'https://api.jetali.uk/api/v1';

//adding the endpoints to the root url 
const createSubCategoryUrl = rootUrl + "/sub_category"
const getSubCategoriesUrl = rootUrl + "/sub_category"
const getSubCategoryUrl = rootUrl + "/sub_category"
const updateSubcategoryUrl = rootUrl + "/sub_category"
const deleteSubcategoryUrl = rootUrl + "/sub_category/delete"



//this is create new sub category type api
export const createSubCategory = (formData) => {
    const tokenStr = sessionStorage.getItem("accessJWT")
    console.log(tokenStr);
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.post(createSubCategoryUrl, formData, {
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


//get all sub categories
export const getSubCategories = () => {
    const tokenStr = sessionStorage.getItem("accessJWT")
    console.log(tokenStr);
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.get(getSubCategoriesUrl, {
                headers: {
                "Authorization" : `Bearer ${tokenStr}`,
                //"Content-Type": "application/json", 
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


//get sub category by id
export const getSubCategory = (id) => {
    const tokenStr = sessionStorage.getItem("accessJWT")
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.get(`${getSubCategoryUrl}/${id}`, {
                headers: {
                "Authorization" : `Bearer ${tokenStr}`,
                //"Content-Type": "application/json", 
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


//update the subcategory
export const updateSubcategory = (data, id) => {
    const tokenStr = sessionStorage.getItem("accessJWT")
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.patch(`${updateSubcategoryUrl}/${id}`, data, {
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





//delete the subcategory
export const deleteSubcategory = (id) => {
    const tokenStr = sessionStorage.getItem("accessJWT")
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.patch(`${deleteSubcategoryUrl}/${id}`, {
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