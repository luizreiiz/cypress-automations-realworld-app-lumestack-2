class TransactionPage {
    selectorList() {
        const selectors = {
            indexPathname: "/transaction/new", // transaction page pathname
            transactionCreateStepOne: ".TransactionCreateStepOne-paper", // transaction create layout
            userSearchInput: "[data-test='user-list-search-input']", // type a username
            userSelect: ".MuiListItemText-multiline", // select a user from list
            amountInput: "[data-test='transaction-create-amount-input']", // input amount
            descriptionInput: "[data-test='transaction-create-description-input']", // input description
            paymentSubmitButton: "[data-test='transaction-create-submit-payment']", // submit payment
            transactionSubmittedMessage: ".MuiAlert-message", // alert message
        };

        return selectors;
    }

    verifyTransactionPage() {
        cy.location("pathname").should("eq", this.selectorList().indexPathname);
        cy.get(this.selectorList().transactionCreateStepOne).should("be.visible");
    }
    selectUserToSendMoney = (contact) => {
        cy.get(this.selectorList().userSearchInput).type(contact);
        cy.get(this.selectorList().userSelect).contains(contact).click();
    };
    madeTransaction(amount, description) {
        cy.get(this.selectorList().amountInput).type(amount);
        cy.get(this.selectorList().descriptionInput).type(description);
        cy.get(this.selectorList().paymentSubmitButton).click();
    }
    transactionSuccessMessage() {
        cy.get(this.selectorList().transactionSubmittedMessage).contains("Transaction Submitted!");
    }
    transactionFailMessage() {
        cy.get(this.selectorList().transactionSubmittedMessage).contains("Transaction Failed!");
    }
}

export default TransactionPage;
