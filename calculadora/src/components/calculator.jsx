import React, { useState } from 'react';
import './calculator.css';

function calculator() { 

    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e){
        let value = e.target.value

        if(num == 0){
            setNum(value)
        }else{
            setNum(num + value);

        }
    }

    function clear(){
        setNum(0);

    }

    function porcent(){
        setNum(num/100);

    }

    function changeoperator(){
        if(num > 0){
            setNum(num*-1)
        }else{
            setNum(num*-1)
        }
    }

    function operatorHandler(e){
        let operadorInput = e.target.value;
        setOperator(operadorInput);
        setOldNum(num);
        setNum(0);

        
    }
    
    function calculate(){

        if(operator == '/'){
            setNum(oldnum / num);
    
        }else if(operator == 'X'){
            setNum(oldnum * num);
    
        }else if(operator == '-'){
            setNum(parseFloat(oldnum) - parseFloat(num))
    
        }else{
            setNum(parseFloat(oldnum) + parseFloat(num));
        }

    }

    return (
        <body>
            <div className='container'>
                <h1 className='result'>
                    {num}
                </h1>
                <button className='btn-gray2' onClick={clear}>AC</button>
                <button className='btn-gray2' onClick={changeoperator}>+/-</button>
                <button className='btn-gray2' onClick={porcent}>%</button>
                <button className='btn-orange' value={'/'} onClick={operatorHandler}>/</button>
                <button className='btn-gray' value={7} onClick={inputNum}>7</button>
                <button className='btn-gray' value={8} onClick={inputNum}>8</button>
                <button className='btn-gray' value={9} onClick={inputNum}>9</button>
                <button className='btn-orange' value={'X'} onClick={operatorHandler}>X</button>
                <button className='btn-gray' value={4} onClick={inputNum}>4</button>
                <button className='btn-gray' value={5} onClick={inputNum}>5</button>
                <button className='btn-gray' value={6} onClick={inputNum}>6</button>
                <button className='btn-orange' value={'-'} onClick={operatorHandler}>-</button>
                <button className='btn-gray' value={1} onClick={inputNum}>1</button>
                <button className='btn-gray' value={2} onClick={inputNum}>2</button>
                <button className='btn-gray' value={3} onClick={inputNum}>3</button>
                <button className='btn-orange' value={'+'} onClick={operatorHandler}>+</button>
                <button id='btn-zero' className='btn-gray' value={0} onClick={inputNum}>0</button>
                <button className='btn-gray' value={'.'} onClick={inputNum}>.</button>
                <button className='btn-orange' onClick={calculate}>=</button>
            </div>
        </body>

    )
}

export default calculator;