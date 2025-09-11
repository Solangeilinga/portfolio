import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificates from './components/Certificates';
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 bg-slate-900">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
