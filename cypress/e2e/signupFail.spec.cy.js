import userData from "../fixtures/users/userData";
import SignupPage from "../pages/signupPage";
import Chance from "chance";

const signupPage = new SignupPage();
const chance = new Chance();
const firstName = chance.first();
const lastName = chance.last();
const username = chance.word();
const password = chance.integer({ min: 99, max: 999 });

// Test Case: Attempt to register a new user with incomplete information.
describe("Attempt to register a new user with incomplete information", () => {
    it("Should try to register a new user without filling in all required information", () => {
        signupPage.accessSignupPage();
        signupPage.signupFail(firstName, lastName, username, password);
    });
});
