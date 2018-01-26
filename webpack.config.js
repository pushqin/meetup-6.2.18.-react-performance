
const path                          = require('path');
const distPath                      = path.join(__dirname, '..', 'dist');
const config = {
    entry: './index.js',
    output: {
        path:distPath,
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        port: 666
    },
    devtool:"eval-source-map",
    module: {
        loaders: [
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['es2015', 'react']
                        },
                    }
                ]
            }
        ],

    }
};

module.exports = config;
