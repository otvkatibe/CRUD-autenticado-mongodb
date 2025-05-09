#!/bin/bash

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWU2NGY1ZTJmNzUyYzhkNWNkYWFiOSIsImlhdCI6MTc0NjgyMjQzMH0.w2VCHcNrFIYpBLEixin-wZU1e9LfpoupwEZ6eHxBA6c"

# Simulando uma requisição mal formatada para criar um treino
echo "Tentando criar um treino sem o campo 'title'..."

curl -X POST https://crud-autenticado-mongodb.vercel.app/workouts \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{
    "description": "Treino de pernas",
    "duration": 60
}'

echo -e "\n\n"

# Simulando uma requisição mal formatada para atualizar um treino
echo "Tentando atualizar um treino sem o campo 'duration'..."

curl -X PUT https://crud-autenticado-mongodb.vercel.app/workouts/<ID_TREINO> \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{
    "title": "Treino de costas"
}'

echo -e "\n\n"

# Simulando uma requisição mal formatada para listar treinos
echo "Tentando listar treinos com um método inválido..."

curl -X PATCH https://crud-autenticado-mongodb.vercel.app/workouts \
-H "Authorization: Bearer $TOKEN" 

echo -e "\n\n"