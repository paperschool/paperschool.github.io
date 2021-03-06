const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = isProduction => ({
    test: /\.(scss|sass|css)$/,
    use: [
        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: true
            }
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: !isProduction
            }
        }
    ]
})
