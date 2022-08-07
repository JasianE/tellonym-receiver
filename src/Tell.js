import React from 'react'

const Tell = ({message, date}) => {
    return(
        <div className = 'tellContainer'>
            <h1>{message}</h1>
            <h2>{date ? date.split('GMT')[0] : null}</h2>
        </div>
    )
}

export default Tell