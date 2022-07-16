import React from "react";
import PropTypes from "prop-types"

const Button = ({type, text, onHandler}) =>{
    return (
        <button className={type} onClick={onHandler}>{text}</button>
    )
}

Button.propTypes = {
    type : PropTypes.string,
    text : PropTypes.string.isRequired,
    onHandler : PropTypes.func.isRequired
}

export default Button