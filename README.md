# Cypress Real World App - Test Suite

This project contains a suite of automated tests for the [Cypress Real World App (RWA)](https://github.com/cypress-io/cypress-realworld-app), a full-stack application built to demonstrate the power of Cypress.

The tests are designed to cover critical user flows and functionalities of the RWA.

## Getting Started

To get started with running the tests, follow these steps:

1.  **Install Dependencies:**

    First, you need to install all the project dependencies using Yarn.

    ```bash
    yarn
    ```

2.  **Run the Application:**

    Next, start the Real World App locally. The following command will start the application on `http://localhost:3000`.

    ```bash
    yarn dev
    ```

3.  **Run Cypress Tests:**

    With the application running, you can now execute the Cypress tests.

    To open the Cypress Test Runner and run tests interactively:

    ```bash
    npx cypress open
    ```

    To run all tests headlessly in the terminal:

    ```bash
    npx cypress run
    ```

## Test Scenarios

This test suite covers the following key features of the Real World App:

- **Authentication:**

    - User Login
    - User Registration (Sign Up)

- **Core Functionality:**
    - Create and Send a New Transaction ("Send Money")
    - View Transaction History

## Test Reports

| Sign Up Test Case | Steps                                                          | Expected Results                                                             | Status |
| ----------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------ |
| Pre-conditions    | Access New User Registration page                              | Registration page is displayed correctly with all fields                     | Passed |
| 1                 | Registration with valid data                                   |                                                                              |        |
| 1.1               | Fill in First Name with a valid value                          | The field accepts the input                                                  | Passed |
| 1.2               | Fill in Last Name with a valid value                           | The field accepts the input                                                  | Passed |
| 1.3               | Fill in Username with a valid value                            | The field accepts the input                                                  | Passed |
| 1.4               | Fill in Password with a valid value (Minimum 4 characters)     | The field accepts the input                                                  | Passed |
| 1.5               | Fill in Confirm Password with a value that match               | The field accepts the input                                                  | Passed |
| 1.6               | Click the "SIGN UP" button                                     | The user is redirected to the Login Page                                     | Passed |
| 2                 | Registration with invalid data                                 |                                                                              |        |
| 2.1               | Fill in First Name with a valid value                          | The field accepts the input                                                  | Passed |
| 2.1               | Fill in Last Name with a valid value                           | The field accepts the input                                                  | Passed |
| 2.3               | Fill in Username with a valid value                            | The field accepts the input                                                  | Passed |
| 2.4               | Fill in Password with a invalid value (Last than 4 characters) | The message: "Password must contain at least 4 characters" should be visible | Passed |
| 2.5               | Fill in Confirm Password with a value that match               | The message: "Password must contain at least 4 characters" should be visible | Passed |
| 2.6               | Click the "SIGN UP" button                                     | The "SIGN UP" button should not be enable                                    | Passed |

| Sign In Test Case | Steps                                       | Expected Results                                                    | Status |
| ----------------- | ------------------------------------------- | ------------------------------------------------------------------- | ------ |
| Pre-conditions    | Access Login page                           | Login page is displayed correctly with Username and Password fields | Passed |
| 1                 | Login with valid data                       |                                                                     |        |
| 1.1               | Fill in Username with registered username   | The field accepts the input                                         | Passed |
| 1.2               | Fill in Password with correct password      | The field accepts the input                                         | Passed |
| 1.3               | Click the "SIGN IN" button                  | User is redirected to the Main Page screen successfully             | Passed |
| 2                 | Login with unregistered username            |                                                                     |        |
| 2.1               | Fill in Username with unregistered username | The field accepts the input                                         | Passed |
| 2.2               | Fill in Password with any password          | The field accepts the input                                         | Passed |
| 2.3               | Click the "SIGN IN" button                  | Error message: "Username or password is invalid"                    | Passed |
| 3                 | Login with incorrect password               |                                                                     |        |
| 3.1               | Fill in Username with registered username   | The field accepts the input                                         | Passed |
| 3.2               | Fill in Password with incorrect password    | The field accepts the input                                         | Passed |
| 3.3               | Click the "SIGN IN" button                  | Error message: "Username or password is invalid"                    | Passed |
| 4                 | Login with mandatory fields blank           |                                                                     |        |
| 4.1               | Leave the "Email" field blank               |                                                                     | Passed |
| 4.2               | Leave the "Password" field blank            |                                                                     | Passed |
| 4.3               | Click the "SIGN IN" button                  | The "SIGN IN" button should not be enable                           | Passed |

| Money Transaction Test Case | Steps                                                                | Expected Results                       | Status |
| --------------------------- | -------------------------------------------------------------------- | -------------------------------------- | ------ |
| Pre-conditions              | Access Transaction page                                              | Transaction page is displayed          | Passed |
| 1                           | Transfer with sufficient balance                                     |                                        |        |
| 1.1                         | Fill in Search Contact with some avaliable contact                   | The field accepts the input            | Passed |
| 1.2                         | Click in the contact name option                                     | The Step 2 Payment page will load      | Passed |
| 1.3                         | Fill Amount with a value equal to or less than the available balance | The field accepts the input            | Passed |
| 1.4                         | Add a description for transaction                                    | The field accepts the input            | Passed |
| 1.5                         | Click the "PAY" button                                               | Alert message: "Transaction Submited!" | Passed |
| 2                           | Attempt to transfer with insufficient balance                        |                                        |        |
| 2.1                         | Fill in Search Contact with some avaliable contact                   | The field accepts the input            | Passed |
| 2.2                         | Click in the contact name option                                     | The Step 2 Payment page will load      | Passed |
| 2.3                         | Fill Amount with a value higher than the available balance           | The field accepts the input            | Passed |
| 2.4                         | Add a description for transaction                                    | The field accepts the input            | Passed |
| 2.5                         | Click the "PAY" button                                               | Error message: "Transaction Failed!"   | Failed |

| Transaction History Test Case | Steps                                                             | Expected Results                                                                 | Status |
| ----------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------ |
| Pre-conditions                | Access Home page                                                  | Home page displayed correctly.                                                   | Passed |
| 1                             | View transaction history successfully                             |                                                                                  |        |
| 1.1                           | Click the "MINE" button                                           | Redirected to Personal Transaction History with a list of past transactions.     | Passed |
| 2                             | Attempt to view transaction history without previous transactions |                                                                                  |        |
| 2.1                           | Click the "MINE" button                                           | Redirected to Personal Transaction History displaying "No Transactions" message. | Passed |

| Bug Report         |                                                                                                                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title              | Money Transaction > Attempt to transfer with insufficient balance                                                                                                                                                      |
| Steps to Reproduce | 1. Fill in Search Contact with some available contact 2. Click in the contact name option 3. Fill Amount with a value higher than the available balance 4. Add a description for transaction 5. Click the "PAY" button |
| Expected Result    | Failed Transaction and an Error message: "Transaction Failed!"                                                                                                                                                         |
| Actual Result      | Transaction was successful submitted and return the Alert message: "Transaction submitted!"                                                                                                                            |
| Test Environment   | Dev Environment                                                                                                                                                                                                        |
| Priority           | Very High                                                                                                                                                                                                              |
| Type               | Functional                                                                                                                                                                                                             |

| Test Report       |                      |
| ----------------- | -------------------- |
| Test Case Summary | Current Build Result |
| TCs Numbers       | 10                   |
| TCs Passed        | 9                    |
| TCs Failed        | 1                    |
| TCs Blocked       | 0                    |
