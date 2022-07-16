import React from "react";
import Letras from "./components/Teclado";
import Paper from "./components/Paper";
import Title from "./components/Title";
import "./css/normalize.css"
import "./css/styles.css"



const App = () =>{
    return(
        <section className="keyboard__container">
            <Title/>
            <Paper/>
            <Letras/>
        </section>
       
    
    )
}
    

export default App