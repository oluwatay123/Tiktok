import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaymentPage from "./pages/PaymentPage";
import  PaymentConfirmationPage from "./pages/PaymentConfirmationPage"
import './App.css';

const App =() =>{
  return (
    <Router>
      <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/" element={<PaymentPage/>} />
                 <Route path="/PaymentConfirmationPage" element={<PaymentConfirmationPage/>} />
      <Route/>










        </Routes>
    </Router>
    
    
    
  
    
  
    
    
    
  )
}

export default App;
