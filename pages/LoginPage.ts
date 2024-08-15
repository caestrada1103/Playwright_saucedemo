import { page } from "../src/test/steps/world";

class LoginPage{
    elements={
        // userField: () => cy.get('[data-test="username"]'),
        // passwordField: () => cy.get('[data-test="password"]'),
        // loginBtn: () => cy.get('[data-test="login-button"]'),
        // warningMessage: () => cy.get('[data-test="error"]'),
        // loginHeaderTitle: () => cy.get('.login_logo'),
        userField: () => page.getByTestId("username"),
        passwordField: () => page.getByTestId("password"),
        loginBtn: () => page.getByTestId("login-button"),
        warningMessage: () => page.getByTestId("error"),
        //loginHeaderTitle: () => page.locator("//"),
    }
    
    // validateLoginPage() {
    //     this.elements.loginHeaderTitle().should('exist').should('be.visible');
    // }

    typeUsername(username: string) {
        this.elements.userField().isEnabled().type(username);
    }

    typePassword(password: any) {
        this.elements.passwordField().should('be.enabled').type(password);
    }

    clickLogin() {
        this.elements.loginBtn().should('be.enabled').click();
    }

    login(users: any, username: any) {
        const user = returnObjectSearchingByKey(users, username);
        this.typeUsername(user.username);
        this.typePassword(user.password);
        this.clickLogin();
    }

    warningMessage() {
        this.elements.warningMessage().should('be.visible');
    }
    
}