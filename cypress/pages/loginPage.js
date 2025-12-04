class LoginPage {
    selectorsList() {
        const selectors = {
            usernameInput: "[data-test='signin-username']", // username input
            passwordInput: "[data-test='signin-password']", // password input
            loginButton: "[data-test='signin-submit']", // login button
            invalidCredentialsErrorAlert: "[data-test='signin-error']", // invalid credentials error alert
        };

        return selectors;
    }
    accessLoginPage() {
        cy.visit("/signin");
    }
    loginWithSomeUser(username, password) {
        cy.get(this.selectorsList().usernameInput).type(username);
        cy.get(this.selectorsList().passwordInput).type(password);
        cy.get(this.selectorsList().loginButton).click();
    }
    checkCredentialsErrorAlert() {
        cy.get(this.selectorsList().invalidCredentialsErrorAlert).should("be.visible");
    }
}

export default LoginPage;
