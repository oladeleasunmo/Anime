import React from 'react'
import '../bootstrap.min.css'
import {Link} from 'react-router-dom'

class Form extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            toogled: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
handleChange(event) {
    if(event.target.id == 'username'){
        this.setState({
            username: event.target.value
        })
    }else if (event.target.id == 'email'){
        this.setState({
            email: event.target.value
        })
    }
}
handleClick (e){
    e.preventDefault()
    this.setState({
        toogled: !this.state.toogled
    })
}

    render(){
        return (
            <>
                <div className="container">
                    <h2 className="center-text">SIGN UP</h2>
                    <div className="row">
                        <div className="col-md-6 center-text">
                            <form>
                                <input type="text" className="form-control mb-3" placeholder="Username" 
                                    id="username" value={this.state.username} onChange={this.handleChange} />
                                <input type="text" className="form-control mb-3" placeholder="email"
                                    id="email" value={this.state.password} onChange={this.handleChange}/>
                                <button onClick={this.handleClick}>Submit</button>
                            </form>
                        </div>
                    </div>
                    {this.state.toogled && <p>test</p>}
                    <div className={this.state.toogled ? 'hide' : 'show'}>
                        <div>
                            <p>
                                {this.state.username}
                            </p>
                            <p>
                                {this.state.email}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}export default Form