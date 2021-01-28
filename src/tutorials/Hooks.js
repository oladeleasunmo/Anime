import React, {useState}from 'react'
import '../bootstrap.min.css'
import Message from './message'
import { useEffect } from 'react/cjs/react.development';
import Courses from '../courses'

const Hooks = ({history}) => {

    useEffect(() => {
        document.body.classList.add('bg-light-half')
    },)

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmpassword , setConfimPassword] = useState('')
    const [message , setMessage] =useState('')
    const [color , setColor] = useState('')
    const [pMessage , setPMessage] = useState('')
    const [pColor , setPColor] = useState('')
    const [count , setCount] = useState(8)

    const handleChange = (e) => {
        setPassword(e.target.value)
        let now = (password.length - (password.length - 1))
        setCount(Number(count - now)) 
        if (e.target.value === 8){
            setPMessage('correct!!! bitch.You fucking did it')
            setPColor('success')
        }else {
            setPMessage('correct!!! bitch.You')
            setPColor('danger')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name !== '' && email !== '' && password !== '' && confirmpassword !== '') {
            if (password === confirmpassword){
                setMessage('correct!!! bitch.You fucking did it')
                setColor('success')
                setTimeout (() => {
                    history.push(`/Welcome/${name}`)
                }, 2000) 
            }else {
                setMessage('password does not match')
                setColor('danger')
            }
        }else {
            setMessage('please fill in all fields')
            setColor('danger')
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 margin-auto">
                        <form className="box mt-5" onSubmit={handleSubmit} method="post">
                            <div> 
                                <input 
                                    placeholder="Username" type="text" className="form-control mb-3"
                                    value={name} onChange={e => setName(e.target.value)} 
                                />
                            </div>
                            <div>
                                <input placeholder="Email" type="Email" className="form-control mb-3" 
                                value={email} onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input placeholder="Password" type="password" className="form-control mb-3" id="password"
                                // maxlength="8"
                                value={password} onChange={handleChange}
                                />
                                <div>
                                    {message && <Message color={pColor}>{pMessage}</Message>}
                                </div>
                            </div>
                            <div>
                                <p className="text-right mr-3">your password characters remain : <b onChange={handleChange}>{count}</b></p>
                            </div>
                            <div>
                                <input placeholder="Comfirm password" type="password" className="form-control mb-3" 
                                value={confirmpassword} onChange={e => setConfimPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 text-left">
                                <label className="mr-2">Courses <b>:</b></label> 
                                    <select className="form-control ">
                                        {Courses.map((course , i) =>
                                            <option>{course.name}</option>
                                        )}
                                    </select> 
                            </div>
                            <div><input type="submit" className="mb-3 btn bg-light-half"/></div>
                            <div>
                                {message && <Message color={color}>{message}</Message>}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="centertext">
                        <p><b>{name}</b></p>
                        <p><b>{password}</b></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hooks