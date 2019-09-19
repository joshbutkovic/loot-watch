// define child rescript
module.exports = config => {
    config.target = 'electron-renderer';
    return config;
};

// module.exports += {
//     module: {
//         rules: [
//             {
//                 test: /\.less$/,
//                 loader: 'less-loader', // compiles Less to CSS
//             },
//         ],
//     },
// };
