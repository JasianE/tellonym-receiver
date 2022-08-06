import React from 'react'

const Tell = ({message, date}) => {
    return(
        <div>
            <h1>{message}</h1>
            <h2>{date}</h2>
        </div>
    )
}

export default Tell