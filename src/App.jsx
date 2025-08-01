import React from 'react'
import './index.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'
import Work from './components/Work'
import ContactUs from './components/ContactUs';
import Companiesbar from './components/Companiesbar';

const App = () => {
  return (
  <>
    {/* Header Content Area */}
    <Navbar />
    <Hero />

    {/* Highlights Grid Layout */}
    {/* <Highlights /> */}
    <Companiesbar />

    {/* Work Samples area */}
    <Work />
    
    {/* Testimonials Section */}
    <Testimonials />
    
    {/* Contact Us */}
    <ContactUs />
  </>
  )
}

export default App