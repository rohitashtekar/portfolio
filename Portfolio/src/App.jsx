import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/variables.css'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/terms' element={<Terms/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
