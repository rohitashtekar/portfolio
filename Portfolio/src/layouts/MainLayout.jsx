import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const MainLayout = ({ isDark, setIsDark }) => {
  return (
    <>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
          <main id='main'>
            <Outlet/>
          </main>
        <Footer/>
    </>
  )
}

export default MainLayout