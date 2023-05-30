import React from 'react';
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";

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
