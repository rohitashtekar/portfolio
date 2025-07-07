import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const MainLayout = () => {
  return (
    <>
        <Navbar/>
          <main id='main'>
            <Outlet/>
          </main>
        <Footer/>
    </>
  )
}

export default MainLayout