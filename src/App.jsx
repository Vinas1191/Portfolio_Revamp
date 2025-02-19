import React from 'react'
import './index.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Work from './components/Work'
import ContactUs from './components/ContactUs';

const App = () => {
  return (
  <>
    {/* Header Content Area */}
    <Navbar />
    <Hero />

    {/* Highlights Grid Layout */}
    <Highlights />

    {/* Work Samples area */}
    <Work />

    {/* Contact Us */}
    <ContactUs />
  </>
  )
}

export default App