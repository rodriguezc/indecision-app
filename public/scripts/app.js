"use strict";

var visibiltiy = false;

var toggleVisbility = function toggleVisbility() {
  visibiltiy = !visibiltiy;
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visible toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleVisbility },
      visibiltiy ? "Hide details" : "Show details"
    ),
    visibiltiy && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hey. These are some details you can now see!"
      )
    )
  );
  console.log(ReactDOM.render(template, appRoot));
};

render();
