# CRUD-autenticado-mongodb
Av v2.1.0 - Crud-auth com mongodb.

# Link de vídeo explicando no drive:

- 

## Registro de Treinos (CRUD)

### Funcionalidades
1. **Criar Treino**: `POST /api/workouts`
2. **Listar Treinos**: `GET /api/workouts`
3. **Obter Detalhes de um Treino**: `GET /api/workouts/:id`
4. **Atualizar Treino**: `PUT /api/workouts/:id`
5. **Atualizar Parcialmente um Treino**: `PATCH /api/workouts/:id`
6. **Deletar Treino**: `DELETE /api/workouts/:id`

### Requisitos
- Todas as rotas exigem um token JWT válido no cabeçalho `Authorization`.

### Testes
Scripts de exemplo para testar as rotas estão disponíveis na pasta `requests/`.

### Casos de Erro
- **Sem Token**: Retorna `401 Unauthorized`.
- **Token Inválido**: Retorna `403 Forbidden`.
- **Acesso Indevido**: Retorna `404 Not Found`.
- **Requisição Mal Formatada**: Retorna `400 Bad Request`.
