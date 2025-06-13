import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav/NavBar';
import Home from './pages/HomePage';
import About from './pages/About';
import NotFound from "./pages/NotFoundPage"
import Results from './pages/ResultsPage';


function App() {
  return  (
    <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path="/results" element={<Results />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )

}

export default App;


