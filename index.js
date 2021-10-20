//Enable use in browser
if (typeof window !== 'undefined') {
  window.require = function (func) {
    if (func === 'chalk') {
      return function (str) {
        return str;
      };
    }
    return { exit: function () {} };
  };
}

const chalk = require('chalk');
const process = require('process');

/**
 * Log error and exit
 * @param {*} err
 * @param {*} description
 */
const handleError = function handleError(description, err) {
  console.log(chalk.red(`${description}\n${err.stack}`));
  process.exit(1);
};

/**
 * Set error message
 * @param {string} description - error description
 */
module.exports = function err(description) {
  return function (errObj) {
    handleError(description, errObj);
  };
};
