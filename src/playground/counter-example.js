console.log("App is running");
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
      calculator: "Counter App"
    };
  }

  componentDidMount() {
    localStorage.getItem("count");
    const counts = parseInt(stringCount, 10);
    if (!isNaN(counts)) {
      this.setState(() => {
        return {
          count: counts
        };
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("saving data");
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
    console.log(this.state.count);
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(prevState => {
      return {
        count: (prevState.count = 0)
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.calculator}</h1>
        <h4>Count: {this.state.count}</h4>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
