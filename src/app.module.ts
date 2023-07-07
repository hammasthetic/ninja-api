import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { LoginModule } from './login/login.module';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    NinjasModule,
    DatabaseModule,
    UsersModule,
    RolesModule,
    LoginModule,
    JwtAuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
