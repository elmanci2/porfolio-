import React, { useEffect, useRef, useState } from 'react'
import './projects.scss'
import Subtitle from '../../miniComponents/subtitle/Subtitle'
import { maytabs } from '../../../constant/constant'
// may project import  
import mayProjects from '../../../api/mayProjects.json'

const Projects = () => {

  // states 
  const [filter, setFilter] = useState(mayProjects[0].projects);
  const [active, setActive] = useState(0);

  // fuctiones
  const handelfilter = (item) => {
    if (item == 'all') {
      setFilter(mayProjects[0].projects)
    } else {
      const projectFilter = mayProjects[0].projects.filter(e => e.section.includes(item))
      setFilter(projectFilter)
    }
  }

  return (
    <section id='projects' >
      <Subtitle title='my projects' subtitle='some of my most recent projects' />

      <div className="project__container">
        <div className="taps__idicator">
          <ul>
            {
              maytabs.map((tab, i) =>
                <li className={`menu__active  ${active === i ? 'active__tabs' : null} `} onClick={() => {
                  setActive(i)
                  handelfilter(tab)
                }}> {tab} </li>
              )
            }
          </ul>
        </div>

        <div className="tabs__intem__conted">

          {
            filter.map(item =>
              <div   className={`iem__coar__container  `}>

                <a className='linker' href={item.ur} target="_blank" rel="noopener noreferrer">
                  <div className='project__image__conted'>
                    <img src={item.img} alt={item.name} />
                  </div>
                </a>
                <div className="card__project__info">
                  <h2>{item.section} </h2>
                  <p>{item.description} </p>
                </div>

                <div className="skills__logo">
                  {
                    item.skill.map(item =>
                      <i className={item.logo} >  </i>
                    )
                  }
                </div>

                <div className="buttoms">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i class='bx bx-link-external'></i>  live demo   </a>

                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i class='bx bxl-github'>
                    </i> code</a>
                </div>

              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Projects