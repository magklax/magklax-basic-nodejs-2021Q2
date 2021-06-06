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

const getAllUsers = async () => [...DB.users];

const getUser = async (id: string): Promise<User | undefined> =>
  DB.users.find((user) => user.id === id);

const createUser = async (user: User): Promise<User> => {
  DB.users.push(user);
  return user;
};

const updateUser = async (id: string, updatedUser: User) => {
  const index = DB.users.findIndex((user) => user.id === id);

  if (index < 0) {
    return null;
  }

  DB.users[index] = updatedUser;
  return updatedUser;
};

const deleteUser = async (id: string) => {
  const deletedUser = DB.users.find((user) => user.id === id);

  if (!deletedUser) {
    return null;
  }

  DB.users = DB.users.filter((user) => user.id !== id);

  return deletedUser;
};

const getAllBoards = async () => [...DB.boards];


const getBoard = async (id: string) =>
  DB.boards.find((board) => board.id === id);



const createBoard = async (board: Board) => {
  DB.boards.push(board);

  return board;
};


const updateBoard = async (id: string, updatedBoard: Board) => {
  const index = DB.boards.findIndex((board) => board.id === id);

  if (index < 0) {
    return null;
  }

  DB.boards[index] = updatedBoard;

  return updatedBoard;
};

const deleteBoard = async (id: string) => {
  const deletedBoard = DB.boards.find((board) => board.id === id);

  if (!deletedBoard) {
    return null;
  }

  DB.boards = DB.boards.filter((board) => board.id !== id);

  return deletedBoard;
};

const getAllTasks = async () => [...DB.tasks];

const getTask = async (id: string) =>
  DB.tasks.find((task) => task.id === id);

const createTask = async (task: Task) => {
  DB.tasks.push(task);

  return task;
};

const updateTask = async (id: string, updatedTask: Task) => {
  const index = DB.tasks.findIndex((task) => task.id === id);

  if (!index) {
    return null;
  }

  DB.tasks[index] = updatedTask;

  return updatedTask;
};

const deleteTask = async (id: string) => {
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

const unasignTasks = async (userId: string) => {
  DB.tasks = DB.tasks.map((task) =>
    task.userId === userId ? { ...task, userId: null } : { ...task }
  );
};

/**
 * Returns undefined
 * @param {string} boardId board id to delete all tasks
 * @returns {Promise<void>} Promise object represents undefined
 */

const deleteTasks = async (boardId: string) => {
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
