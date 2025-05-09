#!/bin/bash

# Simulando uma requisição com um token inválido para criar um treino
echo "Tentativa de criar um treino com token inválido..."

curl -X POST 0/workouts \
-H "Authorization: Bearer INVALID_TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino de Teste",
    "description": "Descrição do treino de teste",
    "duration": 60
}'

echo -e "\n"

# Simulando uma requisição com um token inválido para listar treinos
echo "Tentativa de listar treinos com token inválido..."

curl -X GET 0/workouts/681e683de2f752c8d5cdaad1 \
-H "Authorization: Bearer INVALID_TOKEN"

echo -e "\n"

# Simulando uma requisição com um token inválido para obter um treino específico
echo "Tentativa de obter um treino específico com token inválido..."

curl -X GET 0/workouts/681e683de2f752c8d5cdaad1 \
-H "Authorization: Bearer INVALID_TOKEN"

echo -e "\n"

# Simulando uma requisição com um token inválido para atualizar um treino
echo "Tentativa de atualizar um treino com token inválido..."

curl -X PUT 0/workouts/681e683de2f752c8d5cdaad1 \
-H "Authorization: Bearer INVALID_TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino Atualizado"
}'

echo -e "\n"

# Simulando uma requisição com um token inválido para deletar um treino
echo "Tentativa de deletar um treino com token inválido..."

curl -X DELETE http://localhost:3000/workouts/681e683de2f752c8d5cdaad1 \
-H "Authorization: Bearer INVALID_TOKEN"