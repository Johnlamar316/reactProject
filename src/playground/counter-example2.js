let count = 0;
const addOne = () => {
  count++;
  renderCountApp();
};
const minusOne = () => {
  count--;
  renderCountApp();
};
const resetAll = () => {
  count = 0;
  renderCountApp();
};

let appRoot = document.getElementById("app");

const renderCountApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}> Addition </button>
      <button onClick={minusOne}> Substraction </button>
      <button onClick={resetAll}> Reset </button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCountApp();
