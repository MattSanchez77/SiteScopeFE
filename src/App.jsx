import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav/NavBar';
import Home from './pages/HomePage';
import About from './pages/About';


function App() {
  return  (
    <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />

    </Routes>
    </>
  )

}

export default App;


