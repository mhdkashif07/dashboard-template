import { getUpdateProduct } from '../../services/productsApi'
import { updateProduct } from '../../services/productsApi'
import { isLoading, isError, isSuccess } from "../slices/loadingSlice"


export const newUpdatedProduct = (data) => async (dispatch) => {
  console.log(data);
    //try catch for api call
    try {
    // dispatch(isLoading());
  
      //calling the api here
      const result = await getUpdateProduct(data);
  
      console.log(result);
  
      //ternary operator
      result.status === "success"
        ? dispatch(isSuccess("Product Created Successfully"))
        : dispatch(isError(result.message));
  
    } catch (error) {
      console.log(error.message)
  
      //checking if the status is equal to fail then show the error message in error reducer
    //   if (error.response) {
    //       dispatch(isError(error.response.data.message));
    //       // console.log(error.response.status);
    //       // console.log(error.response.headers);
    //     }
    }
  };




export const newEditProduct = (data, id) => async (dispatch) => {
  console.log(data);
    //try catch for api call
    try {
    dispatch(isLoading());
  
      //calling the api here
      const result = await updateProduct(data,id);
  
      console.log(result);
  
      //ternary operator
      result.status === "success"
        ? dispatch(isSuccess("Product Updated Successfully"))
        : dispatch(isError(result.message));
  
    } catch (error) {
      console.log(error.message)
  
      //checking if the status is equal to fail then show the error message in error reducer
      if (error.response) {
        console.log(error.response);
        console.log(error.response.statusText);
          dispatch(isError(error.response.statusText));
          // console.log(error.response.status);
          // console.log(error.response.headers);
        }
    }
  };