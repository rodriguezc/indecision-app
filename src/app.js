console.log("App.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer"
};

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: "Andrew",
  age: 26,
  location: "New York"
};
var userName = "Andrew";
var userAge = 27;
var userLocation = "Philadelphia";

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
  return undefined;
}

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");
//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
