import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { control } from '../../configurations/utils';
import { OrderDetail } from '../../models/IOrder';
import { getOrderById, orderDelete, orderListOrders } from '../../services/OrderService';
import CustomerNavbar from './CustomerNavbar'

function CustomerOrder() {

    const [orders, setOrders] = useState<OrderDetail[]>([])

    const userId = control()?.userId
    const paramsUid = Number(userId)    

    const { oid } = useParams()
    const paramsOid = Number(oid)

    useEffect(() => {
      orderUpdate(paramsOid)

  
      //category list
      getOrderById(paramsUid).then(res => {
        const list = res.data.result
        console.log(list);
        setOrders(list)
  
      })
    }, [])
  
    //product delete
    const funcDelete = (orderId: number) => {
      orderDelete(orderId).then(res => {
        if (res.data.status) {
          orderUpdate(paramsOid)
        }
      })
    }
  
    //product list
    const orderUpdate = (orderId: number) => {
        orderListOrders().then(res => {
        const orderList = res.data.result
        setOrders(orderList)
      })
    }


  return (
    <>
    <CustomerNavbar/>
    <div className="container">
        <div className="row">
          <table className="table table-dark table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            {orders.map((item, index) =>
              <tbody key={index}>
                <tr>
                  <th scope="row">{index + 1} </th>
                  
                  <td>{item.productName}</td>
                  <td>{item.productPrice}</td>
                  <td><a onClick={() => funcDelete(item.orderId)} role='button' className="btn btn-danger p-1 py-1">Delete</a></td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  )
}

export default CustomerOrder