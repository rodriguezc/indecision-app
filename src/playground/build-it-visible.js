let visibiltiy = false;

const toggleVisbility = () => {
  visibiltiy = !visibiltiy;
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>Visible toggle</h1>
      <button onClick={toggleVisbility}>
        {visibiltiy ? "Hide details" : "Show details"}
      </button>
      {visibiltiy && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );
  console.log(ReactDOM.render(template, appRoot));
};

render();
