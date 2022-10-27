import React, { useState } from 'react'
import './music.scss'
// music import 

import musica from '../../../assets/music/music.mp3'
import { useRef } from 'react';
import { useEffect } from 'react';

const Music = () => {

    const [music, setMusic] = useState(false);
    const control = useRef()

    const player = () => {
        setMusic(!music)
        if (music) {
            control.play()
        } else {
            control.pause()
        }
    }

    return (
        <div className='music__container' >

            <div className="music__player" onClick={player} >
                {
                    music ? <i class='bx bx-pause'></i> : <i class='bx bx-play'></i>
                }
            </div>
            {
                music ? <div className="music__idicator__paly">
                    <div className="playing">
                        <div className="rect1" />
                        <div className="rect2" />
                        <div className="rect3" />
                        <div className="rect4" />
                        <div className="rect5" />
                    </div>
                </div> : null
            }

            <audio ref={control} src={musica}></audio>

        </div>
    )
}

export default Music