import React from 'react'
import PropTypes from 'prop-types'

/**
 * @function ToogleButton
 * @param {function} handleToggle: to chnage stae of language
 * @returns 
 */
const ToggleButton = ({ handleToggle }) => {

  return (
    <div className='d-flex align-items-center text-muted switchText px-2'>
      <span >Eng</span>
      <label className="switch m-1">
        <input type="checkbox" defaultChecked onChange={handleToggle}/>
        <span className="slider round"></span>
      </label>
      <span>Fre</span>
    </div>
  )
}

export default ToggleButton


// Prototypes
ToggleButton.propTypes = {
  handleToggle: PropTypes.func.isRequired,
}