import userData from "../fixtures/users/userData";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";
import TransactionPage from "../pages/transactionPage";

const loginPage = new LoginPage();
const mainPage = new MainPage();
const transactionPage = new TransactionPage();

// Test Case: Send money with sufficient balance.
describe("Send money with sufficient balance", () => {
    it("Should successfully send money", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithSomeUser(userData.loginUsername.judah, userData.loginPassword.success);
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
