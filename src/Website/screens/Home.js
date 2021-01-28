import React from 'react'
import Jumbotron from '../component/Jumbotron'
import Animes from '../component/animes'

const Home = () => {
        let randomarray = []
        for(let i=0; i < 4 ; i++){
            let random = Math.round( (Math.random() * 100) % (Animes.length - i) )
                randomarray.push(random) }
        let randomsort = []
        randomarray.map((num) => randomsort.push(Animes[num]))
        console.log(randomsort)

        console.log(randomsort)
    return (
        <>
            <div>
                <Jumbotron/>
            </div>
            <section>
                <div className="container">
                    <div className="row">
                        {randomsort.map((anime , i ) => 
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div>
                                    <img src={anime.image} className=""/>
                                </div> 
                            </div>   
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home