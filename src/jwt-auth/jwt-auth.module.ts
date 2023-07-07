import { Module } from '@nestjs/common';
import { JwtAuthService } from './jwt-auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.JWT_TOKEN,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [JwtAuthService],
})
export class JwtAuthModule {}
