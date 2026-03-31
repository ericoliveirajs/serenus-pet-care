import { Body, Controller, Post } from '@nestjs/common';

@Controller('leads')
export class LeadsController {
  
  @Post()
  receberLead(@Body() leadData: any) {
    console.log('Novo lead recebido do formulário:', leadData);
    
    // Futuramente, aqui você injeta o Service/Prisma/TypeORM para salvar no Banco de Dados
    
    return { 
      sucesso: true, 
      mensagem: 'Lead cadastrado com sucesso e pronto para o banco!',
      dados: leadData 
    };
  }
}