#!/bin/bash

# Atualizar um treino existente com uma requisição bem-sucedida
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWU2NGY1ZTJmNzUyYzhkNWNkYWFiOSIsImlhdCI6MTc0NjgyMjQzMH0.w2VCHcNrFIYpBLEixin-wZU1e9LfpoupwEZ6eHxBA6c"
WORKOUT_ID="681e683de2f752c8d5cdaad1"

curl -X PUT "https://crud-autenticado-mongodb.vercel.app/workouts/$WORKOUT_ID" \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino Atualizado",
    "description": "Descrição atualizada do treino.",
    "duration": 60
}'

# Caso de erro: sem token
echo -e "\n\nCaso de erro: sem token"
curl -X PUT "https://crud-autenticado-mongodb.vercel.app/workouts/$WORKOUT_ID" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino Atualizado",
    "description": "Descrição atualizada do treino.",
    "duration": 60
}'

# Caso de erro: token inválido
echo -e "\n\nCaso de erro: token inválido"
INVALID_TOKEN="token_invalido"
curl -X PUT "https://crud-autenticado-mongodb.vercel.app/workouts/$WORKOUT_ID" \
-H "Authorization: Bearer $INVALID_TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino Atualizado",
    "description": "Descrição atualizada do treino.",
    "duration": 60
}'

# Caso de erro: acesso indevido a dados de outro usuário
echo -e "\n\nCaso de erro: acesso indevido"
OTHER_USER_TOKEN="token_de_outro_usuario"
curl -X PUT "https://crud-autenticado-mongodb.vercel.app/workouts/$WORKOUT_ID" \
-H "Authorization: Bearer $OTHER_USER_TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino Atualizado",
    "description": "Descrição atualizada do treino.",
    "duration": 60
}'

# Caso de erro: requisição mal formatada
echo -e "\n\nCaso de erro: requisição mal formatada"
curl -X PUT "https://crud-autenticado-mongodb.vercel.app/workouts/$WORKOUT_ID" \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino Atualizado"
    # Falta a descrição e a duração
}'