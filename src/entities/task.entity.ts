import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ITask } from '../types/task.interface';
import Board from './board.entity';
import User from './user.entity';

@Entity('task')
class Task implements ITask {
  @PrimaryColumn('uuid')
  id!: string;

  @Column('varchar')
  title = 'title';

  @Column('integer')
  order = 0;

  @Column('varchar')
  description = 'description';

  @ManyToOne(() => User, (user) => user.id, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'userId' })
  userId: string | null = null;

  @ManyToOne(() => Board, (board) => board.id, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'boardId' })
  boardId: string | null = null;

  @Column('text', { nullable: true })
  columnId: string | null = null;
}

export default Task;


