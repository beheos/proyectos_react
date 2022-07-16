import React from "react";
import Button from "./Button";
import PropTypes from "prop-types"


var teclas = [['Q','U','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L','Ñ'],['↑','Z','X','C','V','B','N','M','←'],['123','.,','___','?!','╝']]

function recorrer(){
    for(var i = 0; i < teclas.length;i++){
       var div = document.getElementById(i+1);
        return teclas[i].map(tecla =>{
            return <Button className="btn btn-letter">${tecla}</Button>
        });
    }
}

const Teclado = ({onClickLetra}) =>{
    return (
        <div className="keyboard">
            {
               recorrer()
            }
            <div id="1"></div>
            <div id="2"></div>
            <div id="3"></div>
            <div id="4"></div>

        </div>
    )
}

export default Teclado