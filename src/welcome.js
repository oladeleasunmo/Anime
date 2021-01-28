import React from 'react'
import Hooks from './tutorials/Hooks'


const Welcome = ({match}) => {

    const name = match.params.name

    return (
        <>
            <h1 className="center-text">welcome {name} you have sucessfully registered</h1>
        </>
    )
}
export default Welcome