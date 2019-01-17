const pathToWrapper = require("path");

module.exports = {
    webpackConfig: require("react-scripts/config/webpack.config"),
    components: "src/components/**/*.js",
    ignore: ['**/components/FormikExampleWrapper/FormikExampleWrapper.js', '**/components/Debug/Debug.js', '**/components/index.js', '**/**/*.test.js'],
    pagePerSection: true,
    styleguideComponents: {
        Wrapper: pathToWrapper.join(__dirname, "src/styleguide/App.js")
    }
};
