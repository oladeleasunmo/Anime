import React from 'react'

export default class Message extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            className
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
                            <button className="" onClick={this.handleclick}>render paragraph</button>
                        </div>
                        <div >
                            <p className={this.state.toogled ? "hide" : "show"} > 
                                i have rendered
                            </p>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}