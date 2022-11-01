import React from 'react'
import Subtitle from '../../miniComponents/subtitle/Subtitle'
import './about.scss'
import me from '../../../assets/img/andres.jpg'
import { skills } from '../../../constant/constant'


const About = () => {
  return (
    <section id='about' >
      <Subtitle title='about me ' subtitle='Get to know me better' />

      <div className="center">
        <div className="may__info__coted">

          <div className="info__text__conted">

            <div className="info__mini__cardt">
              <div className="item__mini__cardt">
                <h6> <i className='bx bxs-briefcase-alt-2'></i>   proyectos </h6>
                <span> 20 </span>
              </div>
              <div className="item__mini__cardt">
                <h6>   <i className='bx bxs-book' ></i>studios </h6>
                <span>  4 years </span>
              </div>
              <div className="item__mini__cardt">
                <h6>  <i className='bx bx-trending-up'></i> experiencia </h6>
                <span> 1 year</span>
              </div>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis.</p>
            <div className="skills__conted">
              <h4>skills</h4>
              <div className="skills__item">
                <ul>
                  {skills.map(item => <li> {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="imagen__conted">
            <img src={me} alt="" />
          </div>

        </div>

      </div>


    </section>
  )
}


export default About