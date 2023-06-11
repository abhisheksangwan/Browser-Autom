const puppeteer = require("puppeteer");
let cPage;
console.log("Before");
const browserOpenPromise = puppeteer.launch({
    headless:false,
    defaultViewport: null,
    args:["--start-maximised"],
    slowMo:true,
});
const pagesArrPromise = browserOpenPromise.then(function(browser){
    // console.log("Browser Opened");
    const pagesArrPromise = browser.pages();
    return pagesArrPromise;
}).then(function(browserPages){
        cPage = browserPages[0];
        let gotoPromise = cPage.goto("https://www.google.com/");

        return gotoPromise;
    })
    .then(function(){
        //waiting for the element to appear on page
        let elementWaitForPromise = cPage.waitForSelector("#APjFqb",{visible:true});
        return elementWaitForPromise;
    })
    .then(function(){
        //type any element on that page -> identify via->selector
        let keyWillBePromised = cPage.type("#APjFqb", "https://www.iitk.ac.in/");
        return keyWillBePromised;
    }).then(function(){
        // page.keyboard to type special characters
        let enterWillBePressed = cPage.keyboard.press("Enter");
        console.log("Welcome to IIT Kanpur");
        return enterWillBePressed;
    }).then(function(){
        let waitingForElementPromise = cPage.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {visible:true});
        return waitingForElementPromise;
    }).then(function(){
        let keyWillBePromised = cPage.click("h3.LC20lb.MBeuO.DKV0Md");
        return keyWillBePromised;
    })
    .catch(function(err){
        console.log(err);
    })

console.log("after");

