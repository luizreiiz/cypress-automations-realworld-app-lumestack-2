class SignupPage {
    selectorsList() {
        const selectors = {
            firstNameInput: "[data-test='signup-first-name']",
            lastNameInput: "[data-test='signup-last-name']",
            userNameInput: "[data-test='signup-username']",
            passwordInput: "[data-test='signup-password']",
            confirmPasswordInput: "[data-test='signup-confirmPassword']",
            signupButton: "[data-test='signup-submit']",
            loginPathname: "/signin",
        };

        return selectors;
    }
    accessSignupPage() {
        cy.visit("/signup");
    }
    signupSuccess(firstName, lastName, username, password) {
        cy.get(this.selectorsList().firstNameInput).type(firstName);
        cy.get(this.selectorsList().lastNameInput).type(lastName);
        cy.get(this.selectorsList().userNameInput).type(username);
        cy.get(this.selectorsList().passwordInput).type(password);
        cy.get(this.selectorsList().confirmPasswordInput).type(password);
        cy.get(this.selectorsList().signupButton).should("be.enabled");
        cy.get(this.selectorsList().signupButton).click();
        cy.location("pathname").should("eq", this.selectorsList().loginPathname);
    }
    signupFail(firstName, lastName, username, password) {
        cy.get(this.selectorsList().firstNameInput).type(firstName);
        cy.get(this.selectorsList().lastNameInput).type(lastName);
        cy.get(this.selectorsList().userNameInput).type(username);
        cy.get(this.selectorsList().passwordInput).type(password);
        cy.get(this.selectorsList().confirmPasswordInput).type(password);
        cy.get(this.selectorsList().signupButton).should("not.be.enabled");
    }
}

export default SignupPage;
