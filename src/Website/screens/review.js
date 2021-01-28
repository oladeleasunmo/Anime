import React , {useState} from 'react'
import Animes from '../component/animes'
import {Link} from 'react-router-dom'
import Jumbotron from '../component/Jumbotron'
import Meta from '../component/meta'

const Reviews = () => {

    const [animesort , setAnime] = useState(Animes)
    const [toggle , setToggle] = useState(false)

    console.log(animesort)
    const handleClickSort = (e) => {
        e.preventDefault()
        if (e.target.id === "rating") {
            let ratingsort = Animes.sort((a,b) => b.scores - a.scores )
            setAnime(ratingsort)
            console.log(ratingsort)
        }else if(e.target.id === 'released') {
            let datesort = Animes.sort((a,b) => b.relesed  - a.relesed )
            setAnime(datesort)
            console.log(datesort)
        }else if(e.target.id === 'length') {
            let lengthsort = Animes.sort((a,b) => (b.duration * b.episodes) - (a.duration * a.episodes) )
            setAnime(lengthsort)
            console.log(lengthsort)
        }else if(e.target.id === 'episodes') {
            let episodessort = Animes.sort((a,b) => b.episodes - a.episodes )
            setAnime(episodessort)
            console.log(episodessort)
        }else if(e.target.id === 'random') {
            let randomarray = []
            for(let i=0; i < 4 ; i++){
                let random = Math.round( (Math.random() * 100) % (Animes.length - 1) )
                    randomarray.push(random)
            }let randomsort = []
            console.log(randomarray)
            randomarray.map((num) => randomsort.push(Animes[num]))
            setAnime(randomsort)
            console.log(randomsort) 
        }else {setAnime(Animes)}
    }

    const handleClick = (e) => {
        setToggle(!toggle)
    }
 
    console.log(animesort)

    return (
        <>
        <Meta title="review page" />
            <div className="sort-section">
                <div className="container">
                    <div className>
                        <div className="row j-c-c">
                            <div id="rating" className="btn" onClick={handleClickSort} >ratings</div>
                            <div id="released" className="btn" onClick={handleClickSort} >relased</div>
                            <div id="length" className="btn" onClick={handleClickSort} >length</div>
                            <div id="episodes" className="btn" onClick={handleClickSort} >Episodes</div>
                            <div id="random" className="btn" onClick={handleClickSort} >random</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row j-c-c">
                    { animesort.map((anime , i) => 
                        <div className="col-lg-3 col-md-4 col-sd-6 col-12">
                            <div style={{ backgroundImage: `url(${anime.image})` }} className="review-img">
                                <div className="review-content">
                                    <div className="review-overlay"></div>
                                    <div className="review-text">
                                        <h5>{anime.name}</h5>
                                        <div className="row j-c-c">
                                            <p className="mlr-auto">
                                                scores<br/>{anime.scores}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    )}
                </div>
            </div>
        </>
    )
}
export default Reviews