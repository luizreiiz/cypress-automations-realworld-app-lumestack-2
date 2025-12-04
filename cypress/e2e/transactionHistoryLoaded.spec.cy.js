import userData from "../fixtures/users/userData";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";

const loginPage = new LoginPage();
const mainPage = new MainPage();

// Test Case: View transaction history successfully.
describe("View transaction history successfully", () => {
    it("Should display a user's transaction history correctly", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithSomeUser(userData.loginUsername.judah, userData.loginPassword.success);
        mainPage.verifyMainPage();
        mainPage.goToMineTransactions();
        mainPage.verifyLoadedTransactionHistory();
    });
});
