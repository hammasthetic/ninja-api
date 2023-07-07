import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create.login.dto';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtAuthService } from 'src/jwt-auth/jwt-auth.service';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtAuthService: JwtAuthService,
  ) {}

  async login(loginDto: CreateLoginDto) {
    const { email, password } = loginDto;

    try {
      const user = await this.userRepository.findOne({
        where: { email: email },
      });

      if (!user) {
        return { error: 'Invalid email or password' };
      }

      const passwordMatches = user.password === password;

      if (!passwordMatches) {
        return { error: 'Invalid email or password' };
      }

      const token = this.jwtAuthService.generateToken(user); // Generate the JWT token

      user.jwtToken = token; // Set the token in the user entity

      await this.userRepository.save(user); // Save the updated user entity to the database

      return { message: 'Login successful', user };
    } catch (error) {
      return { error: 'An error occurred' };
    }
  }
}
