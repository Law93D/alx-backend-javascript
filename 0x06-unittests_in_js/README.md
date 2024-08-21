0x06. Unittests in JS
UnitTests
Back-end
JavaScript
ES6
NodeJS
ExpressJS
Mocha
 Weight: 1
 Project will start Aug 21, 2024 5:00 AM, must end by Aug 23, 2024 5:00 AM
 Checker was released at Aug 21, 2024 5:00 PM
 An auto review will be launched at the deadline


Resources
Read or watch:

Mocha documentation
Chai
Sinon
Express
Request
How to Test NodeJS Apps using Mocha, Chai and SinonJS

Objective: Write a simple function that rounds two numbers and returns their sum, then create a test suite for it using Mocha and Node's built-in assertion library.
Steps:
Install Mocha: npm install --save-dev mocha.
Create 0-calcul.js with the calculateNumber function.
Create 0-calcul.test.js with test cases using assert.
Add a test script in your package.json to run Mocha: "test": "mocha 0-calcul.test.js".
Task 1: Combining descriptions
Objective: Enhance the calculateNumber function to handle different operations (SUM, SUBTRACT, DIVIDE) and write a more complex test suite.
Steps:
Update 0-calcul.js to 1-calcul.js by adding an operation type parameter.
Write corresponding test cases in 1-calcul.test.js using Mocha and assert.
Use describe blocks to organize tests.
Task 2: Basic test using Chai assertion library
Objective: Refactor the previous test suite to use Chai's expect for a more readable test style.
Steps:
Install Chai: npm install --save-dev chai.
Copy 1-calcul.js to 2-calcul_chai.js and 1-calcul.test.js to 2-calcul_chai.test.js.
Modify the test suite to use Chai’s expect syntax.
Task 3: Spies
Objective: Use Sinon to create a spy that checks if the Utils.calculateNumber function is called correctly.
Steps:
Install Sinon: npm install --save-dev sinon.
Create a utility module utils.js containing Utils.calculateNumber.
Create 3-payment.js where sendPaymentRequestToApi calls the utility function.
Write a test suite in 3-payment.test.js that spies on the Utils.calculateNumber function.
Task 4: Stubs
Objective: Use Sinon to stub the Utils.calculateNumber function and ensure predictable behavior in tests.
Steps:
Create 4-payment.js by copying 3-payment.js.
Create 4-payment.test.js by copying 3-payment.test.js.
Stub Utils.calculateNumber to return a fixed value and verify behavior using console.log spy.
Task 5: Hooks
Objective: Use beforeEach and afterEach hooks to set up and clean up the environment before/after each test in a suite.
Steps:
Copy 4-payment.js to 5-payment.js.
Create 5-payment.test.js.
Use beforeEach to set up a spy on console.log and afterEach to restore it.
Write two tests to verify the correct behavior of sendPaymentRequestToApi.
Task 6: Async tests with done
Objective: Learn how to write asynchronous tests with Mocha using the done callback.
Steps:
Create 6-payment_token.js with getPaymentTokenFromAPI.
Write a test suite in 6-payment_token.test.js that handles promises and ensures the async function resolves correctly.
Task 7: Skip
Objective: Learn to skip tests using Mocha’s .skip() method without commenting them out.
Steps:
Create 7-skip.test.js with a suite of simple tests.
Use .skip() to exclude any failing or incomplete tests while continuing to run others.

