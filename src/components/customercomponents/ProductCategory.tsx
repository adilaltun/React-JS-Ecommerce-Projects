import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ProductInfo } from '../../models/IProduct'
import { findProductWithCategory } from '../../services/ProductService.'
import Category from '../Category'
import CustomerNavbar from './CustomerNavbar'

function ProductCategory() {
    

    const { categoryId } = useParams()
    const paramsCid = Number(categoryId)
    
    const [products, setProducts] = useState<ProductInfo[]>([])
  
    useEffect(() => {
        findProductWithCategory(paramsCid).then(res => {
        setProducts(res.data.result)
      })
    }, [])

  return (
    <>
    <CustomerNavbar/>
    <Category />
      <div className="container">
        <div className="col-12 ">
          <hr />
        </div>
        <div className="buttons d-flex justify-content">
          <div className="container">
            <div className="row">
              {products.map((item, index) =>
                <div key={index} className="col-md-3 mt-4">
                  <div key={item.productId} className="card h-150 text-center p-4">
                    <img src={item.file} className="card-img-top" alt={item.productName} height="250px" />
                    <div className="card-body">
                      <h5 className="card-title mb-1">{item.productName}</h5>
                      <p className="card-text mb-1"> <strong>Price: {item.productPrice} TL</strong></p>
                      <hr />
                      <NavLink to={"/productDetail/" + item.productId}>
                        <div className='d-grid'>
                          <button className="btn btn-dark btn-sm" type="button"><i className="bi bi-info-circle"></i> Detail</button>
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

export default ProductCategory