import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../types/user.interface';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  constructor({
    id = uuid(),
    name = 'name',
    login = 'login',
    password = 'password',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User): IUser {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
