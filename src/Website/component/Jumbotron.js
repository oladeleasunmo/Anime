import React from 'react'
import {Link} from 'react-router-dom'
import Reviews from '../screens/review'

const Jumbotron = () => {
    return(
        <>
        <section className="jumbotron">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="col-md-8 jumbotron-text">
                    <h2>Welcome to Anime</h2>
                    <p className="mb-5">Your number one place for anime reviews</p>
                    <Link to='/Reviews'>latest-anime</Link>
                </div>
            </div>
        </section>
        </>
           
    )
}
export default Jumbotron