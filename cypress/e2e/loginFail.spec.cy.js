import userData from "../fixtures/users/userData";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

// Test Case: Attempt to log in with invalid credentials.
describe("Attempt to log in with invalid credentials", () => {
    it("Should display an error message when logging in with invalid credentials", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithSomeUser(userData.loginUsername.fail, userData.loginPassword.fail);
        loginPage.checkCredentialsErrorAlert();
    });
});
