const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
    mode: "development",
    entry: `${SRC_PATH}/index.tsx`,
    output: {
        filename: "bundle.js",
        path: DIST_PATH
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            '@': SRC_PATH
        },
    },
    devServer: {
        contentBase: DIST_PATH,
        port: 3000,
        open: true,
        hot: true,
    }
}; 