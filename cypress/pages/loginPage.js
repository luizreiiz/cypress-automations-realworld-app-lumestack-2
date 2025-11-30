class LoginPage {
    selectorsList() {
        const selectors = {
            usernameInput: "[data-test='signin-username']",
            passwordInput: "[data-test='signin-password']",
            loginButton: "[data-test='signin-submit']",
            invalidCredentialsErrorAlert: "[data-test='signin-error']",
        };

        return selectors;
    }
    accessLoginPage() {
        cy.visit("/signin");
    }
    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameInput).type(username);
        cy.get(this.selectorsList().passwordInput).type(password);
        cy.get(this.selectorsList().loginButton).click();
    }
    checkCredentialsErrorAlert() {
        cy.get(this.selectorsList().invalidCredentialsErrorAlert).should("be.visible");
    }
}

export default LoginPage;
