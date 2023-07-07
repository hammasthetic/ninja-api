import { Role } from 'src/roles/entities/role.entity';

export class CreateUserDto {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  verified: boolean;
  verificationToken: string;
  jwtToken: string;
  walletAddress: string;
  roles: Role[];
}
