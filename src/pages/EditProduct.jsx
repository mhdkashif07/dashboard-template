import React from 'react'
import { EditProductForm } from '../components/index'
import { useParams } from "react-router-dom" 

const EditProduct = () => {
    const { id } = useParams();
    console.log(id);
  
  return (
    <div className='editProduct__section'>
         <h2 className="page__header">
            Update Product
            </h2>
        <EditProductForm id={id} />
    </div>
  )
}

export default EditProduct