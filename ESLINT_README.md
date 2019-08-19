## ESLint Setup

  Environments used: 'browser', 'es6', 'node', 'jest'
  Setting environments allows ESLint to recognize global variables that are predefined. Ex:- window, process, describe.

  Extends: 'airbnb'
  Lists the rulesets your ESLint configuration uses and adds rules to.
  Refer to [airbnb style guide](https://github.com/airbnb/javascript)

  Globals: 'Atomics', 'ShaerdArrayBuffer'
  Specifies global variables that are used a lot. Use 'readonly', 'writeble' as values against the variable names as keys to define if the specific variables should be readable only or also writeable.

  ParserOptions: Lets you specify the JavaScript language options you want to support. Can limit to ES5 for browser support or can go above.
  Supported language features: jsx syntax, ES6 modules
  Supported language version: ES2018
  Specified source file type: 'module' - Means the source file uses modules.

  Plugins: 'react'
  Specifies the third-party plugins we are using.

  **Note**: Using multiple types of style guides in extends can cause conflicts. Two or more specified style guides can have opposite style suggestions for the same thing. Be careful about that.

  Read more about [ESLint configurations](https://eslint.org/docs/user-guide/configuring).