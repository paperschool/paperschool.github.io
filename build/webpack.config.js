const path = require("path");
const rules = require("./rules");
const plugins = require("./plugins");
const optimisations = require("./optimisations");

module.exports = (env, { mode }) => {
    const isProduction = mode === "production";

    return {
        entry: "./app/client/index.tsx",
        output: {
            filename: '[name].[chunkhash:4].js',
            path: path.resolve(__dirname, '../bin/'),
            publicPath: ''
        },
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'cheap-source-map' : 'source-map',
        module: {
            rules: [...rules(isProduction)]
        },
        plugins: [...plugins(isProduction)],
        optimization: optimisations,
        resolve: {
            extensions: ['.js', '.jsx', '.tsx', '.ts', '.css', '.scss', '.json', '.svg'],
        },
        stats: {
            warnings: false
        },
        externals: {
            uws: 'uws'
        },
        watch: !isProduction
    }
}