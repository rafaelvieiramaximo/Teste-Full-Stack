# 🔧 Backend - API de Gerenciamento de Usuários

API REST desenvolvida em Node.js com Express para gerenciar usuários (CRUD completo).

## 🚀 Tecnologias

- **Node.js** v22.16.0.
- **Express** - Framework web
- **PostgreSQL** - Banco de dados relacional
- **Docker** - Containerização do banco
- **pg** - Cliente PostgreSQL para Node.js
- **dotenv** - Gerenciamento de variáveis de ambiente
- **cors** - Habilitação de CORS
- **nodemon** - Hot reload em desenvolvimento

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/)

## 🔧 Instalação(Use o bash como terminal para executar os comandos abaixo)

### 1. Clone o repositório
```git clone <url-do-repositorio>
cd backend

### 2. Instale as dependências
```npm install

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do backend (use o `.env.example` como referência):
```envDatabase
DB_HOST=localhost
DB_PORT=5432
DB_USER=admin
DB_PASSWORD=admin123
DB_NAME=users_crudServer
PORT=3000
NODE_ENV=development

### 4. Inicie o banco de dados PostgreSQL com Docker
```docker-compose up -d

Isso irá:
- Criar um container PostgreSQL
- Criar o banco de dados `users_crud`
- Executar o script de inicialização (`db/init.sql`)
- Expor o banco na porta `5432`

### 5. Inicie o servidor
```npm run dev

O servidor estará rodando em: **http://localhost:3000**

## 📡 Endpoints da API

### **Listar todos os usuários**
```httpGET /api/users

**Resposta (200 OK):**
```json[
{
"id": 1,
"name": "João Silva",
"email": "joao@example.com",
"role": "admin",
"created_at": "2026-02-14T10:30:00.000Z"
}
]

---

### **Buscar usuário por ID**
```httpGET /api/users/:id

**Resposta (200 OK):**
```json{
"id": 1,
"name": "João Silva",
"email": "joao@example.com",
"role": "admin",
"created_at": "2026-02-14T10:30:00.000Z"
}

**Resposta (404 Not Found):**
```json{
"error": "Não encontrado",
"message": "Usuário não encontrado"
}

---

### **Criar novo usuário**
```httpPOST /api/users
Content-Type: application/json{
"name": "Maria Santos",
"email": "maria@example.com",
"role": "user"
}

**Resposta (201 Created):**
```json{
"id": 2,
"name": "Maria Santos",
"email": "maria@example.com",
"role": "user",
"created_at": "2026-02-14T10:35:00.000Z"
}

**Resposta (400 Bad Request):**
```json{
"error": "Erro de validação",
"message": "Nome é obrigatório, Email é obrigatório"
}

**Resposta (409 Conflict):**
```json{
"error": "Conflito",
"message": "Email já cadastrado"
}

---

### **Atualizar usuário**
```httpPUT /api/users/:id
Content-Type: application/json{
"name": "João Silva Atualizado",
"email": "joao.novo@example.com",
"role": "super-admin"
}

**Resposta (200 OK):**
```json{
"id": 1,
"name": "João Silva Atualizado",
"email": "joao.novo@example.com",
"role": "super-admin",
"created_at": "2026-02-14T10:30:00.000Z"
}

---

### **Deletar usuário**
```httpDELETE /api/users/:id

**Resposta (200 OK):**
```json{
"message": "Usuário deletado com sucesso",
"id": 1
}

**Resposta (404 Not Found):**
```json{
"error": "Não encontrado",
"message": "Usuário não encontrado"
}

## 🗄️ Estrutura do Banco de Dados

### Tabela `users`

| Campo       | Tipo         | Restrições              |
|-------------|--------------|-------------------------|
| id          | SERIAL       | PRIMARY KEY             |
| name        | VARCHAR(255) | NOT NULL                |
| email       | VARCHAR(255) | NOT NULL, UNIQUE        |
| role        | VARCHAR(100) | -                       |
| created_at  | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP |

## 📁 Estrutura do Backend/
├── db/
│   └── init.sql              # Script de inicialização do banco
├── src/
│   ├── config/
│   │   └── database.js       # Configuração do PostgreSQL
│   ├── controllers/
│   │   └── userController.js # Lógica de negócio
│   ├── routes/
│   │   └── userRoutes.js     # Definição de rotas
│   ├── validators/
│   │   └── userValidator.js  # Validações
│   ├── middlewares/
│   │   └── errorHandler.js   # Tratamento de erros
│   └── server.js             # Ponto de entrada
├── .env                      # Variáveis de ambiente (não versionado)
├── .env.example              # Exemplo de variáveis
├── .gitignore
├── docker-compose.yml        # Configuração do Docker
├── package.json
└── README.md

## 🧪 Testando a API

### Usando URL:
```Listar usuários
curl http://localhost:3000/api/users
```Criar usuário
curl -X POST http://localhost:3000/api/users 
-H "Content-Type: application/json" 
-d '{"name":"Teste","email":"teste@example.com","role":"user"}'

### Usando Postman/Insomnia:

Importe a collection ou teste manualmente os endpoints acima.

## 🐳 Comandos Docker Úteis
```Iniciar containers
docker-compose up -d
```Parar containers
docker-compose down
```Ver logs
docker-compose logs -f
```Acessar o PostgreSQL via terminal
docker exec -it users_crud_db psql -U admin -d users_crud
```Reiniciar tudo (apaga dados!)
docker-compose down -v
docker-compose up -d

## 🛠️ Scripts Disponíveis
```Modo desenvolvimento (com nodemon)
npm run devModo produção
npm start

## 🔒 Validações Implementadas

- **Nome:** Obrigatório, não pode ser vazio
- **Email:** Obrigatório, formato válido, único no banco
- **Role:** Opcional

## 📝 Notas

- O banco de dados persiste os dados no volume Docker `postgres_data`
- Em desenvolvimento, use `npm run dev` para hot reload
- As senhas do banco estão no `.env` - **não commitar em produção!**

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.