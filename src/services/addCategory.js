import axios from "axios";

// root url
const rootUrl = "http://18.134.150.58:3001/api/v1";

//adding the endpoints to the root url
const addCategoryUrl = rootUrl + "/productcategory";
const getCategoryUrl = rootUrl + "/productcategory";
const getSingleCategoryUrl = rootUrl + "/productcategory";

//this is addCategory api
export const addCategory = (formData) => {
  const tokenStr = sessionStorage.getItem("accessJWT");
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(addCategoryUrl, formData, {
        headers: {
          // "Content-Type": "multipart/form-data",
          // "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${tokenStr}`,
        },
      });
      console.log(res);

      resolve(res.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

//get all category types
export const getCategoryTypes = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(getCategoryUrl);
      console.log(res);

      resolve(res.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

//get single category by id
export const getSingleCategory = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${getSingleCategoryUrl}/${id}`);
      console.log(res);

      resolve(res.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

//update the category with id
export const updateCategory = (data, id) => {
  const tokenStr = sessionStorage.getItem("accessJWT");
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.patch(`${getSingleCategoryUrl}/${id}`, data, {
        headers: {
          // "Content-Type": "multipart/form-data",
          // "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${tokenStr}`,
        },
      });
      console.log(res);

      resolve(res.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

//delete  the category with id
export const deleteCategory = (id) => {
  const tokenStr = sessionStorage.getItem("accessJWT");
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.delete(`${getSingleCategoryUrl}/${id}`, {
        headers: {
          // "Content-Type": "multipart/form-data",
          // "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${tokenStr}`,
        },
      });
      console.log(res);

      resolve(res.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
