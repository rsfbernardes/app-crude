/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// eslint-disable-next-line prettier/prettier
import { SequelizeModule } from '@nestjs/sequelize';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [SequelizeModule.forFeature([Cliente])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
