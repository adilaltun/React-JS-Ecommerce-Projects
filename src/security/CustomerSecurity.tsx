import { Navigate } from "react-router-dom"
import Login from "../components/admincomponents/AdminLogin"
import CustomerLogin from "../components/customercomponents/CustomerLogin"
import { control } from "../configurations/utils"

function CustomerSecurity ( item : {component: JSX.Element}){

    const jwt = control()
    let customerRole = false
    if ( jwt !== null ) {
      jwt.result.authorities.map( item => {
          if (item.authority === "ROLE_customer") {
            customerRole = true
          }
      })
}

return (
    customerRole === false
    ?
    <Navigate to='/' replace />
    :
    <>
    <CustomerLogin/>{item.component}
    </>
  )
}

export default CustomerSecurity