import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ProductImageDetail } from '../../models/IProductImage'
import { imageAdd, imageDelete, imageList } from '../../services/ProductImageService'
import AdminNavbar from './AdminNavbar'

function ProductImage() {

const { productId } =  useParams()
const paramsProductId = Number(productId)
const [images, setImages] = useState<ProductImageDetail[]>([])
useEffect(() => {
    imageUpdate(paramsProductId)
}, [])

//image update
const imageUpdate = ( productId: number ) => {
    imageList(productId).then( res => {
        setImages(res.data.result as ProductImageDetail[])
    })
}

//image delete
const fncImageDelete = ( imageId: number ) => {
    imageDelete(imageId).then( res => {
        if (  res.data.status  ) {
            imageUpdate(paramsProductId)
        }
    })
}

//image add
const onChangeFile = (evt:any) => {
    if (evt.target.files.length < 1) {
        return;
    }
        
    for (let i = 0; i < evt.target.files.length; i++) {
        const file = evt.target.files[i];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            const type = file.type
            if ( type === 'image/png' || type === 'image/jpeg' ) {
                if ( file.size < 1000000 ) {
                        imageAdd(paramsProductId, fileReader.result as string).then( res => {
                            imageUpdate(paramsProductId)
                    })
                }
            }
        }
        fileReader.readAsDataURL(file);
    }
}

return (
    <>

    <div className="text-bg-dark text-center p-2 mb-2">Admin Image Adding Page</div>
    <NavLink to={'/adminProduct'} className='btn btn-danger mb-2' ><i className="bi bi-backspace"></i> Go to Product Page</NavLink>
    <div className='row'>
    <div className='col-sm-12'>
        <h5 className="text-white bg-dark p-2">Image Add</h5>
        <input type='file' multiple onChange={onChangeFile} ></input>
    </div>
    
    
    </div>
    <hr></hr>
    <h5 className="text-white bg-dark p-2">Image List</h5>
    <div className='row'>
        { images.map( (item, index) =>
            <div key={index} className='col-md-12 col-lg-4 mb-4 mb-lg-0'>
                <div className="card m-1">
                    <img src={item.file} className="card-img-top" style={{ height: 350, }} />
                    <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                        <a onClick={() => fncImageDelete(item.imageId)} role='button' className="btn btn-danger" style={{ position: 'absolute', bottom: 1, left: 1 }}>Delete</a>
                    </div>
                    </div>
                </div>
          </div>
        )}
    </div>
    </>
  )
}

export default ProductImage