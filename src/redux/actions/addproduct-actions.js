import { createProduct } from '../../services/productsApi'
import { isLoading, isError, isSuccess } from "../slices/loadingSlice"


export const newCreatedProduct = (data) => async (dispatch) => {
  console.log(data);
    //try catch for api call
    try {
    
  
      //calling the api here
      const result = await createProduct(data);
  
      console.log(result);
  
      //ternary operator
      result.status === "success"
        ? dispatch(isSuccess("Product Created Successfully"))
        : dispatch(isError(result.message));
  
    } catch (error) {
      console.log(error.message)
  
      //checking if the status is equal to fail then show the error message in error reducer
      if (error.response) {
          dispatch(isError(error.response.data.message));
          // console.log(error.response.status);
          // console.log(error.response.headers);
        }
    }
  };


