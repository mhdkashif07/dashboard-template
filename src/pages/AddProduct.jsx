import React from 'react'
import { AddProductForm } from '../components/index'

const AddProduct = () => {  
  return (
    <div className='addproduct__section'>
         <h2 className="page__header">
            Add Product
            </h2>
        <AddProductForm />
    </div>
  )
}

export default AddProduct