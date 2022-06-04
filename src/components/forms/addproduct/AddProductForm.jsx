import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { PrimaryButton } from "../../index";
import "./addproductform.css";
import { useDispatch, useSelector } from "react-redux";
import { newCreatedProduct } from "../../../redux/actions/addproduct-actions";
import { getQuantityTypes } from "../../../services/quantity";
import { getCategoryTypes } from "../../../services/addCategory";
import { isLoading } from "../../../redux/slices/loadingSlice";
import { getSubCategories } from "../../../services/subcategoryApi";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [quantityTypes, setQuantityTypes] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState("");
  //   const value = selectedQuantity !== -1 && quantityTypes[selectedQuantity];
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  //   const value1 = selectedCategory !== -1 && categoryTypes[selectedCategory];
  const [subCategories, setSubCategories] = useState([]);
  const [subCategory, setSubCategory] = useState("");
  const [productInput, setProductInput] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    minimumPack: ""
  });
  const [productImage, setProductImage] = useState();
  const { loading, fetching, success, error } = useSelector(
    (state) => state.loading
  );

  console.log("Category id:", selectedCategory);
  console.log("Sub category id:", subCategory);

  //fetching quntity types
  useEffect(() => {
    async function fetchData() {
      const response = await getQuantityTypes();
      console.log(response);
      const data = await response.data.Docs;
      console.log(data);
      setQuantityTypes(data);
    }
    fetchData();
  }, []);

  //fetching category types
  useEffect(() => {
    async function fetchData() {
      const response = await getCategoryTypes();
      console.log(response);
      const data = await response.data.Docs;
      console.log(data);
      setCategoryTypes(data);
    }
    fetchData();
  }, []);

  //function for fetching sub categories
  const loadData = async () => {
    const response = await getSubCategories();
    const data = await response.data.Docs;
    console.table(data)
    data.filter((item) => selectedCategory === item.categoryId?._id)
      .map((item) => {
        setSubCategory(item._id);
      });
      console.log(data);
    setSubCategories(data);
  };

  useEffect(() => {
    loadData();
  }, [selectedCategory]);

  //change for inputs
  const handleChange = (e) => {
    e.persist();
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  //handle change for image
  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setProductImage(e.target.files[0]);
  };

  //get the selected category
  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  //setting data in bodyform
  const bodyFormdata = new FormData();
  bodyFormdata.append("title", productInput.productName);
  bodyFormdata.append("image", productImage);
  bodyFormdata.append("price", productInput.productPrice);
  bodyFormdata.append("description", productInput.productDescription);
  bodyFormdata.append("quantityTypeId", selectedQuantity);
  //bodyFormdata.append("category", selectedCategory);
  bodyFormdata.append("sub_categoryId", subCategory);
  bodyFormdata.append("minimumPack", productInput.minimumPack);
  

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isLoading());
    dispatch(newCreatedProduct(bodyFormdata));
    setProductInput({
      productName: "",
      productPrice: "",
      productDescription: " ",
      minimumPack: ""
    });
  };

  const handleGetId = (e) => {
    console.log(e.target.value);
    setSubCategory(e.target.value)
  }
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
                      onChange={handleImage}
                      required
                    />
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
                    <textarea
                      name="productDescription"
                      id=""
                      cols="52"
                      rows="10"
                      value={productInput.productDescription}
                      onChange={handleChange}
                      required
                    />
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
                      onChange={handleSelectedCategory}
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

                  {/* Select option for subcategory types */}
                  <div className="addproduct__form--category">
                    <label htmlFor="">Select Sub Category</label>
                    <select
                      data-val="true"
                      name="category"
                      defaultValue="Select category"
                      onChange={handleGetId}
                      value={subCategory}
                      required
                    >
                      <option value="" disabled selected>
                        Select your category
                      </option>
                      {subCategories
                        .filter(
                          (item) => selectedCategory === item.categoryId?._id
                        )
                        .map((item, ix) => {
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
            <button>
              <PrimaryButton text="Add Product" width="50px" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
