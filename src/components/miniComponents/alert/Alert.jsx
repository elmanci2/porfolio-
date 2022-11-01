import React, { useState } from 'react'

const Alert = ({ masaje }) => {


    return (
        <div className='alert__conatiner'>
            <span> {masaje} </span>
        </div>
    )
}

export default Alert