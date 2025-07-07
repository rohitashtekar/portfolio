import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/variables.css';
import './styles/global.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SecondClinic from './projects/SCApp';
import Chatbot from './projects/Chatbot';
import CoffeeOrder from './projects/CoffeeOrder';
import About from './pages/About';
import Terms from './pages/Terms';
import Skills from './pages/Skills';
import ScrollToTop from './utils/ScrollToTop';
import Resume from './components/Resume';

function App() {

  return (
    <>  
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/about' element={<About />} />
            <Route path='/terms' element={<Terms />} />

            {/* Projects */}
            <Route path='/projects/secondclinic' element={<SecondClinic />} />
            <Route path='/projects/chatbot' element={<Chatbot />} />
            <Route path='/projects/coffeeorder' element={<CoffeeOrder />} />

            {/* Resume */}
            <Route path='/resume' element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
