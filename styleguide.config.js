const pathToWrapper = require("path");

module.exports = {
    webpackConfig: require("react-scripts/config/webpack.config"),
    components: "src/components/**/*.js",
    pagePerSection: true,
    styleguideComponents: {
        Wrapper: pathToWrapper.join(__dirname, "src/styleguide/App.js")
    }
};
