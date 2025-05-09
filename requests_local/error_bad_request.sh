#!/bin/bash

TOKEN="0"

# Simulando uma requisição mal formatada para criar um treino
echo "Tentando criar um treino sem o campo 'title'..."

curl -X POST 0/workouts \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{
    "description": "Treino de pernas",
    "duration": 60
}'

echo -e "\n\n"

# Simulando uma requisição mal formatada para atualizar um treino
echo "Tentando atualizar um treino sem o campo 'duration'..."

curl -X PUT 0/workouts/<ID_TREINO> \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{
    "title": "Treino de costas"
}'

echo -e "\n\n"

# Simulando uma requisição mal formatada para listar treinos
echo "Tentando listar treinos com um método inválido..."

curl -X PATCH 0/workouts \
-H "Authorization: Bearer $TOKEN" 

echo -e "\n\n"