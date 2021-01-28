
// const Basics = () => {
//     return (
//         <div className="container">
//             <h1>QUICK INTRO </h1>
//         </div>
//     )
// }
import React from 'react'
import Avatar from './avatar'
import img2 from '../src/assets/IconTopQuality.png'
import img3 from './assets/IconScale.png'


const img = {
    url : '/img.png',
    alt : 'image',
    className : 'm-r-l-5',
    height : '150px',
    width : `150px`
}

const secondimg = {
    url : img2,
    alt : 'image',
    className : 'm-r-l-5',
    height : '150px',
    width : `150px`
}

const thirdimg = {
    url : img3 ,
    alt : 'image',
    className : 'm-r-l-5',
    height : '150px',
    width : `150px`
}

class BasicComponent extends React.Component {
    render() {
        return (
            <p>This is a class based component</p>
        )
    }
}

const Basics = () => {
    return (
        <div className="framer">
            <h1 className="center-text">QUICK INTRO </h1>
            <BasicComponent />
            <div className="framer">
                <div className="frame j-c-c">
                <Avatar avatar={img}/>
                <Avatar avatar={secondimg}/>
                <Avatar avatar={thirdimg}/>
                </div>
            </div>
        </div>
    )
}

export default Basics