// import { Component} from 'react';


import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { HeaderDev, Menu, Footer } from "./components";

function App() {


  return (
    
    <div className="App">
      <Router>
        <header className="App-header">
          <HeaderDev/>
        </header>
        <main>
          <Menu/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
