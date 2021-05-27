const uuid = require('uuid').v4;

/** Class representing a task model. */
class Task {
    /**
   * Create task
   * @property {string} id - task id
   * @property {string} title - task title
   * @property {number} order - task order
   * @property {string} description - task description
   * @property {string | null} userId - task user id
   * @property {string | null} boardId - task boar id
   * @property {string | null} columnId - task column id
   */

  constructor({
    id = uuid(),
    title = 'title',
    order = 0,
    description = 'description',
    userId = null,
    boardId = null,
    columnId = null,
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
   * @return {Object<Task.id, Task.title, Task.order, Task.description, Task.userId, Task,boardId, Task.columnId>} task object
   */

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
