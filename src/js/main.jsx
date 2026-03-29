import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Card from './components/Card';
import Jumbotron from './components/Jumbotron';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <div className="container">
    <Jumbotron/>
    <div className="row">
    <div className="row justify-content-center">
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <Card/>
  </div>
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <Card/>
  </div>
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <Card/>
  </div>
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <Card/>
  </div>
</div>
    </div>
    </div>
    <Footer/>
  </React.StrictMode>
)
