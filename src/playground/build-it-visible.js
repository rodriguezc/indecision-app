class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisbility = this.handleToggleVisbility.bind(this);
    this.state = {
      visibility: false
    };
  }

  render() {
    return (
      <div>
        <h1>Visible toggle</h1>
        <button onClick={this.handleToggleVisbility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }

  handleToggleVisbility() {
    this.setState(previousState => {
      return {
        visibility: !previousState.visibility
      };
    });
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

//let visibiltiy = false;
//
//const toggleVisbility = () => {
//  visibiltiy = !visibiltiy;
//  render();
//};
//
//const appRoot = document.getElementById("app");
//
//const render = () => {
//  const template = (
//    <div>
//      <h1>Visible toggle</h1>
//      <button onClick={toggleVisbility}>
//        {visibiltiy ? "Hide details" : "Show details"}
//      </button>
//      {visibiltiy && (
//        <div>
//          <p>Hey. These are some details you can now see!</p>
//        </div>
//      )}
//    </div>
//  );
//  console.log(ReactDOM.render(template, appRoot));
//};
//
//render();
