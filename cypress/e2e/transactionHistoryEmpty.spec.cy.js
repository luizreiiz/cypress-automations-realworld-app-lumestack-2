import userData from "../fixtures/users/userData";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";

const loginPage = new LoginPage();
const mainPage = new MainPage();

// Test Case: Attempt to view transaction history without previous transactions.
describe("Attempt to view transaction history without previous transactions", () => {
    it("Should display a message indicating that the user has no previous transactions", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithSomeUser(userData.loginUsername.devon, userData.loginPassword.success);
        mainPage.verifyMainPage();
        mainPage.goToMineTransactions();
        mainPage.verifyEmptyTransactionHistory();
    });
});
