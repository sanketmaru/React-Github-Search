module.exports = {
  entry: "./app/components/home.js",
  output: {
    filename: "public/bundle.js"
  },
  module:{
    loaders: [
    {
      test:/\.jsx?$/,
      exclude: /(node_modules)/,
      loader:'babel'
    }
  ]
}
};