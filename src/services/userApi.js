import axios from "axios";

// root url
const rootUrl = "https://api.jetali.uk/api/v1/user";

//adding the endpoints to the root url
const getAllUsersUrl = rootUrl + "/byAdmin";
const deleteUserUrl = rootUrl + "/deleteByAdmin";


//getting all branches
export const getAllUsers = () => {
  //getting token from session storage
  const tokenStr = sessionStorage.getItem("accessJWT");
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(getAllUsersUrl, {
        headers: {
          // "Content-Type": "multipart/form-data",
          //"Content-Type": "application/json",
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


//delete a user with id
export const deleteUser = (id) => {
  //getting token from session storage
  const tokenStr = sessionStorage.getItem("accessJWT");
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.delete(`${deleteUserUrl}/${id}`, {
        headers: {
          // "Content-Type": "multipart/form-data",
          //"Content-Type": "application/json",
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

