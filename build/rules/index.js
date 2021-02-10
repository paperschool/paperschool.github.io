const js = require("./js");
const css = require("./css");
const fonts = require("./fonts");
const svg = require("./svg");

module.exports = isProduction => {
    return [
        js, 
        css(isProduction), 
        fonts, 
        svg
    ]
}
