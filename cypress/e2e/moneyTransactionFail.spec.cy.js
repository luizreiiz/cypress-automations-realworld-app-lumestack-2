import userData from "../fixtures/users/userData";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";
import TransactionPage from "../pages/transactionPage";

const loginPage = new LoginPage();
const mainPage = new MainPage();
const transactionPage = new TransactionPage();

// Test Case: Send money with insufficient balance.
describe("Send money with insufficient balance", () => {
    it("Should display an error message when sending money without sufficient balance", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithSomeUser(
            userData.failTransactionData.username,
            userData.loginPasswordData.password
        );
        mainPage.verifyMainPage();
        mainPage.newTransaction();
        transactionPage.selectUserToSendMoney(userData.selectContact.lia);
        transactionPage.madeTransaction(
            userData.transactionAmount.thirtyThousand,
            userData.transactionDescription.paymentForTests
        );
        transactionPage.transactionFailMessage();
    });
});
