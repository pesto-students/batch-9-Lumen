/* eslint no-console: ["error", { allow: ["warn", "error", "debug", "info"] }] */

const debug = (...args) => {
  console.debug(...args);
};

const error = (...args) => {
  console.error(...args);
};

const info = (...args) => {
  console.info(...args);
};

const warning = (...args) => {
  console.warn(...args);
};
const logger = {
  debug,
  error,
  info,
  warning,
};

export default logger;
