#!/bin/bash

# Script para listar todos os treinos de um usuário

# Defina o token JWT válido
TOKEN="seu_token_jwt_aqui"

# Requisição bem-sucedida para listar treinos
echo "Listando treinos com token válido..."
curl -X GET http://localhost:3000/workouts \
-H "Authorization: Bearer $TOKEN"

# Requisição sem token
echo -e "\n\nTentativa de listar treinos sem token..."
curl -X GET http://localhost:3000/workouts

# Requisição com token inválido
echo -e "\n\nTentativa de listar treinos com token inválido..."
curl -X GET http://localhost:3000/workouts \
-H "Authorization: Bearer token_invalido"

# Requisição tentando acessar dados de outro usuário (substitua 'outro_user_id' pelo ID de um usuário diferente)
echo -e "\n\nTentativa de listar treinos de outro usuário..."
curl -X GET http://localhost:3000/workouts \
-H "Authorization: Bearer $TOKEN" \
-d '{"userId": "outro_user_id"}'

# Requisição mal formatada (exemplo: sem cabeçalho)
echo -e "\n\nTentativa de listar treinos com requisição mal formatada..."
curl -X GET http://localhost:3000/workouts \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/json" \
-d '{"invalid_field": "value"}'