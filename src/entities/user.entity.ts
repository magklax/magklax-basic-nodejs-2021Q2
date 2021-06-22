import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { IUser } from '../types/user.interface';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column('varchar')
  name: string = '';

  @Column('varchar')
  login!: string;

  @Column('varchar')
  password!: string;

  static toResponse(user: User): IUser {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
