const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new htmlWebpackPlugin({
    title: 'Bloggy Blog',
    template: './app/client/index.html'
});