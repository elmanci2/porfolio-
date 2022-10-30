import React from 'react'
import './subtitle.scss'

const Subtitle = ({ title, subtitle }) => {
    return (
        <div className='subtitle__conted' >
            <div className="title__conted">
                <h1 className='title1' > {title} </h1>
                <h1 className='title2'  > {title} </h1>
            </div>
            <h5> {subtitle} </h5>
        </div>
    )
}

export default Subtitle