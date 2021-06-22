import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ITask } from '../types/task.interface';

@Entity({ name: 'tasks' })
class Task {
  @PrimaryGeneratedColumn('uuid')
  id = uuid();

  @Column('varchar')
  title = 'Task';

  @Column('integer')
  order = 0;

  @Column('text')
  description = '';

  @Column({ nullable: true, type: 'text' })
  userId!: string | null;

  @Column({ nullable: true, type: 'text' })
  boardId!: string | null;

  @Column()
  columnId!: string;

  static toResponse(task: Task): ITask {
    return { ...task };
  }
}

export default Task;
