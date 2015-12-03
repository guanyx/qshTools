var path = require('path');

module.exports = {
    entry: {
        main: path.join(__dirname, './src/main')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'qshTools.js'
    },
    module: {
        loaders: [
            {test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 10 version!less-loader'},
            {test: /\.html$/, loader: 'html-minify-loader'},
            {test: /\.js$/, loader: 'babel'}
        ]
    }
};