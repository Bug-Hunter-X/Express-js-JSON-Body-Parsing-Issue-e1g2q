# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue in Express.js applications where the body-parser middleware fails to parse JSON data if the `Content-Type` header is missing or incorrect in the request.

## Bug

The `bug.js` file contains an Express.js app that attempts to parse a JSON body using `express.json()`. However, if a POST request is made without the correct `Content-Type` header (i.e., `application/json`), the `req.body` will be empty, leading to unexpected behavior.

## Solution

The `bugSolution.js` file provides a solution that addresses this issue by adding error handling and ensuring that the request body is correctly parsed.

## How to reproduce the bug:

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `node bug.js` to start the server.
4. Send a POST request to `/data` without setting the `Content-Type` header (or setting it to an incorrect value), for example using curl:
   ```bash
curl -X POST -d '{"key":"value"}' http://localhost:3000/data
```
5. Observe that the server logs an empty `req.body` and responds with "Data received", even though a JSON payload was sent.

## How the solution works:

The solution adds more robust error handling that checks if `req.body` is empty.  If it is empty after attempting to parse JSON, then it will let the client know the data was not sent correctly.  It also provides better logging to help you debug in production.