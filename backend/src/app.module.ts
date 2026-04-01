import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsModule } from '../leads/leads.module'; // Importando o Módulo!

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    LeadsModule, // <-- Adicionando o módulo aqui
  ],
  controllers: [AppController], // <-- LeadsController removido daqui!
  providers: [AppService],
})
export class AppModule {}