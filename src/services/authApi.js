import axios from "axios";

// root url
const rootUrl = 'https://api.jetali.uk/api/v1/user';

//adding the endpoints to the root url 
const loginUrl = rootUrl + "/signin"

//form data is the actual data coming from the form
export const userLogin = (formData) => {
    return new Promise(async ( resolve, reject ) => {
        try {
            const res = await axios.post(loginUrl, formData);
            console.log(res)
            // localStorage.setItem('isAuthenticated',true)
            // navigate('/dashboard')
            
           //put the jwt token in local storage and in session
            if(res.data?.status === "success"){
                // console.log("This is the token", res.data?.token)
                sessionStorage.setItem("accessJWT", res.data?.token);
                localStorage.setItem("groceryApp", JSON.stringify({ refreshJWT: res.data?.token }))
            }
            resolve(res.data)
           
        } catch(error){
            console.log(error.message);
            reject(error)
        }
    });
};




