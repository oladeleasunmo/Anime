import Courses from './courses'
import {Link} from 'react-router-dom'
import React from 'react'

const Course = ({match}) => {
    const course = Courses.find(c => c.name == match.params.name)
    const courseswithout = Courses.filter((Courses) => Courses !== course)
    console.log(courseswithout)
    const line = <hr></hr>

    return (

        <>
            <div className="course">
                <section>
                    <div className="framer-copy">
                        <div>
                            <h1 className="head-logo">
                                <Link to={'/'}>Big<span>J</span>ar<span>a</span></Link>
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="curriculum-section">
                    <div className="framer-copy">
                        <div className="curriculum-card">
                            <div className="frame">
                                <div className="c-card-1">
                                    <div className="curriculum-content">
                                        <h4>{course.name}</h4>
                                        {line}
                                        <p>
                                            <b>Duration:</b><span>{course.duration}</span>
                                        </p>
                                        <p>
                                            <b>Cost:</b><span>₦ {course.price.toLocaleString()}</span>
                                        </p>
                                        {line}
                                        <p>{course.details}</p>
                                        {line}
                                        <div>
                                            <Link to={`/`}>Register</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="c-card-2">
                                    <div className="body">
                                        <div className="bg-body-half"></div>
                                        <div className="curriculum-content">
                                            <h4 className="center-text">Curriculum</h4>
                                            {course.curriculum.map((curriculum , i) => 
                                                <div className="toogle">
                                                    <h2 className="frame j-c-b" >
                                                        <span>{curriculum.section}</span>
                                                        <span className="fa fa-angle-down"></span>
                                                    </h2>
                                                    <div>
                                                        <p>
                                                            <ul>
                                                                {curriculum.details.map((detail , i) => 
                                                                    <li>{detail}</li>
                                                                )}
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="c-card-1">
                                    <div className="curriculum-content">
                                        <h4>Other Courses</h4>
                                        {courseswithout.map((course , i ) =>
                                            <p>
                                                <span className="fa fa-certificate"></span>
                                                <span><Link to={`/course/${course.name}`} className="">{course.name}</Link></span>
                                                {line}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Course