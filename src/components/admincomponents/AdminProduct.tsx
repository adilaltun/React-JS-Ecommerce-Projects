import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { CategoryInfo } from '../../models/ICategory'
import { ProductInfo } from '../../models/IProduct'
import { categoryList } from '../../services/CategoryService'
import { productDelete, productList, productSave } from '../../services/ProductService.'
import AdminNavbar from './AdminNavbar'

function AdminProduct() {

    const { pid } = useParams()
    const numPid = Number(pid)
    const [productName, setProductName] = useState('')
    const [cid, setCid] = useState('')
    const numCid = Number(cid)

    const [productPrice, setProductPrice] = useState('')
    const numPrice = Number(productPrice)

    const [productDetail, setProductDetail] = useState('')
  
    const [products, setProducts] = useState<ProductInfo[]>([])
  
    const [categories, setCategories] = useState<CategoryInfo[]>([])
  
    useEffect(() => {
      productUpdate(numPid)

     
      //category list
      categoryList().then(res => {
        const list = res.data.result
        setCategories(list)
      })
    }, [])
    
     //product save
     const fncSave = () => {
      productSave(numPid,numCid,productName,productDetail,numPrice).then(res => {
        productUpdate(numPid)
      })
    }
  
  
    //product delete
    const fncDelete = (pid: number) => {
      productDelete(pid).then(res => {
        if (res.data.status) {
          productUpdate(numPid)
        }
      })
    }
  
    //product list
    const productUpdate = (pid: number) => {
      productList().then(res => {
        const proList = res.data.result
        setProducts(proList)
      })
    }



  return (
    <>
    <AdminNavbar/>
    <div className='row'>
    <div className='d-flex col-sm-1 p-2'>
            <button type="button" className="btn btn-dark p-1 mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className='bi bi-plus-lg'></i> Add Product</button>
    </div>
    <div className="col-sm-11 text-bg-dark text-center p-4 mb-3">Admin Product Page</div>
    </div>
    <div className="row">
            <div>
              <table  className="table table-dark table-striped table-hover mb-0">
                <thead>
                  <tr>
                    <th >Product ID</th>
                    <th>Product Name</th>
                    <th >Category</th>
                    <th >Price</th>
                    <th >Detail</th>
                    <th className='text-end'>Add Photo or Delete </th>
                  </tr>
                </thead>
                {products.map((item, index) =>
                  <tbody key={index}>
                    <tr>
                      <td>{item.productId}</td>
                      <td>{item.productName}</td>
                      <td>{item.categoryName}</td>
                      <td>{item.productPrice}TL</td>
                      <td>{item.productDetail}</td>
                      <td className='d-flex justify-content-end'>
                        <NavLink to={'/productImage/' + item.productId} className='btn btn-success btn-sm me-1  text-center'><i className="bi bi-file-earmark-plus-fill"></i> Add Photo</NavLink>
                        <a onClick={() => fncDelete(item.productId)} role='button' className="btn btn-danger btn-sm" ><i className="bi bi-archive"></i> Delete</a>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
          <div className='row d-flex justify-content-end'>
            <div className='col-sm-6 text-end'>
              <form onSubmit={fncSave}>
                <div className='mb-3'>
                </div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Product</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <input value={productName} onChange={(evt) => setProductName(evt.target.value)} required type='text' placeholder='Product Name' className='form-control mb-1' />
                        <select value={cid} onChange={(evt) => setCid(evt.target.value)} className="form-select mb-1">
                          <option selected>Select Category</option>
                          {categories.map((item, index) =>
                            <option key={index} value={item.categoryId}>{item.categoryName}</option>
                          )}</select>
                        <input value={productPrice} onChange={(evt) => setProductPrice(evt.target.value)} required type='text' placeholder='Price' className='form-control mb-1' />
                        <textarea value={productDetail} onChange={(evt) => setProductDetail(evt.target.value)} placeholder='Description' className='form-control mb-2' id="exampleFormControlTextarea3" />
                      </div>
                      <div className="modal-footer">
                        <button type='submit' className='btn btn-success'>Save</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
    </>
  )
}

export default AdminProduct