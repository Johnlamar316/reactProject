 // babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log("App is running now!!");

// JSX = Javascript XML
// let template = (
//   <div>
//     <h1>Okafor John</h1>
//     <p>This is some info</p>
//     <ol>
//       <li> Item one</li>
//       <li> Item Two</li>
//     </ol>
//   </div>
// );

const user = {
  // object
  name: "Okafor Blue",
  age: 26,
  location: "New Jersey",
  options: []
};

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hand of a computer"
};

function getLocation(location) {
  // function
  if (location) {
    // conditional logic
    return <p>Location: {location}</p>;
  }
}

let userName = "Okafor John Lamar"; // string
let userAge = 27; // number
let userLocation = "New York";
let seeIf = "Magnium";

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.optioner.value;
  if (option) {
    user.options.push(option);
    e.target.elements.optioner.value = "";
    renderAll();
  } 
};

const removeAll = () => {
  user.options = [];
  renderAll();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * user.options.length);
  const option = user.options[randomNum];
  alert(option);
  console.log(randomNum);
};

const numbers = [55, 101, 1000];

const renderAll = () => {
  const template = (
    <div>
      <h1>{userName.toUpperCase()}</h1>
      <p>Age: {userAge}</p>
      <p>Check: {onMakeDecision}</p>
      <p>Location: {userLocation}</p>
      <h2>{user.name ? user.name : "Anonymous"}</h2>
      <p>{user.options.length >= 0 ? user.options : "No options available"}</p>
      {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <h4>
        {user.options.length > 0 ? "Here are your options" : "No options"}
      </h4>
      <p>{user.options.length}</p> 
      <button disabled={user.options.length === 0} onClick={onMakeDecision}>
        What should i do?
      </button>
      <button onClick={removeAll}>RemoveAll</button>
      {numbers.map(number => {
        return <p key={number}>Number: {number + 10}</p>;
      })}
      <ol>
        {user.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="optioner" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};

renderAll();

