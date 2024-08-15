import {Given, When, Then} from "@cucumber/cucumber"
import { page } from "../steps/world";
import { defineConfig } from "@playwright/test";

const loginPage = new LoginPage();

When('I login with the user {string}', async function (user: string) {
    loginPage.typeUserName(user);
});

Then('I should see the warning', async function () {

});

Then('I should see the header {string}', async function (string) {

});
