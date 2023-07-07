import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class SeniorRoleGuard implements CanActivate {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = [1];
    const request = context.switchToHttp().getRequest();
    const userEmail = request.user.email;

    try {
      const user = await this.userRepository.findOne({
        where: { email: userEmail },
      });

      if (!user || !roles.includes(user.roleId)) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  }
}
