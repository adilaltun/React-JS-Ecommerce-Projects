import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Logout() {

    const navigate = useNavigate()  

    const fncLogout = () =>  {
      sessionStorage.removeItem('user')
      localStorage.removeItem('user')
      navigate('/home')
    }
  
    const clearRole = (title: string) => {
      title = title.substring(5)
      return title
    }
  
    function capitalizeFirstLetter(str:string) {
      const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
      return capitalized;
    }

  return (
    <>
     <NavLink to="/home" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" role='button'><i className="bi bi-door-closed-fill"></i> Logout</NavLink>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">User Logout</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Are you sure logout!
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i className="bi bi-x-octagon"></i> Close</button>
                    <button  data-bs-dismiss="modal" onClick={ fncLogout } type="button" className="btn btn-danger"><i className="bi bi-door-closed-fill"></i> Logout</button>
                </div>
                </div>
            </div>
        </div> 
    
    </>
  )
}

export default Logout