import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryInfo } from '../../models/ICategory'
import { categoryDelete, categoryList, categorySave } from '../../services/CategoryService'
import AdminNavbar from './AdminNavbar'

function AdminCategory() {

    const{categoryId} = useParams()
    const numId = Number(categoryId)

    const [categoryName, setCategoryName] = useState('')
    const [categories, setCategories] = useState<CategoryInfo[]>([])

    useEffect(() => {
      categoryUpdate(numId)
    }, [])

    //category save
    const fncSave = () => {
      categorySave(numId, categoryName).then(res => {
        categoryUpdate(numId)
      })
    }

    //category delete
    const fncDelete = (categoryId: number) => {
      categoryDelete(categoryId).then(res => {
        if (res.data.status) {
          categoryUpdate(numId)
        }
      })
    }

    //category list
    const categoryUpdate = (categoryId: number) => {
      categoryList().then(res => {
      const datas = res.data.result
      setCategories(datas)
      })
    }


  return (
    <>
      <AdminNavbar />
      <div className='row'>
      <div className='col-sm-1 d-flex'>
          <button type='button' className='btn btn-dark p-1 mb-3' data-bs-target="#staticBackdrop" data-bs-toggle="modal" ><i className='bi bi-plus-lg'></i> Add Category </button>
        </div>
      <div className="col-sm-11 text-bg-dark text-center p-3 mb-3">Admin Category Page</div>        
        <table className="table table-dark table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Number of Category</th>
            <th scope="col">Category ID</th>
            <th scope="col">Category Name</th>
            <th scope="col">Category Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, index) =>
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className='text'>{item.categoryId}</td>
                  <td>{item.categoryName}</td>
                  <td className='d-flex'>                
                    <a onClick={() => fncDelete(item.categoryId)} role='button' className="btn btn-danger btn-sm"><i className="bi bi-archive"></i> Delete</a>
                  </td>
          </tr>
          )}
          </tbody>
        </table>
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
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Add New Category</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <input value={categoryName} onChange={(evt) => setCategoryName(evt.target.value)} required type='text' placeholder='Category Name' className='form-control ' />
                    </div>
                    <div className="modal-footer">
                      <button type='submit' className='btn btn-success'><i className="bi bi-box-arrow-down"></i> Save</button>
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><i className="bi bi-x-circle"></i> Close</button>
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

export default AdminCategory