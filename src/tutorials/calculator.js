import React , {useState} from 'react'
import './calculator.css'

const Calculator = () => {

    const [value , setValue]=useState(0)
    const [result , setResult]=useState()

    const handleCalc = (e) => {
        setValue(e.target.id)
        // if(e.target.id === 'ten') {
        //     setValue(10)
        // }else if(e.target.id === 'thirty'){
        //     setValue()
        // }
    }

    const handleMinus = () => {

    } 

    const handlePlus = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <>
            <div className="container">
                <div className="">
                    <section className="calculator j-c-c">
                        <div className="screen">
                            {value}
                            <p className="text-right">
                                {result}60
                            </p>
                        </div>
                        <div className="row j-c-b">
                            <button id="10" onClick={handleCalc}>10</button>
                            <button id="+" onClick={handlePlus}>+</button>
                        </div>
                        <div className="row j-c-b">
                            <button id="30" onClick={handleCalc}>30</button>
                            <button id="-" onClick={handleMinus}>-</button>
                        </div>
                        <div className="row j-c-c">
                            <button className="w-100" id="calc" onClick={handleSubmit}>=</button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
export default Calculator