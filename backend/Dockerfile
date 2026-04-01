FROM node:18-alpine

WORKDIR /app

# Copia os arquivos de definição primeiro
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Instala todas as dependências (necessárias para o build)
RUN npm install

# Copia o restante do código
COPY . .

# Executa o build (isso vai gerar a pasta dist/src)
RUN npm run build

# O Render usa a porta 3000 por padrão, mas injeta a variável PORT
EXPOSE 3000

# Executa o script que acabamos de ajustar no package.json
CMD ["npm", "run", "start:prod"]