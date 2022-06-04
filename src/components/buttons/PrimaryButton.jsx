import React from 'react'
import { Link } from 'react-router-dom'
import './primarybutton.css'

const PrimaryButton = (props) => {
  return (
    <div className='primary__button'>
        <button style={{ padding: `0 ${props.width} ` }}>{props.text}</button>
    </div>
  )
}

export default PrimaryButton