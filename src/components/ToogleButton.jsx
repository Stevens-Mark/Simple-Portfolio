import React from 'react'
import PropTypes from 'prop-types'

/**
 * @function ToogleButton
 * @param {function} handleToggle: to change 'english' state 
 * @returns {JSX}
 */
const ToggleButton = ({ handleToggle }) => {

  return (
    <div className='d-flex align-items-center text-muted switchText px-2'>
      <span >Eng</span>
      <label htmlFor="toggle" aria-label="English French Language Toogle Switch" className="switch m-1">
        <input id="toggle"type="checkbox" defaultChecked onChange={handleToggle}/>
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