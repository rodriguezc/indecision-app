const path = require("path");
module.exports = {
  entry: "./src/app.js", // where webpack looks to start building the bundle
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  }
};
