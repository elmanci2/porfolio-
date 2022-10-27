import React from 'react'
import './inicio.scss'
import Projects__home from './Init_proget/Projects__home'

const Inicio = () => {
    return (
        <section className='inicio' >
            <div className="name__conted">
                <span className="blur"></span>
                <div className="tex__name__conted">
                    <h1 className="name2">  andres <span>m</span>ancilla </h1>
                    <h1 className="name">  <span>a</span>ndres <span>m</span>ancilla </h1>
                </div>
                <h2 className="profecion "> front end developer </h2>
                <p> front-end web developer with knowledge in react js , vue js , Angular , mogo db , express </p>

            </div>

            <Projects__home />
        </section>
    )
}

export default Inicio