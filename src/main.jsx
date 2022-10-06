import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/index'
import Footer from './components/Footer'
import Home from './pages/Home'
import "./styles/main.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
)
