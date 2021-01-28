import React from 'react'
import Form from './Form'
import Message from './message'

class Lifecycle extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            value: 0
        }
        this.handleClick = this.handleClick.bind(this)
        
    }

    // //Runs before componen ts get mounted to the Dom
    // componentwillMount() {
    //     document.body.classlist.add('bg-body-half')
    // }

    // //Runs after components get mounts to the dom
    // componentDidMount() {
    //     document.body.classlist.remove('bg-body-half')
    // }


    // componentwillMount() {
    //     document.body.classlist.remove('bg-body-half')
    // }

    // componentwillMount() {
    //     document.body.classlist.remove('bg-body-half')
    // }
    
    handleClick (){
        this.setState({
            value: (this.state.value + 1),
            toogled: !this.state.toogled
        })
    }

    render (){
        return (
            <>
                <div className="framer-copy">
                    <h1>your value is {this.state.value}</h1>
                    <button onClick={this.handleClick}>Trump that bitch!!!</button>
                </div>
                <Form />
                <Message color="danger">why me whyyyyy</Message>
            </>
        )
    }
}

export default Lifecycle