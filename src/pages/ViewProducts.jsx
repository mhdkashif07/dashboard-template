import React, { useEffect, useState } from "react";
import { Table, PrimaryButton } from "../components/index";
import { Grid } from "@mui/material";
import customerList from "../assets/JsonData/customers-list.json";
import { getAllProducts } from "../services/productsApi";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { deleteProduct } from "../services/productsApi"
import { useDispatch } from "react-redux";
import { isLoading, isError, isSuccess } from "../redux/slices/loadingSlice"




const ViewProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch()
  

  //fetch all the product lists
  const fetchData = async() => {
      // You can await here
      const response = await getAllProducts();
      console.log(response);
      const data = await response.data.Docs;
      console.log(data);
      setAllProducts(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(allProducts);

  const handleEdit = (id) => {
    console.log(id);
  }
  
  const handleDelete = async(id) => {
    console.log(id);
    const response = await deleteProduct(id)
    console.log(response);
    // const data = await response.json()
    if(response.status === "success"){
      dispatch(isSuccess("Product Deleted Successfully"))
      console.log("response is success");
      fetchData()
    }
    
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  

  const data = {
    columns: [
      {
        label: "Index",
        field: "index",
        sort: "asc",
        width: 150,
      },
      {
        label: "Title",
        field: "title",
        sort: "asc",
        width: 150,
      },
      {
        label: "Product Description",
        field: "productDesc",
        sort: "asc",
        width: 150,
      },
      {
        label: "SubCateogory Title",
        field: "subCategoryTitle",
        sort: "asc",
        width: 150,
      },
      {
        label: "Minimum Pack",
        field: "minimumPack",
        sort: "asc",
        width: 150,
      },
      {
        label: "Symbol",
        field: "quantitySymbol",
        sort: "asc",
        width: 150,
      },
      {
        label: "Product Price",
        field: "price",
        sort: "asc",
        width: 150,
      },
      {
        label: "Product Image",
        field: "productImage",
        sort: "asc",
        width: 150,
      },
      {
        label: "Delete Product",
        field: "deleteProduct",
        sort: "asc",
        width: 50,
      },
      {
        label: "Edit Product",
        field: "editProduct",
        sort: "asc",
        width: 50,
      },
    ],
    // rows: allProducts
    rows: allProducts.map((product,index) => {
      return {
        index: index+1,
        title: product.title,
        productDesc: product.description,
        subCategoryTitle: product.sub_categoryId?.title,
        quantitySymbol: product.quantityTypeId?.symbol,
        minimumPack: product.minimumPack,
        price: product.price,
        productImage: <img src={product.image} style={{ width: "50px" }} />,
        deleteProduct: <button style={{ width: "70px" }} onClick = { () => handleDelete( product._id )}><PrimaryButton text="Delete" /></button>,
        editProduct:  <Link to={`/editproduct/${product._id}`}><button  style={{ width: "70px" }} onClick = { () => handleEdit( product._id )}><PrimaryButton text="Edit" /></button> </Link> 
      };
    }),
  };

  return (
    <div>
      <h2 className="page__header">View All Products</h2>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="card">
            <div className="card__body">
            
            </div>

            {/* Mdb react table */}
            <div>
              <MDBDataTable striped bordered small data={data}  />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewProducts;
