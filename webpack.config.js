var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    mode: 'production',
    entry: [
        'webpack/hot/poll?1000',
        './src/index.ts'
    ],
    watch: true,
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'backend.js',
        clean: true
    },
    externals: nodeModules,
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.tsx', '...']
    },
    plugins: [ 
        new webpack.HotModuleReplacementPlugin(),
        new WebpackShellPluginNext({
            onBuildExit:{
              scripts: ['npm run start:dev'],
              blocking: false,
              parallel: true
            },
            onBuildError: {
                scripts: ['npm run build:dev'],
                blocking: true
            }
          }),
    ]
}