import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./addcategoryform.css";
import { PrimaryButton } from "../../index";
import { newAddCategory } from "./../../../redux/actions/addCategory-actions";
import { useDispatch } from "react-redux";

const AddCategoryForm = () => {
  const dispatch = useDispatch();
  const myHeaders = new Headers();
  const [categoryName, setCategoryName] = useState("");
  const [icon, setIcon] = useState([]);
  const [image, setImage] = useState([]);

  // const tokenStr = sessionStorage.getItem("accessJWT")
  // myHeaders.append(
  //     "Authorization", `Bearer ${tokenStr} `
  // );
  // // myHeaders.append(
  // //     "Content-Type", "multipart/form-data",
  // // );

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleIcon = (e) => {
    setIcon(e.target.files[0]);
  };

  const bodyformdata = new FormData();
  bodyformdata.append("title", categoryName);
  bodyformdata.append("icon", icon);
  bodyformdata.append("image", image);

  // const requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: formdata,
  //   redirect: 'follow'
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    //     fetch("http://18.134.150.58:3001/api/v1/productcategory", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    dispatch(newAddCategory(bodyformdata));
    setCategoryName("");
  };

  return (
    <div className="addcategory__container card">
      <div className="addcategory__form">
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="addcategory__form--inputs">
                <div>
                  <label htmlFor="name" name="name">
                    Category Name:
                  </label>
                  <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="image" name="image">
                    Cateogry Icon:
                  </label>
                  <input
                    type="file"
                    id="myFile"
                    name="filename"
                    multiple
                    onChange={handleIcon}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="type" name="type">
                    Cateogry Image:
                  </label>
                  <input
                    type="file"
                    id="myFile"
                    name="filename"
                    multiple
                    onChange={handleImage}
                    required
                  />
                </div>
              </div>
            </Grid>
            {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div className="addcategory__form--inputs">
                        <div>
                            <label htmlFor="description" name="description">Product Description:</label>
                            <textarea name="description" id="" cols="30" rows="10" />
                        </div>
                       
                    </div>
                </Grid> */}
            <div className="formsubmit__button">
              <button>
                <PrimaryButton text="Add Category" width="50px" />
              </button>
            </div>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryForm;
