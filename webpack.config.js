module.exports = (env, argv) => {
    const path = require('path');
    const webpack = require('webpack');

    return {
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        resolve: {
            modules: [path.join(__dirname, 'src'), 'node_modules'],
            extensions: ['.js', '.ts']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'ts-loader'
                        },
                        {
                            loader: 'eslint-loader'
                        }
                    ]
                }
            ]
        }
    }
}
