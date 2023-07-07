import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ default: false })
  verified: boolean;

  @Column({ nullable: true })
  verificationToken: string;

  @Column({ nullable: true })
  jwtToken: string;

  @Column({ nullable: true })
  walletAddress: string;

  @Column({ nullable: true })
  roleId: number;

  @ManyToMany(() => Role, (role) => role.users)
  roles: Role[];
}
