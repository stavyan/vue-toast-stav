var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/lib/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'vue-toast-stav.js',
        libraryTarget: "umd",
        library: "vueToastDemo"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use:[ 'style-loader','css-loader','sass-loader'],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}