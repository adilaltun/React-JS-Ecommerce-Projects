import React from 'react'
import { Navigate } from 'react-router-dom'
import { control } from '../configurations/utils'
import AdminLogin from './admincomponents/AdminLogin'
import AdminNavbar from './admincomponents/AdminNavbar'

function Dashboard() {

    const jwt = control()
  const fncRouter = ( role:string ) => {
    if ( role === 'ROLE_customer' ) {
        return <Navigate to='/customer' replace />
    }
  }


  return (
    jwt === null 
    ?
    <Navigate to='/' replace />
    :
    <>
        { fncRouter(jwt.result.authorities[0].authority) }
    <AdminNavbar/>
    </> 

  )
}

export default Dashboard