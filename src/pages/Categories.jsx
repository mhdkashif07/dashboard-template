import React, { useEffect, useState } from 'react'
import { Table, PrimaryButton } from '../components/index';
import { Grid } from '@mui/material';
import customerList from '../assets/JsonData/customers-list.json'
import { getCategoryTypes, deleteCategory } from '../services/addCategory';
import { MDBDataTable } from "mdbreact";
import { Link } from 'react-router-dom';
import { isLoading, isError, isSuccess } from "../slices/loadingSlice"
import { useDispatch } from 'react-redux';
const customerTableHead = [
    '',
    'Title',
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.title}</td>
    </tr>
    )


const Categories = () => {
    const [categoryTypes, setCategoryTypes] = useState([]);
    const dispatch = useDispatch()

    //fetch the categories
    const fetchData = async() => {
      const response = await getCategoryTypes();
      console.log(response);
      const data = await response.data.Docs;
      console.log(data);
      setCategoryTypes(data);
    }
    useEffect(() => {
        fetchData();
      }, []);
    
      console.log(categoryTypes);

       //handle edit fucntion
       const handleEdit = (id) => {
        console.log(id);
      }
      
      //handle delete function
      const handleDelete = async(id) => {
        console.log(id);
        const response = await deleteCategory(id)
        console.log(response);
        // const data = await response.json()
        if(response.status === "success"){
          console.log("response is success");
          dispatch(isSuccess("Category Deleted Successfully"))
          fetchData()
        }
      }

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
            label: "Category Image",
            field: "categoryImage",
            sort: "asc",
            width: 150,
          },
          {
            label: "Category Icon",
            field: "categoryIcon",
            sort: "asc",
            width: 150,
          },
          {
            label: "Edit Category",
            field: "editCategory",
            sort: "asc",
            width: 150,
          },
          {
            label: "Delete Category",
            field: "deletCategory",
            sort: "asc",
            width: 150,
          }
        ],
        rows: categoryTypes.map((category,index) => {
          return {
            index: index+1,
            title: category.title,
            categoryImage: <img src={category.image} style={{ width: "50px" }} />,
            categoryIcon: <img src={category.icon} style={{ width: "50px" }} />,
            editCategory:  <Link to={`/editcategory/${category._id}`}><button  style={{ width: "70px" }} onClick = { () => handleEdit( category._id )}><PrimaryButton text="Edit" /></button> </Link>,
            deletCategory: <button style={{ width: "70px" }} onClick = { () => handleDelete( category._id )}><PrimaryButton text="Delete" /></button>
          };
        }),
      };
    
      


    return (
        <div>
            <h2 className="page__header">
            Categories
            </h2>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="card">
                        <div className="card__body">
                            {/* <Table
                            limit="10"
                            headData={customerTableHead}
                            renderHead={(item,index) => renderHead(item, index)}
                            bodyData=""
                            renderBody="" 
                            /> */}
                        </div>

                        
            {/* Mdb react table */}
            <div>
              <MDBDataTable striped bordered small data={data} />
            </div>

                        {/* <div className="card__body">
                            <table>
                                <tr>
                                    <td><h3>Index</h3></td>
                                    <td><h3>Title</h3></td>
                                </tr>
                           { categoryTypes?.map((item, index) => (
                                <tr>
                                <td>{index}</td>
                                    <td>{item.title}</td>
                                </tr>
                           )) }
                           </table>
                        </div> */}
                    </div>

                </Grid>
            </Grid>
            
        </div>
    )
}

export default Categories
