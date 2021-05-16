const DB = {
  users: [],
  boards: [],
  tasks: [],
};

const getAllUsers = async () => [...DB.users];

const getUser = async (id) => DB.users.find((user) => user.id === id);

const createUser = async (user) => {
  DB.users.push(user);
  return user;
};

const updateUser = async (id, updatedUser) => {
  const index = DB.users.findIndex((user) => user.id === id);

  if (index < 0) {
    return null;
  }

  DB.users[index] = updatedUser;
  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = DB.users.find((user) => user.id === id);

  if (!deletedUser) {
    return null;
  }

  DB.users = DB.users.filter((user) => user.id !== id);

  return deletedUser;
};

const getAllBoards = async () => [...DB.boards];

const getBoard = async (id) => DB.boards.find((board) => board.id === id);

const createBoard = async (board) => {
  DB.boards.push(board);

  return board;
};

const updateBoard = async (id, updatedBoard) => {
  const index = DB.boards.findIndex((board) => board.id === id);

  if (index < 0) {
    return null;
  }

  DB.boards[index] = updatedBoard;

  return updatedBoard;
};

const deleteBoard = async (id) => {
  const deletedBoard = DB.boards.find((board) => board.id === id);

  if (!deletedBoard) {
    return null;
  }

  DB.boards = DB.boards.filter((board) => board.id !== id);

  return deletedBoard;
};

const getAllTasks = async () => [...DB.tasks];

const getTask = async (id) => DB.tasks.find((task) => task.id === id);

const createTask = async (task) => {
  DB.tasks.push(task);

  return task;
};

const updateTask = async (id, updatedTask) => {
  const index = DB.tasks.findIndex((task) => task.id === id);

  if (!index) {
    return null;
  }

  DB.tasks[index] = updatedTask;

  return updatedTask;
};

const deleteTask = async (id) => {
  const deletedTask = DB.tasks.find((task) => task.id === id);

  if (!deletedTask) {
    return null;
  }

  DB.tasks = DB.tasks.filter((task) => task.id !== id);

  return deletedTask;
};

const unasignTasks = async (userId) => {
  DB.tasks = DB.tasks.map((task) =>
    task.userId === userId ? { ...task, userId: null } : { ...task }
  );
};

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
