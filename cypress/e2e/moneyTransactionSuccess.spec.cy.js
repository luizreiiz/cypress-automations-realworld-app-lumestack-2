import userData from "../fixtures/users/userData";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";
import TransactionPage from "../pages/transactionPage";

const loginPage = new LoginPage();
const mainPage = new MainPage();
const transactionPage = new TransactionPage();

// Test Case: Send money with insufficient balance.
describe("Send money with sufficient balance", () => {
    it("Should successfully send money", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithSomeUser(
            userData.successfulTransactionData.username,
            userData.loginPasswordData.password
        );
        mainPage.verifyMainPage();
        mainPage.newTransaction();
        transactionPage.selectUserToSendMoney(userData.selectContact.ted);
        transactionPage.madeTransaction(
            userData.transactionAmount.fifty,
            userData.transactionDescription.paymentForTests
        );
        transactionPage.transactionSuccessMessage();
    });
});
