import HomeNavbar from '../navbars/HomeNavbar'

function Home() {
  return (
    <>
    <HomeNavbar/>
    <br />
    <br />
    <br />
    <h1 className='text-center'>HiçbiriBurada Login Page</h1>
    <br />
    <br />
    <br />
    <p className='h2 text-center mb-3'>Please select the login action on the upper menu</p>
    <br />
    <br />
    <p className='h4 text-center mb-3'>For Admin Login - Email: admin@mail.com and Password: 12345</p>
    <p className='h4 text-center mb-2'>For Customer Login - Email: zehra@mail.com and Password: 12345</p>
    
    </>
  )
}

export default Home