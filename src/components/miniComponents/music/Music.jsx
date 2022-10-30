import React, { useEffect, useRef, useState } from "react";
import "./music.scss";
// music import

import { musicList } from "../../../constant/constant";
import { motion } from "framer-motion";

const Music = () => {
    const [music, setMusic] = useState(false);
    const [next, setNext] = useState(0);

    const playing = useRef();
    console.log(next);

    const audio = playing.current; // audi seletor

    const play = () => {
        audio.play();
        setMusic(!music);
    };

    const pause = () => {
        audio.pause();
        setMusic(!music);
    };

    const nextmusic = () => {
        if (next === musicList.length -1  ) {
            setNext(0);
        } else {
            setNext(next + 1);
        }
    };

    return (
        <div className="music__container">
            <motion.dvi initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} className="music__player" onClick={music ? pause : play}>
                {music ? (
                    <motion.i

                        className="bx bx-pause"
                    ></motion.i>
                ) : (
                    <motion.i
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bx bx-play"
                    ></motion.i>
                )}
            </motion.dvi>

            <audio
                src={musicList[next]}
                loop
                autoPlay
                ref={playing}
                className="music__idicator"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="music__idicator__paly"
            >
                <div className="playing">
                    <div className="rect1" />
                    <div className="rect2" />
                    <div className="rect3" />
                    <div className="rect4" />
                    <div className="rect5" />
                </div>
            </motion.div>
            {
                music ? (
                    <motion.i
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bx bx-skip-next"
                        onClick={nextmusic}
                    ></motion.i>
                ) : null
            }
        </div >
    );
};

export default Music;
