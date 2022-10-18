import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { control } from '../../configurations/utils'
import { ProductInfo } from '../../models/IProduct'
import { ProductImageDetail } from '../../models/IProductImage'
import { orderSave } from '../../services/OrderService'
import { imageList } from '../../services/ProductImageService'
import { findImageWithProductId } from '../../services/ProductService.'
import CustomerNavbar from './CustomerNavbar'

function ProductDetail() {

    const navigate = useNavigate()
    const { productId } = useParams()
    const paramsPid = Number(productId)
    const [list, setList] = useState<ProductImageDetail[]>([])
    const [bigImage, setBigImage] = useState('')

    const [productList, setProList] = useState<ProductInfo[]>([])

    const userIDs = control()?.userId
    const paramsUserID = Number(userIDs)

    const addToBasket = (item: ProductInfo) => {
        orderSave(paramsUserID, item.productId)
    }

    useEffect(() => {
        imageList(paramsPid).then(res => {
            const stData = res.data.result as ProductImageDetail[]
            setList(stData)
            setBigImage(stData[0].file)
        })

        findImageWithProductId(paramsPid).then(res => {
            setProList(res.data.result)
        })

    }, [])

  return (
    <>
        <CustomerNavbar />       
        <div>
                {productList.map((itm, indeks) =>
                    <div className="container py-3">
                        <div className="row py-4">
                            <div key={indeks} className="col-md-6">
                                <img src={bigImage} alt={itm.productName} height="400px" width="400px" />
                                <div>
                                    {list.map((item, index) =>
                                        <img key={index} role='button' onClick={() => setBigImage(item.file)} src={item.file[0]} className="img-thumbnail m-1" />
                                    )}
                                </div>
                                
                            </div>
                            <div className="col-md-6 py-5">
                                <p className="h1 mb-3"><ins>{itm.productName}</ins></p>
                                <p className="h2 mb-3">{itm.productPrice} TL</p>
                                <p className='h4 mb-3'> <em> {itm.productDetail} </em></p>
                                <button onClick={() => addToBasket(itm)} className='btn btn-dark px-3 py2'><i className="bi bi-basket-fill"></i> Buy Now</button>
                                <button onClick={(evt) => navigate('/customerHomePage')} className='btn btn-outline-danger btn-sm ms-2 px-3 py-2'><i className="bi bi-backspace-fill"></i> Back to Home Page</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

    </>
  )
}

export default ProductDetail