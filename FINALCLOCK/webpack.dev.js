const path = require('path')
module.exports = {
    //... 
    entry: './src/app.js',
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'babel-loader', 
          exclude: /node_modules/,
        }
      ],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'FINALCLOCK2'),   
        publicPath:'/',
        clean:true 
    },
    mode:'development',
    target:'node',
  };