import Navbar from './navbar';
import Home from './home';
import About from './about';

function App() {


  return (
    <div className="App">
      <Navbar />
      <div className="content">
          <Home />  
          <About />
      </div>
    </div>
  );
}

export default App;
