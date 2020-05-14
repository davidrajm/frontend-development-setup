const currentTask = process.env.npm_lifecycle_event

const path = require('path');
const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer')
]

let CSSconfig = {
    test:/\.css$/i,
    use: ["css-loader?url=false",{loader:"postcss-loader",options:{plugins:postCSSPlugins}}]
}

let config ={
    entry: './scripts/App.js',
    module: {
        rules: [
            CSSconfig
        ]
    },
    plugins : []
}



if(currentTask == 'dev'){
    CSSconfig.use.unshift("style-loader")
    config.output = {
        filename : 'dev.js',
        path : path.resolve(__dirname, './scripts')
    }
    config.mode = 'development'
    config.watch = true
    config.devServer =  {
        open: true,
        hot: true,
        before: function(app, server){
            server._watch('../**/*.php')
            server._watch('../**/*.twig')
            server._watch('../**/*.html')
            server._watch('../**/*.py')
        },
        // publicPath: '/',
        port:3000,
        host: 'localhost',
        proxy: {
          '/': {
            target: 'http://localhost:5500/',
            changeOrigin: true
          }
        }
      }

      config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

if(currentTask == 'build'){
    CSSconfig.use.unshift(miniCssExtractPlugin.loader)
    postCSSPlugins.push(require('cssnano'))

    config.output = {
        filename : '[name].[chunkhash].min.js',
        chunkFilename : '[name].[chunkhash].min.js',
        path : path.resolve(__dirname, './dist')
    }
    config.mode = 'production'

    config.optimization = {
        splitChunks : {chunks : 'all'}
    }

    config.plugins.push(new CleanWebpackPlugin(), new miniCssExtractPlugin({filename:'style.[chunkhash].css'}))
}



module.exports = config