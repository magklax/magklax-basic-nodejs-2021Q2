import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ITask } from '../types/task.interface';
import Board from './board.entity';
import User from './user.entity';

@Entity()
class Task implements ITask {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  order: number;

  @Column()
  description: string;

  @Column({ type: 'text', nullable: true })
  userId: User['id'] | null;

  @Column({ type: 'text' })
  boardId: Board['id'];

  @Column({ type: 'text', nullable: true })
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


  static toResponse(task: Task): ITask {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

export default Task;
