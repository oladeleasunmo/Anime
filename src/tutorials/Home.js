import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1 className="center-text">THis is my home</h1>
            <div>
                <div className="card">
                    <h2>Course content</h2>
                    <ul>
                        <li><Link to={'/lifecycle'}>Component lifecycle</Link></li>
                        <li><Link to={'/Hooks'}>React Hooks</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Home