import React from 'react'

export default class  Avatar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <img style={{marginbottom: "1.5rem"}} className={this.props.avatar.className}
            src = {this.props.avatar.url}
            height = {this.props.avatar.height}
            width = {this.props.avatar.width}
            alt = {this.props.avatar.alt}
            />
        )
    }
}