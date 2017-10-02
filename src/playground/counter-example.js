class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAddOne() {
    console.log("handleAddOne");
  }

  handleMinusOne() {
    console.log("handleMinusOne");
  }

  handleReset() {
    console.log("handleReset");
  }

  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById("app"));

//var count = 0;
//
//var addOne = function addOne() {
//  count++;
//  renderCounterApp();
//};
//
//var minusOne = function minusOne() {
//  count--;
//  renderCounterApp();
//};
//
//var reset = function reset() {
//  count = 0;
//  renderCounterApp();
//};
//
//var appRoot = document.getElementById("app");
//
//var renderCounterApp = function renderCounterApp() {
//  var templateTwo = React.createElement(
//    "div",
//    null,
//    React.createElement("h1", null, "Count: ", count),
//    React.createElement("button", { onClick: addOne }, "+1"),
//    React.createElement("button", { onClick: minusOne }, "-1"),
//    React.createElement("button", { onClick: reset }, "reset")
//  );
//  ReactDOM.render(templateTwo, appRoot);
//};
//
//renderCounterApp();
