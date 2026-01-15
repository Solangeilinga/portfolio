import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificates from './components/Certificates'
import Experiences from "./components/Experiences"
import AnimatedSection from './components/AnimatedSection'
import { SectionDivider } from './components/SectionDivider'
import "./index.css"

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 bg-slate-900">
      <Header />
      <main className="container mx-auto px-4">
        <AnimatedSection id="hero">
          <Hero />
        </AnimatedSection>

        <SectionDivider variant="default" />

        <AnimatedSection id="about">
          <About />
        </AnimatedSection>

        <SectionDivider variant="default" />

        <AnimatedSection id="experiences">
          <Experiences />
        </AnimatedSection>

        <SectionDivider variant="default" />

        <AnimatedSection id="skills">
          <Skills />
        </AnimatedSection>

        <SectionDivider variant="default" />

        <AnimatedSection id="projects">
          <Projects />
        </AnimatedSection>

        <SectionDivider variant="default" />

        <AnimatedSection id="certificates">
          <Certificates />
        </AnimatedSection>

        <SectionDivider variant="default" />

        <AnimatedSection id="contact">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}