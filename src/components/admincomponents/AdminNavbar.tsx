import React from 'react'
import { NavLink } from 'react-router-dom'
import { control } from '../../configurations/utils'
import LogOut from '../LogOut'

function AdminNavbar() {



  const user = control()
  return (
    
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <NavLink className="navbar-brand" to='/dashboard'><i className="bi bi-shop"></i> HiçbiriBurada</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/adminCategory'>Category</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/adminProduct'>Product</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/adminOrder'>Order</NavLink>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled d-flex justify-content-end">{user?.result.username}</a>
                </li>
                </ul>                
            </div>
            <li className="nav-item d-flex justify-content-end">
                <LogOut/>
            </li>            
        </nav>
    </>
  )
}

export default AdminNavbar