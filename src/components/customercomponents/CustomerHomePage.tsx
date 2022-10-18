import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { control } from '../../configurations/utils'
import { ProductInfo } from '../../models/IProduct'
import { getImagesByProduct } from '../../services/ProductService.'
import Category from '../Category'
import CustomerNavbar from './CustomerNavbar'

function CustomerHomePage() {

    const [products, setProducts] = useState<ProductInfo[]>([])

    useEffect(() => {

        getImagesByProduct().then(res => {
            setProducts(res.data.result)
        })

    }, [])

  const user = control()
  return (
    <>
    <CustomerNavbar/>
    <div className="container">
        <Category/>
        <hr />
        <div className="buttons d-flex justify-content">
            <div className="container">
                <div className="row">
                    {products.map((item, index) =>
                    <div key={index} className="col-md-3 mt-4">
                        <div key={item.productId} className="card h-100 text-center p-4">
                        <img src={item.file} className="card-img-top" alt={item.productName} height="250px"/>
                        <div className="card-body">
                        <h5 className="card-title mb-0">{item.productName}</h5>
                        <blockquote className="blockquote">
                            <p><hr /></p>
                        </blockquote>
                        <NavLink to={"/productDetail/" + item.productId}>
                        <div className='d-grid'>
                        <button className="btn btn-dark btn-sm" type="button"> <i className="bi bi-info-circle"></i> Details</button>
                        </div>
                        </NavLink>
                        </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default CustomerHomePage