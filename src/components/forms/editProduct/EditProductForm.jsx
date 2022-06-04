import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { PrimaryButton } from "../../index";
import "../addproduct/addproductform.css";
import { useDispatch, useSelector } from "react-redux";
import { newEditProduct } from "./../../../redux/actions/editproduct-actions";
import { getQuantityTypes } from "../../../services/quantity";
import { getCategoryTypes } from "../../../services/addCategory";
import { getUpdateProduct } from "../../../services/productsApi"




const EditProductForm = (props) => {
    console.log(props.id);
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState()
  const [quantityTypes, setQuantityTypes] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState('');
//   const value = selectedQuantity !== -1 && quantityTypes[selectedQuantity];
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
//   const value1 = selectedCategory !== -1 && categoryTypes[selectedCategory];
const { loading, fetching, success, error } = useSelector(state => state.loading)

const [productInput, setProductInput] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    minimumPack: ""
  });

  console.log(productInput);
  const [productImage, setProductImage] = useState();

  //change for inputs
  const handleChange = (e) => {
    e.persist();
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  //handle change for image
  const handleImage = (e) => {
    console.log(e.target.files[0])
    setProductImage(e.target.files[0]);
  };



  //fetching quntity types
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getQuantityTypes();
      // ...
      console.log(response);
      const data = await response.data.Docs;
    //   console.log(data);
      setQuantityTypes(data);
    }
    fetchData();
  }, []);


  //fetching category types
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getCategoryTypes();
      // ...
      console.log(response);
      const data = await response.data.Docs;
    //   console.log(data);
      setCategoryTypes(data);
    }
    fetchData();
  }, []);

//getting single product by id
useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getUpdateProduct(props.id);
      // ...
      console.log(response);
      const data = await response.data.doc;
    //   console.log(data);
      setProductInput({
        productName: data.title,
        productPrice: data.price,
        productDescription: data.description,
        minimumPack: data.minimumPack
      })

      setProductImage(data.image)
      console.log(data.image);
      console.log(data.category?._id);
      setSelectedQuantity(data.quantityTypeId?._id)
      setSelectedCategory(data.category?._id)
    }
    fetchData();
  }, []);

  const bodyFormdata = new FormData();
  bodyFormdata.append("title", productInput.productName);
  bodyFormdata.append("image", productImage);
  bodyFormdata.append("price", productInput.productPrice);
  bodyFormdata.append("description", productInput.productDescription);
  bodyFormdata.append("quantityTypeId", selectedQuantity);
  bodyFormdata.append("category", selectedCategory);
  bodyFormdata.append("minimumPack", productInput.minimumPack);
  

 

  //handle the submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newEditProduct(bodyFormdata, props.id))
    setProductInput({
      productName: "",
      productPrice: "",
      productDescription: " ",
      minimumPack: ""
    });

  };

 
  return (
    <div className="addproduct__container card">
      <div className="addproduct__form">
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="addproduct__form--inputs">
                  <div>
                    <label htmlFor="name" name="name">
                      Name:
                    </label>
                    <input
                      type="text"
                      name="productName"
                      value={productInput.productName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="image" name="image">
                      Product Image:
                    </label>
                    <input
                      type="file"
                      id="myFile"
                      name="filename"
                      multiple
                      // defaultValue={productImage}
                      onChange={handleImage}
                    />
                    <img src={productImage} alt="" style={{ width: "50px" }} />
                  </div>
                  <div>
                    <label htmlFor="type" name="type">
                      Product Price:
                    </label>
                    <input
                      type="text"
                      name="productPrice"
                      value={productInput.productPrice}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Minimum pack input */}
                  <div>
                    <label htmlFor="name" name="name">
                      Minimum Pack:
                    </label>
                    <input
                      type="text"
                      name="minimumPack"
                      value={productInput.minimumPack}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="type" name="type">
                      Product Description:
                    </label>
                    <textarea name="productDescription" id="" cols="52" rows="10"  value={productInput.productDescription}
                      onChange={handleChange} required />
                      
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="addproduct__form--inputs addproduct__form--options">
                     {/* Select option for Quantity types types */}
                  <div className="addproduct__form--quantity">
                      <label htmlFor="">Select Quantity</label>
                    <select
                      data-val="true"
                      name="quantity"
                      defaultValue="Select quantity"
                      onChange={(e) => setSelectedQuantity(e.target.value)}
                      value={selectedQuantity}
                      required
                    >
                      <option value="" disabled selected>
                        Select your quantity
                      </option>
                      {quantityTypes.map((item, ix) => {
                        return (
                          <option key={item._id} value={item._id}>
                            {item.symbol}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  {/* Select option for category types */}
                  <div className="addproduct__form--category">
                  <label htmlFor="">Select Category</label>
                    <select
                      data-val="true"
                      name="category"
                      defaultValue="Select category"
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      value={selectedCategory}
                      required
                    >
                      <option value="" disabled selected>
                        Select your category
                      </option>
                      {categoryTypes.map((item, ix) => {
                        return (
                          <option key={item._id} value={item._id}>
                            {item.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                </div>
              </Grid>
            </Grid>
            <Grid container></Grid>
          </Grid>

          <div className="formsubmit__button">
            <button >
            <PrimaryButton text="Update Product" width="50px" />
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
