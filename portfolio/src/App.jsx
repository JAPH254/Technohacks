import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Nav/Navbar'
import About from './components/about/about'
import Experinece from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contacts from './components/contacts/contacts'
import Footer from './components/Footer/Footer'
import './components/Header/CTA'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Experinece />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contacts />
    <Footer />
    </>
  )
}

export default App
