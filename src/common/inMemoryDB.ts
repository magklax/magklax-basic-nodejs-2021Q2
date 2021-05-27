const DB = {
  users: [],
  boards: [],
  tasks: [],
};

/**
 * Returns the array of users
 * @returns {Promise<Array>} Promise object represents the array of all users
 */

const getAllUsers = async () => [...DB.users];

/**
 * Returns the user by id
 * @param {string} id user id
 * @returns {Promise<Object>} Promise object represents the user
 */

const getUser = async (id) => DB.users.find((user) => user.id === id);

/**
 * Returns the created user
 * @param {Object} board new user data 
 * @returns {Promise<Object>} Promise object represents the created user
 */

const createUser = async (user) => {
  DB.users.push(user);
  return user;
};

/**
 * Returns the updated task
 * @param {string} id user id to update
 * @param {Object} updatedUser user data
 * @returns {Promise<Object>} Promise object represents the updated user
 */

const updateUser = async (id, updatedUser) => {
  const index = DB.users.findIndex((user) => user.id === id);

  if (index < 0) {
    return null;
  }

  DB.users[index] = updatedUser;
  return updatedUser;
};

/**
 * Returns the deleted task
 * @param {string} id user id to delete
 * @returns {Promise<Object>} Promise object represents the deleted user
 */

const deleteUser = async (id) => {
  const deletedUser = DB.users.find((user) => user.id === id);

  if (!deletedUser) {
    return null;
  }

  DB.users = DB.users.filter((user) => user.id !== id);

  return deletedUser;
};

/**
 * Returns the array of boards
 * @returns {Promise<Array>} Promise object represents the array of all boards
 */

const getAllBoards = async () => [...DB.boards];

/**
 * Returns the board by id
 * @param {string} id board id
 * @returns {Promise<Object>} Promise object represents the board
 */

const getBoard = async (id) => DB.boards.find((board) => board.id === id);

/**
 * Returns the created board
 * @param {Object} board new board data 
 * @returns {Promise<Object>} Promise object represents the created board
 */

const createBoard = async (board) => {
  DB.boards.push(board);

  return board;
};

/**
 * Returns the updated board
 * @param {string} id board id to update
 * @param {Object} updatedBoard board data
 * @returns {Promise<Object>} Promise object represents the updated board
 */

const updateBoard = async (id, updatedBoard) => {
  const index = DB.boards.findIndex((board) => board.id === id);

  if (index < 0) {
    return null;
  }

  DB.boards[index] = updatedBoard;

  return updatedBoard;
};

/**
 * Returns the deleted board
 * @param {string} id board id to delete
 * @returns {Promise<Object>} Promise object represents the deleted board
 */

const deleteBoard = async (id) => {
  const deletedBoard = DB.boards.find((board) => board.id === id);

  if (!deletedBoard) {
    return null;
  }

  DB.boards = DB.boards.filter((board) => board.id !== id);

  return deletedBoard;
};

/**
 * Returns the array of tasks
 * @returns {Promise<Array>} Promise object represents the array of all tasks
 */

const getAllTasks = async () => [...DB.tasks];

/**
 * Returns the task by id
 * @param {string} id task id
 * @returns {Promise<Object>} Promise object represents the task
 */

const getTask = async (id) => DB.tasks.find((task) => task.id === id);

/**
 * Returns the created task
 * @param {Object} board new task data 
 * @returns {Promise<Object>} Promise object represents the created task
 */

const createTask = async (task) => {
  DB.tasks.push(task);

  return task;
};

/**
 * Returns the updated task
 * @param {string} id task id to update
 * @param {Object} updatedTask task data
 * @returns {Promise<Object>} Promise object represents the updated task
 */

const updateTask = async (id, updatedTask) => {
  const index = DB.tasks.findIndex((task) => task.id === id);

  if (!index) {
    return null;
  }

  DB.tasks[index] = updatedTask;

  return updatedTask;
};

/**
 * Returns the deleted task
 * @param {string} id task id to delete
 * @returns {Promise<Object>} Promise object represents the deleted task
 */

const deleteTask = async (id) => {
  const deletedTask = DB.tasks.find((task) => task.id === id);

  if (!deletedTask) {
    return null;
  }

  DB.tasks = DB.tasks.filter((task) => task.id !== id);

  return deletedTask;
};

/**
 * Returns undefined
 * @param {string} userId user id to unasign all tasks
 * @returns {Promise<void>} Promise object represents undefined
 */

const unasignTasks = async (userId) => {
  DB.tasks = DB.tasks.map((task) =>
    task.userId === userId ? { ...task, userId: null } : { ...task }
  );
};

/**
 * Returns undefined
 * @param {string} boardId board id to delete all tasks
 * @returns {Promise<void>} Promise object represents undefined
 */

const deleteTasks = async (boardId) => {
  DB.tasks = DB.tasks.filter((task) => task.boardId !== boardId);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  unasignTasks,
  deleteTasks,
};
