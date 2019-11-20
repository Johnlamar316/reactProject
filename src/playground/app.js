// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//React component syntax
console.log("app is working");
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOptionn = this.handleAddOptionn.bind(this);
    this.state = {
      option: []
    };
  }

  componentDidMount() {
    console.log("fetching data");
    const json = localStorage.getItem("opt");
    const options = JSON.parse(json);
    this.setState(() => {
      return {
        option: options
      };
    });
  }

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

  handleDeleteOptions() {
    this.setState(() => {
      return {
        option: []
      };
    });
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => {
      return {
        option: prevState.option.filter(opt => {
          console.log("opt", opt);
          console.log("optionToRemove", optionToRemove);
          console.log(optionToRemove !== opt);
          return optionToRemove !== opt;
        })
      };
    });
    console.log("hdo", optionToRemove);
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.option.length);
    const option = this.state.option[random];
    alert(option);
  }

  handleAddOptionn(addOption) {
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
  }

  render() {
    const title = "Indicision App";
    const subtitle = "Put your life in the head of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} minTitle="Best App" />
        <Action
          hasOptions={this.state.option.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          opts={this.state.option}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOptionn={this.handleAddOptionn} />
      </div>
    );
  }
}

// Stateless functional component
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  //it display if there's no title props value
  title: "Indecision App"
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// Stateless functional component
const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should i do
      </button>
    </div>
  );
};

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

// class base component
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.opts.length === 0 && (
          <p>Please Add an option to get started!</p>
        )}
        {this.props.opts.map(opt => (
          <Option
            key={opt}
            optionText={opt}
            handleDeleteOption={this.props.handleDeleteOption}
          />
        ))}
      </div>
    );
  }
}

// Stateless functional component
const Option = props => {
  return (
    <div>
      <h6>{props.optionText}</h6>
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        delete
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const options = e.target.elements.option.value.trim();
    const error = this.props.handleAddOptionn(options);
    this.setState(() => {
      return {
        error: error
      };
    });
    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
