import React from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

const App = () => {
    console.log('Renderización de la App');
    
 
    const functionOnclickOperation = operacion => console.log(operacion)
    const functionOnclickEqual = operacion =>console.log(operacion)

    return (
        <main className='react-calculator'>
        <Result value={undefined}/>
        <Numbers onClickNumber={ text => console.log("el numeroo ingresado" , text)}/>
        <Functions onContentClear = {() => console.log("click en clear")} onDelete={() => console.log("click en regresar")}/>
       <MathOperations onclickOperation={functionOnclickOperation} onclickEqual={functionOnclickEqual}/>
    </main>
    );
}

export default App