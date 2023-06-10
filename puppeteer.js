const puppeteer = require("puppeteer");

console.log("Before");
let browserOpenPromise = puppeteer.launch({headless:false});
browserOpenPromise.then(function(browser){
    // console.log("Browser Opened");
    let pageOpenPromise = browser.pages();

})

console.log("after");

