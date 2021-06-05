import Board from "../resources/boards/board.model";
import Task from "../resources/tasks/task.model";
import User from "../resources/users/user.model";

const errorHandler = (item: User | Board | Task | null | undefined, id: string, name: string): void => {
  if (!item) {
    throw new Error(`The ${name} with id: ${id} has not been found`);
  }
};

export default errorHandler;
