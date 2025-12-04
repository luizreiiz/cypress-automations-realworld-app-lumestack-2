class MainPage {
    selectorList() {
        const selectors = {
            indexPathname: "/", // main page pathname
            mainLayout: "[data-test='main']", // main layout
            userOnbording: "[data-test='user-onboarding-dialog-content']", // user onboarding dialog
            onbordingNextButton: "[data-test='user-onboarding-next']", // onboarding next button
            createBankAccountInput: "[role='dialog']", // create bank account dialog
            bankNameInput: "[data-test='bankaccount-bankName-input']", // bank name input
            routingNumberInput: "[data-test='bankaccount-routingNumber-input']", // routing number input
            accountNumberInput: "[data-test='bankaccount-accountNumber-input']", // account number input
            submitCreateBankAccountButton: "[data-test='bankaccount-submit']", // submit create bank account button
            newTransactionButton: "[data-test='nav-top-new-transaction']", // '$New' button
            buttonMineTransactions: "[data-test='nav-personal-tab']", // 'Mine' transactions tab
            personalEmptyTransactionsList: "[data-test='empty-list-header']", // personal empty transactions list
            personalTransactionsList: "[data-test='transaction-list']", // personal transactions list
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
    newTransaction() {
        cy.get(this.selectorList().newTransactionButton).click();
    }
    goToMineTransactions() {
        cy.get(this.selectorList().buttonMineTransactions).click();
    }
    verifyEmptyTransactionHistory() {
        // cy.get(this.selectorList().personalTransactionsList).contains("No transactions found");
        cy.get(this.selectorList().personalEmptyTransactionsList).should(
            "contain.text",
            "No Transactions"
        );
    }
    verifyLoadedTransactionHistory() {
        cy.get(this.selectorList().personalTransactionsList).should("be.visible");
    }
}

export default MainPage;
