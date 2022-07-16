import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const MathOperations = ({onclickOperation, onclickEqual}) => {
    return(
        <section className="math-operations">
            <Button text="+" clickHandler={onclickOperation}/>
            <Button text="-" clickHandler={onclickOperation}/>
            <Button text="*" clickHandler={onclickOperation}/>
            <Button text="/" clickHandler={onclickOperation}/>
            <Button text="=" clickHandler={onclickEqual}/>
        </section>
    )
}

MathOperations.propTypes = {
    onclickOperation : PropTypes.func.isRequired,
    onclickEqual : PropTypes.func.isRequired
}
export default MathOperations