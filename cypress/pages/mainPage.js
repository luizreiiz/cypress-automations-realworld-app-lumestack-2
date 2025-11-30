class MainPage {
    selectorList() {
        const selectors = {
            indexPathname: "/",
            mainLayout: "[data-test='main']",
            userOnbording: "[data-test='user-onboarding-dialog-content']",
            onbordingNextButton: "[data-test='user-onboarding-next']",
            createBankAccountInput: "[role='dialog']",
            bankNameInput: "[data-test='bankaccount-bankName-input']",
            routingNumberInput: "[data-test='bankaccount-routingNumber-input']",
            accountNumberInput: "[data-test='bankaccount-accountNumber-input']",
            submitCreateBankAccountButton: "[data-test='bankaccount-submit']",
            // buttonEveryone: "[data-test='nav-public-tab']",
        };

        return selectors;
    }

    verifyMainPage() {
        cy.location("pathname").should("eq", this.selectorList().indexPathname);
        cy.get(this.selectorList().mainLayout).should("be.visible");
        // cy.get(this.selectorList().buttonEveryone).should("be.selected");
    }
    getStarted() {
        cy.get(this.selectorList().userOnbording).should("be.visible");
        cy.get(this.selectorList().onbordingNextButton).click();
        cy.get(this.selectorList().createBankAccountInput).should("be.visible");
    }
    createBankAccount(bankName, routingNumber, accountNumber) {
        cy.get(this.selectorList().bankNameInput).type(bankName);
        cy.get(this.selectorList().routingNumberInput).type(routingNumber);
        cy.get(this.selectorList().accountNumberInput).type(accountNumber);
        cy.get(this.selectorList().submitCreateBankAccountButton).click();
        cy.get(this.selectorList().userOnbording).should("be.visible");
        cy.get(this.selectorList().onbordingNextButton).click();
    }
}

export default MainPage;
