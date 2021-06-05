import { v4 as uuid } from 'uuid';

class Task {
  id: string | undefined;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string | undefined;

  columnId: string;

  constructor({
    id = uuid(),
    title = 'title',
    order = 0,
    description = 'description',
    userId = 'userId',
    boardId = 'boardId',
    columnId = 'columnId',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task: Task): Task {
    return { ...task };
  }
}

export default Task;
