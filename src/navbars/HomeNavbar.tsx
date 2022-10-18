import { NavLink } from 'react-router-dom'
import { INavBar } from '../models/INavbar'

function Navbar( item: INavBar ) {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to='/home'><i className="bi bi-shop"></i> HiçbiriBurada</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        
                    </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Login Action
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><NavLink className="dropdown-item" to='/adminLogin'>Admin Login</NavLink></li>
                    <li><NavLink className="dropdown-item" to='/customerLogin'>Customer Login</NavLink></li>
                    <li><NavLink className="dropdown-item" to='/register'>Customer Register</NavLink></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar