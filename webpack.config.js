const path = require("path");
module.exports = {
  entry: "./src/app.js", // where webpack looks to start building the bundle
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/, //babel-loader processe uniquement ces fichiers
        exclude: /nodes-modules/ //On exclut ce répertoire
      }
    ]
  }
};
