import Basics from './basics'
import img from './assets/IconScale.png'
import img2 from '../src/assets/IconTopQuality.png'
import img3 from './assets/IconScale.png'
import Props from './props'
import {Link} from 'react-router-dom'
import courses from './courses'

function Component() {

    const naira = <span>₦ </span>
    const v = <p>Our course content is designed to teach this and lots more:</p>
    const  required = <p>No credit card required</p>
    const headtitle = <h1>Our Current Courses</h1>
    const headexplained = <p>We are currently accepting registration to enroll in the courses below</p>
    
  return (
      <>
        <div className="body">
            <div className="bg-body-half"></div>
            <div className="head-section">
                <div className="framer">
                    <div>
                        {headtitle}
                        {headexplained}
                    </div>
                </div>
            </div>
            <div>
                <div className="framer">
                    <div className="j-c-c frame">
                        {courses.map((course , i ) => 
                            <div className="fr">
                                <div className="card">
                                    <div className="card-head">
                                        <h2>{course.name}</h2>
                                        <div className="frame j-c-b">
                                            <h3>{naira}<span>{course.price.toLocaleString()}</span></h3>
                                            <h3 className="grey">{course.duration}</h3>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="text">
                                            {v}
                                            <p>{course.details}</p>
                                        </div>
                                        <div className="button">
                                            <Link to={`/course/${course.name}`}>curriculum</Link>
                                            {required}
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        )}
                    </div>
                </div>
            </div>
            < Basics />
            {/* <div className="card-section">
                <div className="framer">
                    <div className="frame j-c-c">
                        {product.map((product , i) =>
                            <div className="fr" key={i}>
                                < Props product = {product} /> 
                            </div> 
                        )}
                    </div>
                </div>
            </div>         
            <div>
                <Link to="/event">Go to events</Link>
            </div> */}
        </div>
      </>
  )
}
export default Component