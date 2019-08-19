## Husky Setup

  Husky helps you set-up git hooks to automate steps you would like every contributor to perform locally during development and/or before they commit/push changes.

  Husky waits for the specified git hook to be triggered and then executes the commands listed against the respective hook.

  To setup husky: 
  - Add husky to your dev-dependencies using npm or yarn.
  - Setup [git 'hooks'](https://git-scm.com/docs/githooks) which you would like to use. We currently use `pre-commit` and `pre-push`.
  - Against every hook, write the commands you would like to execute when the hook is triggered.

  After husky gets installed through yarn/npm, create a `"husky"` key in your package.json and pass it an object with the git hooks as keys and the commands to run as the values. For example:

  ```json
  "husky": {
    "hooks": {
      "pre-commit": "yarn && yarn lint:fix && yarn test",
      "pre-push": "yarn lint && yarn test:coverage"
    }
  }
  ```

  ## Our setup
  ```json
  "lint-staged": {
    "*.{js,jsx}": [
      "eslint"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "lint-staged"
    }
  }
  ```
  We are using [another package `lint-staged`](https://github.com/okonet/lint-staged/blob/master/README.md) to help us lint only staged files locally.

  We use only `pre-commit` and `pre-push` hooks right now and in both, we execute `eslint *.{js,jsx}` to keep code issues away from our remote master.

  If you feel the need, make a PR with more commands / more hooks which the team should run.

  We can possibly look into including:
  - Code Coverage in `pre-push`
  - And more.

  Read more about [lint-staged](https://github.com/okonet/lint-staged/blob/master/README.md).