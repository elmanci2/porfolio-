
import React from 'react'
import './projects__home.scss'

const Projects__home = () => {
    return (
        <section className='init__section__project__conted' >

            <div className="item__projects">
                <h2> Dashboard UI </h2>
                <p> control panel to register and manage your business  </p>
                <div className="init__whatsh">
                    <a href=""> watch Project  <i class='bx bx-right-arrow-alt'></i> </a>
                </div>
            </div>

            <div className="item__projects">
                <h2>ui design notes app </h2>
                <p> a platform to create edit and manage your notes in a very easy way </p>
                <div className="init__whatsh">
                    <a href="">  watch Project  <i class='bx bx-right-arrow-alt'></i> </a>
                </div>
            </div>


            <div className="item__projects">
                <h2>music app platform </h2>
                <p> incredible design of a music platform</p>
                <div className="init__whatsh">
                    <a href="">  watch Project  <i class='bx bx-right-arrow-alt'></i> </a>
                </div>
            </div>

        </section>
    )
}

export default Projects__home