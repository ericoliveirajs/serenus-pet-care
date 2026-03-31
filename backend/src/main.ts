import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Essencial: Permite que o seu front-end no Vercel faça requisições para esta API
  app.enableCors(); 
  
  // Essencial: O Railway usa a variável de ambiente PORT, se não achar, usa a 3000 local
  await app.listen(process.env.PORT || 3000);
}
bootstrap();