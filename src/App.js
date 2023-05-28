import React from 'react';
import './styles/App.css'
import Header from "../../detailing-front/src/components/Header";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "../../detailing-front/src/components/AppRouter";
import Footer from "../../detailing-front/src/components/Footer";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <AppRouter/>
          <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
