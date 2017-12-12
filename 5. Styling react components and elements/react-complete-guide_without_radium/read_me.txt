instead of using radium and styleroot, we use css modules
for that, we eject the react configuration by typing
npm run eject
then we'll se many new folders and files.

in config/webpack.config.dev.js and .prod.js,

in .dev.js->
in module: , find test: css

modules: true,
localIdentName: '[name]__[local]__[hash:base64:5]'

in .prod.js->
find module:, test: css, use:, options:
there, add
modules: true,
localIdentName: '[name]__[local]__[hash:base64:5]'
