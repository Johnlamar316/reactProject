import React from "react";

// Stateless functional component
const Action = props => {
    return (
      <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions} className="bg-button">
          What should i do
        </button>
      </div>
    );
  };

  export default Action;
  
  // class Action extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <button
  //           onClick={this.props.handlePick}
  //           disabled={!this.props.hasOptions}
  //         >
  //           What should i do
  //         </button>
  //       </div>
  //     );
  //   }
  // }