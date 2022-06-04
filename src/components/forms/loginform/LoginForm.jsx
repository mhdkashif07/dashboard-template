import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { PrimaryButton } from '../../index'
import { userLogin } from '../../../services/authApi'
import { useNavigate } from "react-router-dom"
import { IoPersonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import './loginform.css'
import logo from "../../../assets/images/jetalijpg.jpg"

const LoginForm = () => {
  const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
      });

      const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    //handling the login function and pass the data
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        localStorage.setItem('isAuthenticated',true)
            navigate('/dashboard')
        // dispatch(loginPending())
      };
  return (
    <div className='login__form'>
        <div className="login__form--textfields">
        <form action="" onSubmit={handleSubmit}>
            <Grid container justifyContent={'center'}>
                <Grid item  xs={3} sm={3} md={3} lg={3} xl={3}>
                  <img src={logo} alt="" style={{ width: '100%', height: '100%' }} />
                  </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className='login__form--inputs'>
                  <div className="addcategory__form--inputs">
                        <div>
                            <label htmlFor="name" name="name">Email:</label>
                            <input type="text" name="email" value={data.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="image" name="image">Password:</label>
                            <input type="text"  name="password" value={data.password} onChange={handleChange}  />
                        </div>

                    </div>
                  <div className="formsubmit__button">
                    <PrimaryButton text="Login" width='50px'  /> 
                       
                    </div>
                  </div>
                   
                </Grid>
               
            </Grid>
        </form>
        </div>

        
    </div>
  )
}

export default LoginForm