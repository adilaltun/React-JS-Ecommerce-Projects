import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Register from '../components/customercomponents/Register'
import Home from '../components/Home'
import AdminLogin from '../components/admincomponents/AdminLogin'
import CustomerLogin from '../components/customercomponents/CustomerLogin'
import Dashboard from '../components/Dashboard'
import ProductImage from '../components/admincomponents/ProductImage'
import CustomerHomePage from '../components/customercomponents/CustomerHomePage'
import AdminCategory from '../components/admincomponents/AdminCategory'
import ProductCategory from '../components/customercomponents/ProductCategory'
import CustomerOrder from '../components/customercomponents/CustomerOrder'
import ProductDetail from '../components/customercomponents/ProductDetail'
import AdminOrder from '../components/admincomponents/AdminOrder'
import Category from '../components/Category'
import CustomerSecurity from '../security/CustomerSecurity'
import AdminProduct from '../components/admincomponents/AdminProduct'





export const routes = 

<BrowserRouter>
<ToastContainer/>
<Routes>
    
    <Route path='/' element={<CustomerLogin/>} />
    <Route path='/home' element={<Home/>}/>

    <Route path='/adminCategory' element={<AdminCategory/>}/>
    <Route path='/adminLogin' element={<AdminLogin/>}/>
    <Route path='/adminOrder' element={<AdminOrder/>}/>    
    <Route path='/adminProduct' element={<AdminProduct/>}/>    
    <Route path='/productImage/:productId' element={<ProductImage/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    
    <Route path='/customerHomePage' element={<CustomerHomePage/>}/>
    <Route path='/customerLogin' element={<CustomerSecurity  component={<CustomerLogin/>}/>}/>
    <Route path='/customerOrder/:userId' element={<CustomerOrder/>}/>
    <Route path='/category/:categoryId' element={<ProductCategory/>}/>
    <Route path='/productDetail/:productId' element={<ProductDetail/>}/>
    <Route path='/register' element={<Register/>} />



    
</Routes>
</BrowserRouter>
