import { addCategory } from '../../services/addCategory'
import { isLoading, isError, isSuccess } from "../slices/loadingSlice"

export const newAddCategory = (data) => async (dispatch) => {
    //try catch for api call
    try {
      dispatch(isLoading());
  
      //calling the api here
      const result = await addCategory(data);
  
      console.log(result);
  
      //ternary operator
      result.status === "success"
        ? dispatch(isSuccess("Add Category Successfully"))
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