import React from "react"
import Navbar from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return ( 
      <div className="container">
         <Navbar />
         <MainContent />
         <Footer />
      </div>
   );
}
  
export default App;