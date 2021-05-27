/**
 * Throws error message
 * @param {string} item string argument that will be shown in error message
 * @param {string} name string argument that will be shown in error message
 * @param {string} id string argument that will be shown in error message
 * @returns {Void} returns undefined
 * 
 */

const errorHandler = (item , id, name) => {
  if (!item) {
    throw new Error(`The ${name} with id: ${id} has not been found`);
  }
};

module.exports = { errorHandler };
