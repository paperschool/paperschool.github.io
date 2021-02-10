const htmlWebpackPlugin = require('html-webpack-plugin');
const version = `${(process.env.GITHUB_RUN_ID || "local")}-${new Date().toISOString()}`;

module.exports = new htmlWebpackPlugin({
        title: 'Bloggy Blog',
        template: './app/client/index.html',
        version
    });