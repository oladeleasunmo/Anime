import React from 'react'

export default class EventClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            color: "white"
        }
        this.handleclick = this.handleclick.bind(this)
    }
    handleclick() {
        this.setState ({
            toogled: !this.state.toogled
        })
    }


    render() {
        return (
            <>
                <div className="framer">
                    <div className="center-text">
                        <h1>This is event using class fuction</h1>
                        <div>
                            <button className="" onClick={this.handleclick}>change background</button>
                        </div>
                        <div >
                            <p className={this.state.toogled ? "box-1" : "box-2"} > 
                                background is {this.state.toogled ? "black" : "white"} bitch!!!!
                            </p>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}