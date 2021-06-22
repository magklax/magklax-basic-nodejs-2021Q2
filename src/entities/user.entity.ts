import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../types/user.interface';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id = uuid();

  @Column('varchar')
  name = '';

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
