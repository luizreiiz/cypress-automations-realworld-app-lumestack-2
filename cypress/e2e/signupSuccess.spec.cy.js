import userData from "../fixtures/users/userData";
import SignupPage from "../pages/signupPage";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";
import Chance from "chance";

const signupPage = new SignupPage();
const loginPage = new LoginPage();
const mainPage = new MainPage();
const chance = new Chance();
const firstName = chance.first();
const lastName = chance.last();
const username = chance.word();
const password = chance.integer({ min: 9999, max: 99999 });

// Test Case: Successful new user registration.
describe("Successful new user registration", () => {
    it("Should register a new user with valid information, try to log in with it, and create a bank account", () => {
        signupPage.accessSignupPage();
        signupPage.signupSuccess(firstName, lastName, username, password);
        loginPage.loginWithSomeUser(username, password);
        mainPage.verifyMainPage();
        mainPage.getStarted();
        mainPage.createBankAccount(
            userData.createBankAccount.bankName,
            userData.createBankAccount.routingNumber,
            userData.createBankAccount.accountNumber
        );
    });
});
