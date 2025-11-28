import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificates from './components/Certificates'
import Experiences from "./components/Experiences";
import "./index.css";
import { SectionDivider } from './components/SectionDivider';

export default function App() {
  return (
    <div className="min-h-screen text-slate-100  bg-slate-900">
      <Header />
      <main className="container mx-auto px-4 ">
        <section id="hero">
          <Hero />
        </section>
        <SectionDivider variant="default" />
        <section id="about">
          <About />
        </section>
        <SectionDivider variant="default" />
        <section id="experiences">
          <Experiences />
        </section>
        <SectionDivider variant="default" />
        <section id="skills">
          <Skills />
        </section>
        <SectionDivider variant="default" />
        <section id="projects">
          <Projects />
        </section>
        <SectionDivider variant="default" />
        <section id="certificates">
          <Certificates />
        </section>
        <SectionDivider variant="default" />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
