import React, { useEffect } from 'react'
import { EditCategoryForm } from '../components/index'
import { useParams } from 'react-router-dom'

const EditQuantity = () => {
  const { id } = useParams()
  console.log(id);


  return (
    <div className='quantitytype__section'>
    <h2 className="page__header">
      Update Category Type
       </h2>
   <EditCategoryForm id={id} />
</div>
  )
}

export default EditQuantity