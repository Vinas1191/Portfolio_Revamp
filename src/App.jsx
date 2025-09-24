import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'
import Work from './components/Work'
import ContactUs from './components/ContactUs';
import Companiesbar from './components/Companiesbar';
import HeadFirstCaseStudy from './pages/HeadFirstCaseStudy';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Companiesbar />
              <Work />
              <Testimonials />
              <ContactUs />
            </>
          } />
          <Route path="/case-study/head-first" element={<HeadFirstCaseStudy />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App