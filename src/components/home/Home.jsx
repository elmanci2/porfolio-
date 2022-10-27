import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Inicio from './home/Inicio'
import Memories from './memories/Memories'
import Projects from './Projects/Projects'
import Redes from './redes/Redes'

const Home = () => {
    return (
        <>
            <Redes />
             <Inicio/>
            <About />
            <Projects />
            <Memories />
            <Contact />
        </>
    )
}

export default Home