import { v4 as uuid } from 'uuid';

/** Class representing a task model. */
class Task {
  /**
   * Create task
   * @property {string} id - task id
   * @property {string} title - task title
   * @property {number} order - task order
   * @property {string} description - task description
   * @property {string} userId - task user id
   * @property {string} boardId - task boar id
   * @property {string} columnId - task column id
   */

  id: string;

  title: string;

  order: number;

  description: string;

  userId: string;

  boardId: string;

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

  /**
   * Return task object
   * @param {Task} task - created task object
   * @return {Task} task object
   */

  static toResponse(task: Task): Task {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

export default Task;
