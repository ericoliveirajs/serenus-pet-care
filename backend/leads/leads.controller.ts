import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead } from './leads.entity';

@Controller('leads')
export class LeadsController {
  constructor(
    @InjectRepository(Lead)
    private readonly leadsRepository: Repository<Lead>,
  ) {}

  @Post()
  async receberLead(@Body() leadData: Partial<Lead>) {
    // Aqui a mágica acontece: salva no Postgres do Supabase
    const novoLead = await this.leadsRepository.save(leadData);
    
    return { 
      sucesso: true, 
      mensagem: 'Lead salvo no banco com sucesso!',
      id: novoLead.id 
    };
  }
}