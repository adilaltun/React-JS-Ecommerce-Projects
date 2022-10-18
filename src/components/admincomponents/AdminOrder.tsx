import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { OrderDetail } from '../../models/IOrder'
import { orderListOrders } from '../../services/OrderService'
import AdminNavbar from './AdminNavbar'

function AdminOrder() {
  
  const [orders, setOrders] = useState<OrderDetail[]>([])

  useEffect(() => {
    orderListOrders().then(res => {
      setOrders(res.data.result)
    })
  }, [])
  
    return (
    <>
    <AdminNavbar/>
    <div className="text-bg-dark text-center p-1 mb-3">Admin Order Page</div>
    <div className="container">
        <div className="row">
          <table className="table table-dark table-hover table-striped ">
            <thead >
              <tr>
                <th scope="col">No</th>
                <th scope="col">User ID</th>
                <th scope="col">Product ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            {orders.map((item, index) =>
              <tbody key={index}>
                <tr>
                  <th scope="row">{index + 1} </th>
                  <td>{item.userId}</td>
                  <td>{item.productId}</td>
                  <td>{item.userName + " " + item.userSurname}</td>
                  <td>{item.productName}</td>
                  <td>{item.productPrice}</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
    </div>
    </>
  )
}

export default AdminOrder