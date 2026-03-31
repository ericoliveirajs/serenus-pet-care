# Usa uma imagem leve do Node
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro (para aproveitar o cache do Docker)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Faz o build da aplicação NestJS
RUN npm run build

# O Railway injeta a porta dinamicamente, mas expomos a 3000 por padrão
EXPOSE 3000

# Comando para iniciar a aplicação compilada
CMD ["npm", "run", "start:prod"]