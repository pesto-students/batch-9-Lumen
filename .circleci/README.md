## Circle CI Setup
Refer the docs of Circle CI from [here](https://circleci.com/docs/)

### Steps that our CI is doing
- `circleci/node:lts` - Docker image to use to run our code. 

- `checkout`- Checkout the branch for which the hook is been triggered

- `yarn && yarn test:client` - Test the client side of our codebase

- `yarn && yarn test:server` - Test the server side of our codebase


## When the build will fail? And their solution.

- If the commands are not found. (error msg example: `Command test not found in folder/package.json`)

   Solution: Add command to the package file of the directory and make sure that command is working properly.

-  If any test fail the build of CI will fail. (error msg example: ` Tests failed in index.test.js at line 2`)

    Solution: Debug what the test is doing and see why your test is failing
