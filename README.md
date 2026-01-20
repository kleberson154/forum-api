<div align="center">
  <img src="https://nestjs.com/img/logo-small.svg" alt="NestJS Logo" width="120">
  
  # Questions & Answers API

  Uma API RESTful para gerenciamento de perguntas e respostas, construída com NestJS e Prisma.

  [![Node.js](https://img.shields.io/badge/Node.js-v20+-green)](https://nodejs.org/)
  [![NestJS](https://img.shields.io/badge/NestJS-11.0.1-red)](https://nestjs.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)](https://www.typescriptlang.org/)
  [![Prisma](https://img.shields.io/badge/Prisma-7.2.0-2D3748)](https://www.prisma.io/)
  [![SQLite](https://img.shields.io/badge/SQLite-3-003B57)](https://www.sqlite.org/)
  [![License](https://img.shields.io/badge/License-UNLICENSED-red)](#)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Autenticação](#autenticação)
- [Testes](#testes)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuindo](#contribuindo)

---

## 🎯 Sobre o Projeto

A **Questions & Answers API** é uma plataforma backend para gerenciamento de perguntas e respostas. Permite que usuários se cadastrem, façam login, criem perguntas, respondam a perguntas de outros usuários e gerenciem seu conteúdo.

### Principais Funcionalidades

- ✅ Autenticação e autorização com JWT
- ✅ Gerenciamento de usuários (criar, ler, atualizar, deletar)
- ✅ Gerenciamento de perguntas (CRUD completo)
- ✅ Gerenciamento de respostas (CRUD completo)
- ✅ Validação de dados com class-validator
- ✅ Documentação automática com Swagger
- ✅ Criptografia de senhas com bcrypt
- ✅ Banco de dados com Prisma ORM

---

## 🛠 Tecnologias

### Backend
- **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Prisma](https://www.prisma.io/)** - ORM moderno para Node.js
- **[JWT](https://jwt.io/)** - Autenticação stateless
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** - Criptografia de senhas

### Banco de Dados
- **[SQLite](https://www.sqlite.org/)** - Banco de dados leve e embarcado

### Testing
- **[Jest](https://jestjs.io/)** - Framework de testes
- **[Supertest](https://www.npmjs.com/package/supertest)** - Testes HTTP

### Ferramentas
- **[ESLint](https://eslint.org/)** - Linting
- **[Prettier](https://prettier.io/)** - Formatação de código
- **[Swagger](https://swagger.io/)** - Documentação de API

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v20 ou superior) - [Download](https://nodejs.org/)
- **npm** (v10 ou superior) ou **yarn**
- **Git** - [Download](https://git-scm.com/)

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nest-project.git
cd nest-project
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` e renomeie para `.env`:

```bash
cp .env.example .env
```

---

## ⚙️ Configuração

### Variáveis de Ambiente

Edite o arquivo `.env` e configure:

```env
# Banco de Dados
DATABASE_URL="file:./dev.db"

# JWT Secret
SECRET_KEY="sua-chave-secreta-super-segura-aqui"

# Porta
PORT=3000
```

### Prisma Migrations

Execute as migrations para criar o banco de dados:

```bash
npx prisma migrate dev --name init
```

### Gerar Cliente Prisma

```bash
npx prisma generate
```

---

## 🚀 Como Usar

### Desenvolvimento

Inicie o servidor em modo desenvolvimento com hot-reload:

```bash
npm run start:dev
```

O servidor estará disponível em: `http://localhost:3000`

Documentação Swagger: `http://localhost:3000/api`

### Produção

Compile e execute em modo produção:

```bash
npm run build
npm run start:prod
```

---

## 📁 Estrutura do Projeto

```
src/

├── app.module.ts              # Módulo raiz da aplicação
├── main.ts                     # Arquivo de entrada
├── auth/                       # Módulo de autenticação
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.guard.ts
│   ├── auth.module.ts
│   ├── constants.ts
│   └── *.spec.ts
├── user/                       # Módulo de usuários
│   ├── dto/
│   │   ├── createUser.dto.ts
│   │   └── updateUser.dto.ts
│   ├── entities/
│   │   └── user.entity.ts
│   ├── user.controller.ts
│   ├── user.service.ts
│   ├── user.module.ts
│   └── *.spec.ts
├── questions/                  # Módulo de perguntas
│   ├── dto/
│   │   ├── create-question.dto.ts
│   │   └── update-question.dto.ts
│   ├── entities/
│   │   └── question.entity.ts
│   ├── questions.controller.ts
│   ├── questions.service.ts
│   ├── questions.module.ts
│   └── *.spec.ts
├── answers/                    # Módulo de respostas
│   ├── dto/
│   │   ├── create-answer.dto.ts
│   │   └── update-answer.dto.ts
│   ├── entities/
│   │   └── answer.entity.ts
│   ├── answers.controller.ts
│   ├── answers.service.ts
│   ├── answers.module.ts
│   └── *.spec.ts
└── database/                   # Módulo de banco de dados
    ├── prisma.service.ts
    ├── database.module.ts
    └── *.spec.ts

prisma/
├── schema.prisma              # Schema do banco de dados
└── migrations/                # Histórico de migrações

test/
├── app.e2e-spec.ts           # Testes end-to-end
└── jest-e2e.json
```

---

## 🔌 Endpoints da API

### Autenticação

#### Signup (Criar Usuário)
```http
POST /user/signup
Content-Type: application/json

{
  "email": "usuario@example.com",
  "name": "João Silva",
  "password": "senha123"
}
```

**Resposta (201):**
```json
{
  "id": 1,
  "email": "usuario@example.com",
  "name": "João Silva",
  "password": "$2b$10$...",
  "createdAt": "2025-01-15T13:44:20.000Z",
  "updatedAt": "2025-01-15T13:44:20.000Z"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "usuario@example.com",
  "password": "senha123"
}
```

**Resposta (200):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Usuários

#### Obter Usuário por ID
```http
GET /user/:id
Authorization: Bearer {access_token}
```

#### Atualizar Usuário
```http
PATCH /user/:id
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "name": "Novo Nome",
  "email": "newemail@example.com"
}
```

#### Deletar Usuário
```http
DELETE /user/:id
Authorization: Bearer {access_token}
```

### Perguntas

#### Listar Todas as Perguntas
```http
GET /questions
Authorization: Bearer {access_token}
```

#### Obter Pergunta por ID
```http
GET /questions/:id
Authorization: Bearer {access_token}
```

#### Criar Pergunta
```http
POST /questions
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "title": "Como usar NestJS?",
  "body": "Estou com dúvidas sobre como usar o NestJS..."
}
```

#### Atualizar Pergunta
```http
PATCH /questions/:id
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "title": "Novo título",
  "body": "Novo corpo da pergunta"
}
```

#### Deletar Pergunta
```http
DELETE /questions/:id
Authorization: Bearer {access_token}
```

### Respostas

#### Listar Todas as Respostas
```http
GET /answers
Authorization: Bearer {access_token}
```

#### Obter Resposta por ID
```http
GET /answers/:id
Authorization: Bearer {access_token}
```

#### Criar Resposta
```http
POST /answers/:questionId
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "body": "Aqui está a resposta para sua pergunta..."
}
```

#### Atualizar Resposta
```http
PATCH /answers/:id
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "body": "Resposta atualizada"
}
```

#### Deletar Resposta
```http
DELETE /answers/:id
Authorization: Bearer {access_token}
```

---

## 🔐 Autenticação

A API utiliza **JWT (JSON Web Tokens)** para autenticação.

### Como Usar

1. **Faça login** via endpoint `/auth/login`
2. **Copie o token** retornado
3. **Adicione o header** em todas as requisições protegidas:

```
Authorization: Bearer {seu-token-aqui}
```

### Duração do Token

Os tokens expiram em **24 horas**. Após expiração, você precisará fazer login novamente.

---

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run start` | Inicia o servidor em modo produção |
| `npm run start:dev` | Inicia em modo desenvolvimento com hot-reload |
| `npm run start:debug` | Inicia em modo debug |
| `npm run start:prod` | Inicia a aplicação compilada |
| `npm run build` | Compila o código TypeScript |
| `npm run format` | Formata código com Prettier |
| `npm run lint` | Executa ESLint e corrige problemas |
| `npm run test` | Executa testes unitários |
| `npm run test:watch` | Executa testes em modo watch |
| `npm run test:cov` | Gera relatório de cobertura de testes |
| `npm run test:e2e` | Executa testes E2E |

---

## 🔗 Links Úteis

- [Documentação NestJS](https://docs.nestjs.com)
- [Documentação Prisma](https://www.prisma.io/docs)
- [Documentação TypeScript](https://www.typescriptlang.org/docs)
- [Swagger/OpenAPI](https://swagger.io/)

---

**Desenvolvido com NestJS + Prisma + SQLite**
