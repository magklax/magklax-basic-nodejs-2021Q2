const errorHandler = (item, id, name) => {
  if (!item) {
    throw new Error(`The ${name} with id: ${id} has not been found`);
  }
};

module.exports = { errorHandler };
