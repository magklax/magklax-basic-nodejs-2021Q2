import User from '../resources/users/user.model';
import Board from '../resources/boards/board.model';
import Task from '../resources/tasks/task.model';

interface IDB {
  users: Array<User>;
  boards: Array<Board>;
  tasks: Array<Task>;
}

export const DB: IDB = {
  users: [],
  boards: [],
  tasks: [],
};

/**
 * Returns the array of users
 * @returns {Promise<Array<User>} Promise object represents the array of all users
 */

const getAllUsers = async (): Promise<Array<User>> => [...DB.users];

/**
 * Returns the user by id
 * @param {string} id user id
 * @returns {Promise<User>} Promise object represents the user
 */

const getUser = async (id: string): Promise<User> =>
  DB.users.find((user) => user.id === id);

/**
 * Returns the created user
 * @param {User} board new user data
 * @returns {Promise<User>} Promise object represents the created user
 */

const createUser = async (user: User): Promise<User> => {
  DB.users.push(user);
  return user;
};

/**
 * Returns the updated task
 * @param {string} id user id to update
 * @param {User} updatedUser user data
 * @returns {Promise<User>} Promise object represents the updated user
 */

const updateUser = async (id: string, updatedUser: User): Promise<User> => {
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
 * @returns {Promise<User>} Promise object represents the deleted user
 */

const deleteUser = async (id: string): Promise<User> => {
  const deletedUser = DB.users.find((user) => user.id === id);

  if (!deletedUser) {
    return null;
  }

  DB.users = DB.users.filter((user) => user.id !== id);

  return deletedUser;
};

/**
 * Returns the array of boards
 * @returns {Promise<Array<Board>>} Promise object represents the array of all boards
 */

const getAllBoards = async (): Promise<Array<Board>> => [...DB.boards];

/**
 * Returns the board by id
 * @param {string} id board id
 * @returns {Promise<Board>} Promise object represents the board
 */

const getBoard = async (id: string): Promise<Board> =>
  DB.boards.find((board) => board.id === id);

/**
 * Returns the created board
 * @param {Board} board new board data
 * @returns {Promise<Board>} Promise object represents the created board
 */

const createBoard = async (board: Board): Promise<Board> => {
  DB.boards.push(board);

  return board;
};

/**
 * Returns the updated board
 * @param {string} id board id to update
 * @param {Board} updatedBoard board data
 * @returns {Promise<Board>} Promise object represents the updated board
 */

const updateBoard = async (id: string, updatedBoard: Board): Promise<Board> => {
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
 * @returns {Promise<Board>} Promise object represents the deleted board
 */

const deleteBoard = async (id: string): Promise<Board> => {
  const deletedBoard = DB.boards.find((board) => board.id === id);

  if (!deletedBoard) {
    return null;
  }

  DB.boards = DB.boards.filter((board) => board.id !== id);

  return deletedBoard;
};

/**
 * Returns the array of tasks
 * @returns {Promise<Array<Task>>} Promise object represents the array of all tasks
 */

const getAllTasks = async (): Promise<Array<Task>> => [...DB.tasks];

/**
 * Returns the task by id
 * @param {string} id task id
 * @returns {Promise<Task>} Promise object represents the task
 */

const getTask = async (id: string): Promise<Task> =>
  DB.tasks.find((task) => task.id === id);

/**
 * Returns the created task
 * @param {Task} board new task data
 * @returns {Promise<Task>} Promise object represents the created task
 */

const createTask = async (task: Task): Promise<Task> => {
  DB.tasks.push(task);

  return task;
};

/**
 * Returns the updated task
 * @param {string} id task id to update
 * @param {Task} updatedTask task data
 * @returns {Promise<Task>} Promise object represents the updated task
 */

const updateTask = async (id: string, updatedTask: Task): Promise<Task> => {
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
 * @returns {Promise<Task>} Promise object represents the deleted task
 */

const deleteTask = async (id: string): Promise<Task> => {
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

const unasignTasks = async (userId: string): Promise<void> => {
  DB.tasks = DB.tasks.map((task) =>
    task.userId === userId ? { ...task, userId: null } : { ...task }
  );
};

/**
 * Returns undefined
 * @param {string} boardId board id to delete all tasks
 * @returns {Promise<void>} Promise object represents undefined
 */

const deleteTasks = async (boardId: string): Promise<void> => {
  DB.tasks = DB.tasks.filter((task) => task.boardId !== boardId);
};

export {
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
