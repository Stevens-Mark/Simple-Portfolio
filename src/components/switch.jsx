import React from "react"
import PropTypes from 'prop-types'


const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <label style={{ background: isOn && onColor }} className="react-switch">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        type="checkbox"
      />
      <div className="react-switch-button" />
      <div className="react-switch-labels">
        <span>Fr</span>
        <span>En</span>
      </div>
    </label>
  );
};

export default Switch

// Prototypes
Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  onColor : PropTypes.string.isRequired,
}

