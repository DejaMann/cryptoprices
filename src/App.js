import {Route, Routes} from 'react-router-dom'
import Main from "./pages/Main"
import Currencies from "./pages/Currencies"
import Price from "./pages/Price"
import './App.css';
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="navbar">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price/:symbol/" element={<Price/>}/>
      </Routes>
    </div>
  );
}
// ROUTING IN THE FRONT END 
export default App;
