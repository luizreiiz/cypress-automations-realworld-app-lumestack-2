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

*   **Authentication:**
    *   User Login
    *   User Registration (Sign Up)

*   **Core Functionality:**
    *   Create and Send a New Transaction ("Send Money")
    *   View Transaction History
