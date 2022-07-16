import React from 'react'
import PropTypes from 'prop-types'

//en esta parte de los parametros se utiliza object destructuring
//los parametros se ponen dentro de las llaves {value, name, etc}
const Result = ({value}) => {
    return (
        <div className="result">
            {value}
        </div>
    );
}

Result.propTypes = {
    value : PropTypes.string.isRequired
 }

 Result.defaultProps = {
     value: "0"
 }


export default Result