 import './App.css';
import AllRoutes from './Routes/AllRoutes';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
