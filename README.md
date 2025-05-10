# CRUD-autenticado-mongodb

Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) que utiliza o MongoDB como banco de dados e o Express.js como framework para o backend. A aplicação permite o gerenciamento de usuários e treinos, com autenticação via JWT.

## Estrutura do Projeto

## Funcionalidades

### Usuários
- **Registrar Usuário**: `POST /api/users/register`
- **Login de Usuário**: `POST /api/users/login`
- **Obter Perfil do Usuário**: `GET /api/users`

### Treinos
- **Criar Treino**: `POST /api/workouts`
- **Listar Treinos**: `GET /api/workouts`
- **Obter Detalhes de um Treino**: `GET /api/workouts/:id`
- **Atualizar Treino**: `PUT /api/workouts/:id`
- **Atualizar Parcialmente um Treino**: `PATCH /api/workouts/:id`
- **Deletar Treino**: `DELETE /api/workouts/:id`

## Requisitos
- Todas as rotas exigem um token JWT válido no cabeçalho `Authorization`.

## Testes
Scripts de exemplo para testar as rotas estão disponíveis na pasta `requests/`.

## Casos de Erro
- **Sem Token**: Retorna `401 Unauthorized`.
- **Token Inválido**: Retorna `403 Forbidden`.
- **Acesso Indevido**: Retorna `404 Not Found`.
- **Requisição Mal Formatada**: Retorna `400 Bad Request`.

## Instruções de Uso
1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Inicie o banco de dados com `docker-compose up -d`.
5. Inicie a aplicação com `npm run startapp`.
