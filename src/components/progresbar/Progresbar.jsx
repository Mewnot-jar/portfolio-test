import React from 'react'
import './progresbar.css'

const Progresbar = ({percent}) => {

    const fillStyle = {
            width: `${percent}`,
    }


    return (
        <div className='bar-container'>
            <div style={fillStyle} className='fill-content'>
                <p>{percent}</p>
            </div>
        </div>
    )
}

export default Progresbar