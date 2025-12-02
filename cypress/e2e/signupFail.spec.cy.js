import userData from "../fixtures/users/userData";
import SignupPage from "../pages/signupPage";

const signupPage = new SignupPage();

// Test Case: Attempt to register a new user with incomplete information.
describe("Attempt to register a new user with incomplete information", () => {
    it("Should try to register a new user without filling in all required information", () => {
        signupPage.accessSignupPage();
        signupPage.signupFail(
            userData.signupFailData.firstName,
            userData.signupFailData.lastName,
            userData.signupFailData.username,
            userData.signupFailData.password
        );
    });
});
