//React state
console.log("App is running");
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      titlePage:"Visibility Toggle",
      visibility: false
    }
  }

  handleToggleVisibility() {
    console.log("worked");
    this.setState(prevState => {
      console.log(prevState);
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h3>{this.state.titlePage}</h3>
        <p></p>
        <button onClick={this.handleToggleVisibility} >{this.state.visibility?"hide details":"show details"}</button>
        {this.state.visibility&&<div><p>Here are some details to see</p></div>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));


//React normal syntax//
// console.log("App is running now!!");
// let ceiling = true;

// let visibility = false;
// const showinfo = () => {
//     visibility = !visibility;
//     render();
// }

// const findOut = (a) => {
// return a * 5;
// }

// const render = () => {
//   const template2 = (
//     <div>
//     <h1>Visibility Toggle</h1>
//     <p>{ceiling}</p>
//     <button onClick={showinfo}> {visibility ? "hide details":"show details"} </button>
//     {visibility && <h6>Hey. These are some details you can now see</h6>}
//     {ceiling&&<p>They believed i was going to work</p>}
//     {findOut(10)&&<h1>{findOut(10)}</h1>}
//     </div>
//   );
//   ReactDOM.render(template2, document.getElementById("app"));
// };

// render();
