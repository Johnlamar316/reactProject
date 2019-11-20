import React from "react";

// Stateless functional component
const Option = props => {
  return (
    <div className="option">
      <p className="option__text">{props.count}.{" "}{props.optionText}</p>
      <button
        className="button button--link"
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default Option;

