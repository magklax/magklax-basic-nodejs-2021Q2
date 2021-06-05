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

const getAllUsers = async (): Promise<Array<User>> => [...DB.users];

const getUser = async (id: string): Promise<User> => {
  const foundUser = DB.users.find((user) => user.id === id);

  if (!foundUser) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  return foundUser;
};

const createUser = async (user: User): Promise<User> => {
  DB.users.push(user);

  return user;
};

const updateUser = async (id: string, updatedUser: User): Promise<User> => {
  const index = DB.users.findIndex((user) => user.id === id);

  if (index < 0) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  DB.users[index] = updatedUser;
  return updatedUser;
};

const deleteUser = async (id: string): Promise<User> => {
  const deletedUser = DB.users.find((user) => user.id === id);

  if (!deletedUser) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  DB.users = DB.users.filter((user) => user.id !== id);

  return deletedUser;
};

// boards
const getAllBoards = async (): Promise<Array<Board>> => [...DB.boards];

const getBoard = async (id: string): Promise<Board> => {
  const foundBoard = DB.boards.find((board) => board.id === id);

  if (!foundBoard) {
    throw new Error(`The board with id: ${id} has not been found`);
  }

  return foundBoard;
};

const createBoard = async (board: Board): Promise<Board> => {
  DB.boards.push(board);

  return board;
};

const updateBoard = async (id: string, updatedBoard: Board): Promise<Board> => {
  const index = DB.boards.findIndex((board) => board.id === id);

  if (index < 0) {
    throw new Error(`The board with id: ${id} has not been found`);
  }

  DB.boards[index] = updatedBoard;

  return updatedBoard;
};

const deleteBoard = async (id: string): Promise<Board> => {
  const deletedBoard = DB.boards.find((board) => board.id === id);

  if (!deletedBoard) {
    throw new Error(`The board with id: ${id} has not been found`);
  }

  DB.boards = DB.boards.filter((board) => board.id !== id);

  return deletedBoard;
};

// tasks
const getAllTasks = async (): Promise<Array<Task>> => [...DB.tasks];

const getTask = async (id: string): Promise<Task> => {
  const foundTask = DB.tasks.find((task) => task.id === id);

  if (!foundTask) {
    throw new Error(`The task with id: ${id} has not been found`);
  }

  return foundTask;
};

const createTask = async (task: Task): Promise<Task> => {
  DB.tasks.push(task);

  return task;
};

const updateTask = async (id: string, updatedTask: Task): Promise<Task> => {
  const index = DB.tasks.findIndex((task) => task.id === id);

  if (!index) {
    throw new Error(`The task with id: ${id} has not been found`);
  }

  DB.tasks[index] = updatedTask;

  return updatedTask;
};

const deleteTask = async (id: string): Promise<Task> => {
  const deletedTask = DB.tasks.find((task) => task.id === id);

  if (!deletedTask) {
    throw new Error(`The task with id: ${id} has not been found`);
  }

  DB.tasks = DB.tasks.filter((task) => task.id !== id);

  return deletedTask;
};

const unasignTasks = async (userId: string): Promise<void> => {
  DB.tasks = DB.tasks.map((task) =>
    task.userId === userId ? { ...task, userId: null } : { ...task }
  );
};

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
