import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Landing from './Landing.jsx'
import Brands from './Brands.jsx'
import Cards from './Cards.jsx'
import Latest from './Latest.jsx'
import LatestTwo from './LatestTwo.jsx'
import Section from './Section.jsx'
import Testimoials from './Testimoials.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Landing />
    <Brands />
    <Cards />
    <Section />
    <Latest />
    <LatestTwo />
    <Testimoials />
    <Footer />
  </React.StrictMode>,
)
