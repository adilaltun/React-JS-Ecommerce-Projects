import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { control, encrypt } from '../../configurations/utils'
import { userLogin } from '../../services/LoginService'

function CustomerLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    
    const navigate = useNavigate()

    const sendFnc = (evt:React.FormEvent) => {
      evt.preventDefault()
      if ( email === '' || email === 'admin@mail.com' ) {
          toast.error('E-mail Empty or Go to admin login page!')
      }else if ( password === '' ) {
          toast.error('Password Empty!')
      }else {
          userLogin(email, password).then( res => {
              if ( res.status === 200 ) {
                  const dt = res.data
                  const stData = JSON.stringify(dt)
                  sessionStorage.setItem('user', encrypt(stData))
                  if ( remember === true ) {
                      localStorage.setItem('user', encrypt(stData) )
                  }
                  window.location.href='/customerHomePage'
                  //navigate()
              }else {
                  toast.error("Username or Password Fail!")
              }
  
          }).catch( err => {
              toast.error( err.message )
          })
      }
    }

    useEffect(() => {
        const jwt = control()
        if (jwt) {
            console.log(jwt.result.authorities[0].authority);
        }
      }, [])


  return (
    <>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h3 className='text-center'>Customer Login</h3>
                <form onSubmit={sendFnc} method='post'>
                <div className="form-outline mb-2">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input value={email} onChange={(evt) => setEmail(evt.target.value)} type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input value={password} onChange={(evt) => setPassword(evt.target.value)} type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3 form-check">
                    <input onClick={(evt) => setRemember(!remember)} type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">Remember</label>
                </div>                
                <div className='row'>
                        <div className='col-sm-4'><button type="submit" className="btn btn-primary"><i className="bi bi-person"></i> Login</button></div>
                        <div className='col-sm-3'></div>
                        <div className='col-sm-5 mb-5'><NavLink to={'/home'} className='btn btn-danger btn-end' ><i className="bi bi-house-door"></i> Home Page</NavLink></div>
                        
                        <p className='h5 text-center'>If you click home page button, you can see admin and customer email,password information</p>
                </div>

                </form>
            </div>
            <div className='col-sm-4'></div>
            
            
        </div>  
    </>
  )
}

export default CustomerLogin