import { Entity, Column, PrimaryColumn } from 'typeorm';
import { IUser } from '../types/user.interface';

@Entity('user')
class User implements IUser {
  @PrimaryColumn('uuid')
  id!: string;

  @Column('varchar')
  name = 'name';

  @Column('varchar')
  login = 'login';

  @Column('varchar')
  password = 'password';
}

export default User;
