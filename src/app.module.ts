/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'postgres://yddcyixe:***@tuffi.db.elephantsql.com/yddcyixe',
      username: 'yddcyixe',
      password: 'JhKsjsChNBCwEyYC-XqbolKdAxjUsfOp',
      database: 'app-crud',
      models: [],
      synchronize: true,
    }),
    ClienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
