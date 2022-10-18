import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { encrypt } from '../../configurations/utils'
import HomeNavbar from '../../navbars/HomeNavbar'
import { userRegister } from '../../services/RegisterService'

function Register() {

const navigate = useNavigate()
const [userName, setUserName] = useState('')
const [userSurname, setUserSurname] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const fncRegister = (evt:React.FormEvent) => {
    evt.preventDefault()
        if(userName === ''){
            toast.error("User name is empty!")
        }else if (userSurname === ''){
            toast.error("User surname is empty!")
        }else if(email === ''){
            toast.error("Email is empty!")
        }else if(password === ''){
            toast.error("Password is empty!")
        }else{
    userRegister(userName,userSurname,email,password).then(res=>{
            if(res.status===200){
                const dt = res.data
                  const stData = JSON.stringify(dt)
                  sessionStorage.setItem('user', encrypt(stData))
                  navigate('/customerHomePage')
            }else{
                toast.error("Some area is empty.Please fill it!")
            }
            
    }).catch(err=>{
        toast.error( err.message )
    })
    }
}

  return (
    <>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h3 className='text-center' >Customer Register</h3>
                <form onSubmit={fncRegister} method='post'>
                    <input onChange={(evt)=>setUserName(evt.target.value)} type="text" placeholder='Name' className='form-control' /><br></br>
                    <input onChange={(evt)=>setUserSurname(evt.target.value)} type="text" placeholder='Surname' className='form-control' /><br></br>
                    <input onChange={(evt)=>setEmail(evt.target.value)} type="email" placeholder='Email' className='form-control' /><br></br>
                    <input onChange={(evt)=>setPassword(evt.target.value)} type="password" placeholder='Password' className='form-control' /><br></br>
                    <div className='row'>
                        <div className='col-sm-4'><button type='submit' className='btn btn-success '><i className="bi bi-send"></i> Send</button></div>
                        <div className='col-sm-3'></div>
                        <div className='col-sm-5'><NavLink to={'/home'} className='btn btn-danger btn-end' ><i className="bi bi-house-door"></i> Home Page</NavLink></div>
                    </div>                        
                </form>
                
            </div>
            <div className='col-sm-4'></div>        
        </div>  
    </>
  )
}

export default Register