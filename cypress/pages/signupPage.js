class SignupPage {
    selectorsList() {
        const selectors = {
            firstNameInput: "[data-test='signup-first-name']", // first name input
            lastNameInput: "[data-test='signup-last-name']", // last name input
            userNameInput: "[data-test='signup-username']", // username input
            passwordInput: "[data-test='signup-password']", // password input
            confirmPasswordInput: "[data-test='signup-confirmPassword']", // confirm password input
            signupButton: "[data-test='signup-submit']", // signup button
            loginPathname: "/signin", // login page pathname
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
