import React from 'react'
import { NavLink } from 'react-router-dom'
import { control } from '../../configurations/utils'
import LogOut from '../LogOut'

function CustomerNavbar() {

const user = control()
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <NavLink className="navbar-brand" to='/customerHomePage'><i className="bi bi-shop"></i> HiçbiriBurada</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to={'/customerOrder/'+ user!.userId}><i className="bi bi-basket"></i> Order</NavLink>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled">{user?.result.username}</a>
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

export default CustomerNavbar