module.exports = {
  type: 'postgres',
  host: 'localhost',
  driver: 'postgres',
  port: 5432,
  username: 'postgres-user',
  password: 'postgres-pswd',
  database: 'nestjs-project',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
