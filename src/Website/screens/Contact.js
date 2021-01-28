import React, { useState } from 'react'
import Meta from '../component/meta'

const Contact = () => {

    const [number , setNumber] = useState(150)
    const [textarea , setTextarea] = useState('')

    const handleChange = (e) => {
        if (e.target.id === "textarea") {
            setTextarea(e.target.value)
            let arraytextarea = e.target.value.split('')
                setNumber((150 - arraytextarea.length))
        }
    } 

    return (
        <>
        <Meta title="Contact sexy porn anime here" />
            <section className="form-section contact-section a-1 h-1000">
                <div className="form-section-overlay"></div>
                <div className="container">
                    <div className="col-md-8 col-sd-11 m-auto">
                        <div className="mb-5"></div>
                        <div className="form contact-form">
                            <div className="form-overlay"></div>
                            <form>
                                <div>
                                    <input 
                                        type="text" placeholder="Username"
                                        className="form-control mb-4" required
                                        // value={this.state.username} onChange={this.handleChange}
                                    />
                                </div>
                                <div className="text-right ">
                                    <p className="mb-1 font">your remaining character(s)<b>:</b> {number}</p>
                                </div>
                                <div>
                                    <textarea 
                                        type="text" placeholder="comment . . ." id="textarea"
                                        className="form-control mb-4" required onChange={handleChange}
                                        maxLength= '150' value={textarea}
                                    />
                                </div>
                                <div className="text-center">
                                    <input
                                        type="submit" placeholder=""
                                        className="btn submit mb-2"
                                    />    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact