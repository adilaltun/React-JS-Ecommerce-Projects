import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CategoryInfo } from '../models/ICategory'
import { categoryList } from '../services/CategoryService'
import CustomerNavbar from './customercomponents/CustomerNavbar'

function Category() {

    const [categories, setCategories] = useState<CategoryInfo[]>([])

    useEffect(() => {
      categoryList().then(res => {
            setCategories(res.data.result)
        })
    }, [])
    

    return (
      <>
      <div className='container'>
        {categories.map((item, index) =>
               <NavLink to={"/category/" + item.categoryId}>
                  <button key={index} className='btn btn-dark me-1 ' >{item.categoryName}</button>
                </NavLink>
              )} 
    </div>
    </>
  )
}

export default Category