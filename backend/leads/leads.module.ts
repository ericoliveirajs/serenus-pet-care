import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadsController } from './leads.controller';
import { Lead } from './leads.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lead])], 
  controllers: [LeadsController],
})
export class LeadsModule {}