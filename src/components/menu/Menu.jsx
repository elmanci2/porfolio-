import React, { useState } from 'react'
import './menu.scss'
import logo from '../../assets/img/logo.png'
import { menuItem } from '../../constant/constant'
import Music from '../miniComponents/music/Music'



const Menu = () => {

    const [menu, setMenu] = useState(false);

    return (
        <>
            <main className="menu__conted">

                <nav className="menu__conted__item">
                    <div className="menu__logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="menu__movile" onClick={() => setMenu(!menu)} >
                        <div className="muvile__icon">
                            {
                                menu ? <i class='bx bx-x'></i> : <i class='bx bx-menu-alt-right'></i>
                            }

                        </div>
                    </div>

                    <ul className='menu__item' >
                        {
                            menuItem.map(item => <div className='menu__items'>
                                <div className="item__active"></div>
                                <a href={`#${item}`}> {item} </a>
                            </div>)
                        }

                    </ul>

                    <Music />

                </nav>
            </main>

            <div className="menu__movile__conted" onClick={() => setMenu(!menu)} style={menu ? { width: '100%' } : null} >
                <ul className='menu__item' >
                    {
                        menuItem.map(item => <div className='menu__items'>
                            <div className="item__active"></div>
                            <a href={`#${item}`}> {item} </a>
                        </div>)

                    }

                </ul>
            </div>
        </>
    )
}

export default Menu