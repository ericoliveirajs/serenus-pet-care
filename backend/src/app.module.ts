import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsController } from '../leads/leads.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // O Render vai injetar essa URL automaticamente
      url: process.env.DATABASE_URL, 
      autoLoadEntities: true,
      // synchronize: true cria as tabelas automaticamente (ótimo para o MVP da sua mãe)
      synchronize: true, 
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
  ],
  controllers: [AppController, LeadsController],
  providers: [AppService],
})
export class AppModule {}