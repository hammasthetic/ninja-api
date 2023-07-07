import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Replace with your PostgreSQL server host
      port: 5432, // Replace with your PostgreSQL server port
      username: 'postgres-user', // Replace with your PostgreSQL username
      password: 'postgres-pswd', // Replace with your PostgreSQL password
      database: 'postgres', // Replace with your PostgreSQL database
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
  ],
})
export class DatabaseModule {}
