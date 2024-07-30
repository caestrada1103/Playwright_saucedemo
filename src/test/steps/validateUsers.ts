import {Given, When, Then} from "@cucumber/cucumber"
import { Page, Browser, chromium, BrowserContext } from "@playwright/test";

Given('I open the website', async function() {
    const browser: Browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
    });
    const context:BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto("https://www.saucedemo.com");
});

When('I login with the user {string}', async function (string) {

});

Then('I should see the warning', async function () {

});

Then('I should see the header {string}', async function (string) {

});
