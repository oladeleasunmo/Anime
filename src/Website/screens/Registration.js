import React from 'react'
import formimg from '../assets/shygirl-1.jpg'

const Ages = ['under 12', '13 - 17' , '18 - 21', '22 and above' , 'i rather not say' ]
const Gender = ['male' , 'female' , 'i rather not say']
const State = ['lagos' , 'lagos' , 'lagos' , 'lagos' , 'lagos' , 'lagos' , 'lagos' , 'lagos', 'lagos','lagos','lagos','lagos','lagos','lagos','lagos','lagos']
console.log(Math.random)


const Registration = () => {
    
    return (
        <>
            <section className="form-section a-1">
                <div className="form-section-overlay"></div>
                <div className="container">
                    <div className="col-md-8 col-sd-11 m-auto">
                        <h3>SIGN UP</h3>
                        <div className="form">
                            <div className="form-overlay"></div>
                            <form>
                                <div>
                                    <input 
                                        type="text" placeholder="Username" 
                                        className="form-control mb-4" required
                                        // value={this.state.username} onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="text" placeholder="Email (optional)"
                                        className="form-control mb-4" optional
                                        // value={this.state.username} onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="password" placeholder="Password" 
                                        className="form-control mb-4" required
                                        // value={this.state.username} onChange={this.handleChange}
                                    />
                                </div>
                                <div className="mb-5">
                                    <input 
                                        type="password" placeholder="Confim Password" 
                                        className="form-control mb-4" required
                                        // value={this.state.username} onChange={this.handleChange}
                                    />
                                </div>
                                <div className="optional mb-5">
                                    <div className="row mb-3">
                                        <label for="age" className="col-3">Age <b>:</b></label>
                                        <div className="col-md-9 col-12">
                                            <select className="form-control " id="age" optional>
                                                {Ages.map((age , i) =>
                                                    <option Key={i}>{age}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label for="gender" className="col-3">Gender <b>:</b></label>
                                        <div className="col-md-9 col-12">
                                            <select className="form-control " id="gender" optional>
                                                {Gender.map((gender , i) =>
                                                    <option Key={i}>{gender}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label for="state" className="col-3 hide-md">State <b>:</b> </label>
                                        <div className="col-md-9 col-12">
                                            <select className="form-control " id="state" optional>
                                                {State.map((state , i) =>
                                                    <option Key={i}>{state}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
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
export default Registration