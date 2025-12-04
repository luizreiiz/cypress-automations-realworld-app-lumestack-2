import userData from "../fixtures/users/userData";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";

const loginPage = new LoginPage();
const mainPage = new MainPage();

// Test Case: Successful login.
describe("Successful login", () => {
    it("Should log in with a valid user", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithSomeUser(userData.loginUsername.heath93, userData.loginPassword.success);
        mainPage.verifyMainPage();
    });
});
