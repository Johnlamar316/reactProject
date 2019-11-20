import React from "react";
import Option from "./Option.js";

// class base component
export default class Options extends React.Component {
  render() {
    return (
      <div>
        <div className="widget-header ">
          <h3 className="widget-header__title">Your options</h3>
          <button
            onClick={this.props.handleDeleteOptions}
            className="button button--link"
          >
            Remove All
          </button>
        </div>

        {this.props.opts.length === 0 && (
          <p className="widget__message">
            Please Add an option to get started!
          </p>
        )}
        {this.props.opts.map((opt, index) => (
          <Option
            key={opt}
            optionText={opt}
            count={index + 1}
            handleDeleteOption={this.props.handleDeleteOption}
          />
        ))}
      </div>
    );
  }
}
