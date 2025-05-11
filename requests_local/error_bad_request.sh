#!/bin/bash

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjEyNGIwZDE4NzlmNjU5ZGQxNTk0MSIsImlhdCI6MTc0NzAwMjU0OX0.L25iyE15iQ9OCh_e3NeLMK6G6O2uwaZPTbbe_00cih4"

# Simulando uma requisição mal formatada para criar um treino
echo "Tentando criar um treino sem o campo 'title'..."

curl -X POST http://localhost:3000/workouts \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{
    "description": "Treino de pernas",
    "duration": 60
}'

echo -e "\n\n"

# Simulando uma requisição mal formatada para atualizar um treino
echo "Tentando atualizar um treino sem o campo 'duration'..."

curl -X PUT http://localhost:3000/workouts/ \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{
    "title": "Treino de costas"
}'

echo -e "\n\n"

# Simulando uma requisição mal formatada para listar treinos
echo "Tentando listar treinos com um método inválido..."

curl -X PATCH http://localhost:3000/workouts \
-H "Authorization: Bearer $TOKEN" 

echo -e "\n\n"