import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
        </Routes>
      </div>  
    </BrowserRouter>
    
  );
}

export default App;
