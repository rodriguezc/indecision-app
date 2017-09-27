console.log("App.js is running");

// JSX = JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
var templateTwo = (
  <div>
    <h1>Andrew Mead</h1>
    <p>Age: 33</p>
    <p>Location: Lausanne</p>
  </div>
);

var appRoot = document.getElementById("app");
//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
