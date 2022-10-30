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