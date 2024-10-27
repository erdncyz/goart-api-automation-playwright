# API Automation with Playwright and Typescript (Page Object Model)

This project demonstrates how to automate API testing using Playwright and Typescript with the Page Object Model (POM) structure. The API services used in this project are from [Dummy JSON](https://dummyjson.com/docs). This project covers basic GET, POST, and DELETE API requests and tests their responses.

## Setup

1. Clone the repository:

git clone https://github.com/your-repo/api-automation-playwright.git
cd api-automation-playwright

2. Install the project dependencies:

npm install

3. Install Playwright browsers (if not installed):

npx playwright install

## How to Run Tests

1. To run the tests using Playwright:

npx playwright test

- For special run :  npx playwright test tests/getAllProducts.test.ts