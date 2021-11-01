//Enable use in browser - mock process global
if (typeof window !== 'undefined') {
  window.require = function (func) {
    return { exit: function () {} };
  };
}

/**
 * Log error and exit
 * @param {*} err
 * @param {*} description
 */
const handleError = function handleError(description, err) {
  console.log(`${description}\n${err.stack}`);
  process.exit(1);
};

/**
 * Set error message
 * @public
 * @param {string} description - error description
 */
module.exports = function err(description) {
  return function (errObj) {
    handleError(description, errObj);
  };
};
