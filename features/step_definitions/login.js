const {Given, When, Then} = require("@cucumber/cucumber");
const {Builder} = require("selenium-webdriver");

const webdriver = require('selenium-webdriver');
require('chromedriver');
require('geckodriver');
let chai = require('chai');
let expect = chai.expect;
let assert = chai.assert;

Given(/^visit url "https:\/\/www\.phptravels\.net\/login"$/, function (url) {
    this.webdriver = new webdriver.Builder().forBrowser('firefox').build();
    this.webdriver.get(url);
});

When(/^enter email = (.*)$/, function (email) {
    console.log(email);
});

When(/^enter password = (.*)$/, function (password) {
    console.log(password);
});

Then(/^error message "([^"]*)" is displayed$/, function (message) {
    console.log(message);
});
