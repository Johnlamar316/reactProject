import React from "react";
import Header from "./Header.js";
import Action from "./Action.js";
import Options from "./Options.js";
import AddOption from "./AddOption.js";
import OptionModal from "./OptionModal.js";

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//React component syntax
console.log("app is working");
export default class IndecisionApp extends React.Component {
  state = {
    option: [],
    selectedOption: undefined
  };

  componentDidMount = () => {
    console.log("fetching data");
    const json = localStorage.getItem("opt");
    const options = JSON.parse(json);
    this.setState(() => {
      return {
        option: options
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.option.length !== this.state.option.length) {
      console.log("saving data");
      const json = JSON.stringify(this.state.option);
      localStorage.setItem("opt", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        option: []
      };
    });
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => {
      return {
        option: prevState.option.filter(opt => {
          console.log("opt", opt);
          console.log("optionToRemove", optionToRemove);
          console.log("seee", optionToRemove !== opt);
          return optionToRemove !== opt;
        })
      };
    });
    // console.log("hdo", optionToRemove);
  };

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.option.length);
    const option = this.state.option[random];
    this.setState(() => {
      return {
        selectedOption: option
      };
    });
  };

  handleAddOptionn = addOption => {
    if (!addOption) {
      return "Enter a valid value to add items";
    } else if (this.state.option.indexOf(addOption) > -1) {
      return "This option already exist";
    }
    this.setState(prevState => {
      return {
        option: prevState.option.concat([addOption])
      };
    });
  };

  handleDeleteModal = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      };
    });
  };

  render() {
    const title = "Todo App";
    const subtitle = "Put your life in the brain of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} minTitle="Best App" />
        <div className="container">
          {this.props.children}
          <Action
            hasOptions={this.state.option.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              opts={this.state.option}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOptionn={this.handleAddOptionn} />
          </div>

          <OptionModal
            selectedOption={this.state.selectedOption}
            handleDeleteModal={this.handleDeleteModal}
          />
        </div>
      </div>
    );
  }
}
